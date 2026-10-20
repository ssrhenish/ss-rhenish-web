# ss-rhenish-web

This is a modern, responsive church website built with [Next.js](https://nextjs.org) and **shadcn/ui** This project utilizes **SharePoint** as a serverless backend media repository to deliver worship and sermon recordings as well as event images .The application is fully deployed on **Vercel**.

## Tech Stack

- **Frontend Framework:** [Next.js (App Router)](https://nextjs.org)
- **UI & Styling:** [shadcn/ui](https://shadcn.com) + [Tailwind CSS](https://tailwindcss.com)
- **Backend & Storage:** [Microsoft Graph API](https://microsoft.com) / **Microsoft SharePoint**
- **Hosting Platform:** [Vercel](https://vercel.com)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:
1. **Node.js** and **npm** installed.
2. A Microsoft 365 account with access to SharePoint.
3. An App Registration in the Azure Portal to obtain Microsoft Graph API credentials.

## Project Structure

This project uses the modern **Next.js App Router** architecture. Below is an overview of the key directories and how content is managed:

```text
├── app/                  # Next.js App Router (Routing, Pages, Layouts)
│   ├── layout.tsx        # Global layout (Navbar, Footer, Providers)
│   ├── page.tsx          # Church Website Homepage
│   ├── about/            # /about page (History, Vision, Pastors)
│   │   └── page.tsx
│   ├── sermons/          # /sermons media page (Fetches SharePoint data)
│   │   └── page.tsx
│   └── api/              # Route Handlers (Internal API requests)
│       └── sharepoint/   # Next.js backend endpoints for Graph API
│           └── route.ts
├── components/           # Reusable UI Components
│   ├── ui/               # Lower-level components from shadcn/ui (Button, Dialog, etc.)
│   ├── header.tsx        # Navigation components
│   └── Footer.tsx        # Navigation components
├── public/               # Static assets served directly to the browser
│   └── images/           # Local imagery assets
├── .env.local            # Local secret keys (DO NOT COMMIT)
└── package.json          # Project dependencies & scripts
```

### Routing & Page Management (`/app`)

Next.js uses a **folder-based routing system** inside the `app/` directory. Each folder represents a URL path segment, and a page is only accessible if it contains a `page.tsx` file:

- **Homepage:** Managed directly by `app/page.tsx`.
- **Nested Pages:** Folders like `app/about/` translate to `://yourdomain.com`.
- **Data Fetching:** Pages like `app/sermons/page.tsx` act as Server Components. They securely make authorized server-side fetch calls to your backend API routes (`app/api/sharepoint/route.ts`) to read live stream listings without exposing corporate API keys to the browser.
- **Global Shell:** The `app/layout.tsx` file wraps around all pages to enforce universal styles, inject Tailwind setups, and render persistent church site layouts (like navigation menus).

### Static Content (`/public/images`)

While long-form recorded video and audio files are dynamically retrieved from your serverless **SharePoint** drive to save local disk allocations, **static interface designs are kept local**:

- **Location:** Put all layout illustrations, icons, staff portraits, and banners directly into `/public/images/`.
- **Usage in Code:** Next.js mounts the `public` directory to the root directory automatically. You can fetch local media components like this:
  ```tsx
  import Image from 'next/image';

  export default function Hero() {
    return (
      <Image 
        src="/images/hero-bg.jpg" 
        alt="Church Sanctuary" 
        width={1920} 
        height={1080} 
      />
    );
  }
  ```


## Local Development Workflow

Follow these steps to set up the project locally, manage your code changes, and keep your repository up to date.


### 1. First Time Setup (Clone & Install)

Get a local copy of the repository on your machine and install all required dependencies:

```bash
# Clone the repository to your local machine
git clone https://github.com/ssrhenish/ss-rhenish-web.git

# Move into the project directory
cd ss-rhenish-web

# Install all project dependencies
npm install
```

### 2. Feature Branching Workflow (Create & Switch Branches)

Always create a new branch when working on a new feature, fixing a bug, or updating church content.

**Do not commit directly to the `main` branch.**

```bash
# Step 1: Make sure you are on the main branch
git checkout main

# Step 2: Get the latest updates before creating your branch
git pull origin main

# Step 3: Create AND switch to a new descriptive feature branch
# Syntax: git checkout -b branch-name
git checkout -b your-branch-name

# (Alternative) If you already have an existing branch and just want to switch to it:
git checkout your-branch-name
```

### 3. Staying Sync with `main` branch (Pulling Latest Updates)

If other members have updated the project, use these commands to bring their changes into your local workspace:

```bash
# Step 1(a) (ONLY WHEN there's local uncommitted changes): Stash your local changes
git stash -u

# Step 1: Switch back to the main branch
git checkout main

# Step 2: Fetch and merge the latest changes from GitHub
git pull origin main

# Step 3: Switch back to your working branch
git checkout your-branch-name

# Step 4: Merge the updated main branch into your feature branch to stay in sync
git merge main

# Step 4(a) (ONLY WHEN you have stashed changes): Restore your stashed local changes
git stash pop
```

### 4. run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment on Vercel

This project is optimized for deployment on the **Vercel Platform**. We use Vercel's native GitHub integration to handle automated continuous deployment (CI/CD) via Pull Requests.

### 1. Creating a Pull Request (PR)

Always push your changes to a feature branch and open a Pull Request so your code can be reviewed and checked for building errors.

1.1 **Push your local branch to GitHub:**
   ```bash
   git push origin your-branch-name
   ```
1.2. **Open the PR:** Go to the repository on GitHub. You will see a yellow banner prompting you to click **"Compare & pull request"**.

1.3. **Describe your changes:** Write a brief note explaining what you added or fixed (e.g., *"Added the new worship video player module connected to SharePoint"*).

1.4. **Submit:** Click **"Create pull request"**.

### 2 Preview Deployments (For Pull Requests)
* The moment you open or update a Pull Request, **Vercel automatically triggers a preview build**.
* Vercel will leave an automated comment inside your GitHub PR containing a **Preview URL**. 
* You and other team members can click this link to test out your new feature/media layout on a live staging site before it goes live to the church congregation.

### 3. Production Deployments (Merging to Main)
* Once the Pull Request is reviewed and **merged into the `main` branch**, Vercel instantly detects the merge.
* It automatically deploys the updated code directly to the live production server.