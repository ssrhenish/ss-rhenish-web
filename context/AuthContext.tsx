"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { toast } from "sonner"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock } from "lucide-react"

interface AuthContextType {
  isUnlocked: boolean
  openAuthModal: (fileInfo?: { name: string; type: string }) => void
  handleAssetAccess: (fileInfo: { name: string; type: string; downloadUrl: string | null }) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const SERMON_PASSCODE = "1234" // Or pull from env / backend config

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [pendingFile, setPendingFile] = useState<{ name: string; type: string } | null>(null)

  useEffect(() => {
    const savedAuth = sessionStorage.getItem("sermon_unlocked")
    if (savedAuth === "true") {
      setIsUnlocked(true)
    }
  }, [])

  const openAuthModal = (fileInfo?: { name: string; type: string }) => {
    if (fileInfo) setPendingFile(fileInfo)
    setModalOpen(true)
  }

  const handleAssetAccess = (fileInfo: { name: string; type: string; downloadUrl: string | null }) => {
    if (isUnlocked && fileInfo.downloadUrl) {
      if (fileInfo.downloadUrl) {
        // trigger download by creating a temporary anchor element
        const link = document.createElement('a');
        link.href = fileInfo.downloadUrl;
        link.download = fileInfo.name || 'download_file';
        document.body.appendChild(link);
        link.click();
        
        // remove the link after triggering download
        document.body.removeChild(link);
      }
    } else {
      openAuthModal(fileInfo)
    }
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === SERMON_PASSCODE) {
      setIsUnlocked(true)
      sessionStorage.setItem("sermon_unlocked", "true")
      setModalOpen(false)
      setPassword("")
      toast.success("密碼正確，資源已解鎖！", { position: "top-center" })
      if (pendingFile) {
        window.open(`/downloads/${pendingFile.type === "簡報 (PPT)" ? "ppt" : "mp3"}/${pendingFile.name}`, '_blank')
        setPendingFile(null)
      }
    } else {
      toast.error("密碼不正確，請重新輸入（或向堂會同工查詢）", { position: "top-center" })
    }
  }

  return (
    <AuthContext.Provider value={{ isUnlocked, openAuthModal, handleAssetAccess }}>
      {children}
      
      {/* Global Password Dialog */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg">
              <Lock className="w-5 h-5 text-brand-orange" />
              輸入通行密碼
            </DialogTitle>
            <DialogDescription className="text-xs pt-1">
              為保障版權與內部資源，下載受保護檔案需輸入通行密碼。
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handlePasswordSubmit} className="space-y-4 py-2">
            <Input
              type="password"
              placeholder="請輸入密碼"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <DialogFooter className="gap-2 sm:gap-0">
              <Button type="button" variant="ghost" onClick={() => setModalOpen(false)}>
                取消
              </Button>
              <Button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white">
                確認解鎖
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}