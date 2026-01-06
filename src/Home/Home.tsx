// Home.tsx
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import SidebarMenu from "./SidebarMenu"
import TrendsMenu from './TrendsMenu'

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
  return (
    <div className='flex flex-row min-h-screen w-full px-10 paragraph-font'>
      {/* Left Sidebar */}
      <div className="w-1/5 border-r border-gray-200 px-4 py-6 sticky top-0 h-screen overflow-y-auto">
        <SidebarMenu />
      </div>

      {/* Middle Content - Routes */}
      <div className="flex-1 border-r border-gray-200 max-w-3xl">
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

      {/* Right Trends */}
      <div className="w-1/3 px-4 py-6 sticky top-0 h-screen overflow-y-auto">
        <TrendsMenu />
      </div>
    </div>
  )
}

export default Home