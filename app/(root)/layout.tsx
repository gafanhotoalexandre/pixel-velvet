import { MobileNav } from '@/components/shared/MobileNav'
import { Sidebar } from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/sonner'

interface LayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <main className="root">
      {/* Sidebar */}
      <Sidebar />
      {/* MobileNav */}
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
  )
}
