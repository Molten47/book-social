//import React from 'react'

import SidebarMenu from "./SidebarMenu"
import Feed from "../Landing page/Feed/Feed"
import TrendsMenu from './TrendsMenu'

const Home = () => {
  return (
    <div className='flex flex-row min-h-screen w-full px-10 paragraph-font'>
      {/* Left Sidebar */}
      <div className="w-1/5 border-r border-gray-200 px-4 py-6 sticky top-0 h-screen overflow-y-auto">
        <SidebarMenu />
      </div>

      {/* Middle Feed */}
      <div className="flex-1 border-r border-gray-200 max-w-3xl">
        <Feed />
      </div>

      {/* Right Trends */}
      <div className="w-1/3 px-4 py-6 sticky top-0 h-screen overflow-y-auto">
        <TrendsMenu />
      </div>
    </div>
  )
}

export default Home