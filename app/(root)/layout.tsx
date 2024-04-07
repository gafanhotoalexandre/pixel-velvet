import { Sidebar } from '@/components/shared/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <main className="root">
      {/* Sidebar */}
      <Sidebar />

      {/* MobileNav */}

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  )
}
