//import React from 'react'
import SidebarMenu from '../Home/SidebarMenu'
import Feed from './Feed/FeedLayout'
import TrendsMenu from '../Home/TrendsMenu'

const LandingPage = () => {
  return (
    <div className="flex flex-row min-h-screen w-full">
      {/* Left Sidebar - Fixed width */}
      <div className="w-64 border-r border-gray-200 px-4 py-6 sticky top-0 h-screen overflow-y-auto">
        <SidebarMenu />
      </div>

      {/* Middle Feed - Flexible width */}
      <div className="flex-1 border-r border-gray-200 max-w-2xl">
        <Feed />
      </div>

      {/* Right Trends - Fixed width */}
      <div className="w-80 px-4 py-6 sticky top-0 h-screen overflow-y-auto">
        <TrendsMenu />
      </div>
    </div>
  )
}

export default LandingPage