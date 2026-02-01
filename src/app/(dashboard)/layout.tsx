import Link from 'next/link'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-rose-500">Forever</span>Slim
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-rose-500">Dashboard</Link>
            <Link href="/ordini" className="text-gray-600 hover:text-rose-500">Ordini</Link>
            <Link href="/profilo" className="text-gray-600 hover:text-rose-500">Profilo</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-white border-t mt-auto py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Forever Slim. Tutti i diritti riservati.
      </footer>
    </div>
  )
}
