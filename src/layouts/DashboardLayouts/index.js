import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-[100px] bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4 bg-gray-100 h-[95vh] max-h-[95vh] overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}