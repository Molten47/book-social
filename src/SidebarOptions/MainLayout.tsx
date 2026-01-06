// MainLayout.tsx (create this new file)
import { Outlet } from 'react-router-dom'
import SidebarMenu from '../Home/SidebarMenu'

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 p-4 sticky top-0 h-screen">
        <SidebarMenu />
      </aside>
      
      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout