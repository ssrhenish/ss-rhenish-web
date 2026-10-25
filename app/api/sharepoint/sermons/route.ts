// app/api/sharepoint/route.ts
import { NextResponse } from 'next/server';
import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';
import { ClientSecretCredential } from '@azure/identity';
import { SermonDetails } from '@/app/worship/sermons/columns';

export async function GET() {
  
  try {

    // Vercel environment variables for Azure AD app registration
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;

    if (!tenantId || !clientId || !clientSecret) {
      return NextResponse.json({ error: 'Missing Azure Env Variables' }, { status: 500 });
    }

    // client Secret Credential for Azure AD authenticationz 
    const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);

    // define scope for authentication provider (.default => Azure Sites.Selected)
    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
      scopes: ['.default'],
      //scopes: ['https://chineserhenishchur.sharepoint.com'],
    });

    // initialize Microsoft Graph Client
    const graphClient = Client.initWithMiddleware({ authProvider });

    // target SharePoint Site ID (you can get this from the SharePoint site settings or via Graph API)
    const targetSiteId = '://chineserhenishchur.sharepoint.com,3efa0446-3556-40ae-aded-72c9f7471870,7d97306c-22fb-4d1c-ac28-3dd51be45022';

    // [DEBUG USE] print the SharePointsite data
    //const siteData = await graphClient.api(`/sites/chineserhenishchur.sharepoint.com,99008b9a-9860-4fe7-b295-a95772c5a26f,65479d3b-5d2f-431a-bc08-00a50e9f6196/drives`).get();
    //console.log(siteData);

    // [DEBUG USE] print the content of the "sermons" folder of the SharePoint site
    //const siteData = await graphClient.api(`/drives/b!mosAmWCY50-ylalXcsWibzudR2UvXRpDvAgApQ6fYZYMIiZZVlerTYflmPyn9t4p/root/children`).get();
    //console.log(driveData);

    // =================================================================================================================================================
    // Graph API call to get the list of files in the "sermons" folder of the SharePoint site
    // =================================================================================================================================================
    let result = new Array<SermonDetails>();

    // Graph API call to get the matadata of the files, including the custom fields (Date, Session, Speaker, Topic, Verse, MediaType) and download URL
    const siteData = await graphClient.api(`/drives/b!mosAmWCY50-ylalXcsWibzudR2UvXRpDvAgApQ6fYZYMIiZZVlerTYflmPyn9t4p/root/children?$expand=listItem($expand=fields)`).get();
    
    // map the siteData to the SermonDetails structure
    siteData.value.map(
      (item: any) => {

        const fields = item.listItem.fields;

        if (fields) {
          let sermon: SermonDetails = {
            date: fields.Date,
            session: fields.Session,
            speaker: fields.Speaker,
            topic: fields.Topic,
            verse: fields.Verse,
            powerpoint: fields.MediaType === 'PPT' ? item["@microsoft.graph.downloadUrl"] : null,
            mp3: fields.MediaType === 'MP3' ? item["@microsoft.graph.downloadUrl"] : null,
          };

          result.push(sermon);
        }
      }
    );

    // restructure the result to group by unique sermons (by date, session, speaker, topic, verse) and combine the media types (PPT and MP3) into one entry
    const structuredSermons = result.reduce((accumulator, currentFile) => {
      
      // use a unique key based on date, session, speaker, topic, and verse to group the sermons
      const key = `${currentFile.date}_${currentFile.session}_${currentFile.speaker}_${currentFile.topic}_${currentFile.verse}`;
      
      // if the key doesn't exist in the accumulator, create a new entry with the current file's details and initialize the media types to null
      if (!accumulator[key]) {
        accumulator[key] = {
          topic: currentFile.topic,
          speaker: currentFile.speaker,
          date: currentFile.date,
          session: currentFile.session,
          verse: currentFile.verse,
          powerpoint: null,
          mp3: null
        };
      }

      // if the current file is a PPT, set the powerpoint field
      // if it's an MP3, set the mp3 field
      if (currentFile.powerpoint) {
        accumulator[key].powerpoint = currentFile.powerpoint;
      } else if (currentFile.mp3) {
        accumulator[key].mp3 = currentFile.mp3;
      }
      
      return accumulator;
    }, {} as Record<string, SermonDetails>);
    
    // [DEBUG USE] print the finalized sermon data
    //console.log(Object.values(structuredSermons));

    // return the structured sermons as JSON response
    return NextResponse.json({ success: true, data: Object.values(structuredSermons) });
  } catch (error: any) {
    console.error('SharePoint API Error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}