// Feed.tsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import TextareaAutosize from "react-textarea-autosize";
import Navbar from "../Navbar/Navbar";
import PostItem from './PostItem';

// Lazy load the sub-pages
const Trending = lazy(() => import('../Navbar/NavbarOptions/Trending'));
const Community = lazy(() => import('../Navbar/NavbarOptions/Community'));
const Following = lazy(() => import('../Navbar/NavbarOptions/Following'));
const BookClub = lazy(() => import('../Navbar/NavbarOptions/BookClub'));

// Main feed content component
const FeedContent = () => (
  <>
    {/* Post Composer */}
    <div className="border-b border-gray-200 px-3 md:px-4 py-3 md:py-4">
      <TextareaAutosize 
        placeholder="What book are you reading?" 
        className="w-full resize-none outline-none text-base md:text-lg"
        minRows={2}
        maxRows={8}
      />
      <div className="flex justify-end mt-2">
        <button className="cta-button px-4 md:px-6 py-2 rounded-full font-bold text-sm md:text-base">
          Post
        </button>
      </div>
    </div>

    {/* Feed Posts */}
    <div className="divide-y divide-gray-200">
      {[...Array(10)].map((_, i) => (
        <PostItem key={i} index={i} />
      ))}
    </div>
  </>
);

const Feed = () => {
  return (
    <div className="flex flex-col h-screen max-h-screen overflow-hidden">
      {/* Feed Header - Fixed */}
      <div className="shrink-0 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95 z-10">
        <Navbar />
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto">
        <Suspense fallback={
          <div className="flex items-center justify-center p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mx-auto mb-3"></div>
              <p className="text-gray-600 text-sm">Loading...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<FeedContent />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/community" element={<Community />} />
            <Route path="/following" element={<Following />} />
            <Route path="/book-clubs" element={<BookClub />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default Feed;