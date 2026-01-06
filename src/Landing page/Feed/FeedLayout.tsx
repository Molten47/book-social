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
    <div className="border-b border-gray-200 px-4 py-4">
      <TextareaAutosize 
        placeholder="What book are you reading?" 
        className="w-full resize-none outline-none text-lg"
        minRows={3}
        maxRows={10}
      />
      <div className="flex justify-end mt-2">
        <button className="cta-button px-6 py-2 rounded-full font-bold">
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
    <div className="min-h-screen">
      {/* Feed Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95 z-10">
        <Navbar />
      </div>

      {/* Nested Routes with Suspense */}
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<FeedContent />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/community" element={<Community />} />
          <Route path="/following" element={<Following />} />
          <Route path="/book-clubs" element={<BookClub />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Feed;