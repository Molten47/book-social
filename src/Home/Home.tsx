// Home/Home.tsx
import { lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SidebarMenu from "./SidebarMenu"
import TrendsMenu from './TrendsMenu'
import BottomNav from '../MobileVersion/BottomNavbar'
import SearchModal from '../MobileVersion/SearchModal'
import { Menu, X } from 'lucide-react'

// Lazy load all the page components
const Feed = lazy(() => import('../Landing page/Feed/FeedLayout'))
const Community = lazy(() => import('../SidebarOptions/community'))
const HotTopics = lazy(() => import('../SidebarOptions/HotTopics'))
const MyLibrary = lazy(() => import('../SidebarOptions/Library'))
const Profile = lazy(() => import('../SidebarOptions/Profile'))
const ShortStories = lazy(() => import('../SidebarOptions/shortstories'))
const Authors = lazy(() => import('../SidebarOptions/authors'))
const NewReleases = lazy(() => import('../SidebarOptions/newreleases'))
const Reading = lazy(() => import('../SidebarOptions/reading'))

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    // Swipe from left edge to open
    if (isRightSwipe && touchStart < 50 && !isSidebarOpen) {
      setIsSidebarOpen(true)
    }
    
    // Swipe left to close
    if (isLeftSwipe && isSidebarOpen) {
      setIsSidebarOpen(false)
    }
  }

  return (
    <>
      <div 
        className='flex flex-row min-h-screen w-full lg:px-10 paragraph-font pb-16 lg:pb-0'
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Mobile Header - Only visible on mobile */}
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-30 px-4 py-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h2 className="text-xl font-bold common-font">BookieChat</h2>
            <div 
              className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              AJ
            </div>
          </div>
        </div>

        {/* Overlay for mobile when sidebar is open */}
              {isSidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-gray-50 bg-opacity-20 z-40 mt-16"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar */}
        <div className={`
          fixed lg:static top-16 lg:top-0 h-[calc(100vh-4rem)] lg:h-screen overflow-y-auto
          w-4/5 sm:w-64 lg:w-1/5
          bg-white border-r border-gray-200 px-4 py-6
          transform transition-transform duration-300 ease-in-out z-50 lg:z-auto
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:sticky lg:top-0
        `}>
          <SidebarMenu onNavigate={() => setIsSidebarOpen(false)} />
        </div>

        {/* Middle Content - Routes */}
        <div className="flex-1 border-r border-gray-200 max-w-3xl mt-16 lg:mt-0">
          <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
            <Routes>
              <Route path="/home" element={<Feed />} />
              <Route path="/community" element={<Community />} />
              <Route path="/hot-topics" element={<HotTopics />} />
              <Route path="/my-library" element={<MyLibrary />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/short-stories" element={<ShortStories />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/new-releases" element={<NewReleases />} />
              <Route path="/reading" element={<Reading />} />
            </Routes>
          </Suspense>
        </div>

        {/* Right Trends - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block w-1/3 px-4 py-6 sticky top-0 h-screen overflow-y-auto">
          <TrendsMenu />
        </div>
      </div>

      {/* Bottom Navigation - Mobile only */}
      <BottomNav onSearchClick={() => setIsSearchOpen(true)} />

      {/* Search Modal - Mobile only */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}

export default Home