interface LayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return <main className="auth">{children}</main>
}
