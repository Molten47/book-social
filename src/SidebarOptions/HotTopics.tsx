


import { lazy, Suspense, useState } from 'react'
import { Flame, Hash } from 'lucide-react'
import TextareaAutosize from "react-textarea-autosize"

// Lazy load topic feed components
const AIandFutureTech = lazy(() => import('./topics/AIandFuture'))
{/*
  const ClassicLiterature = lazy(() => import('./topics/classicliterature'))
const BookToScreen = lazy(() => import('./topics/BookToScreen'))
const WritingTips = lazy(() => import('./topics/WritingTips'))
const IndieAuthors = lazy(() => import('./topics/IndieAuthors'))
const BookRecommendations = lazy(() => import('./topics/BookRecommendations'))
  
  */}

  {/* 
    
    const topics = [
 
  { id: 'classic-literature', hashtag: '#ClassicLiterature', component: ClassicLiterature },
  { id: 'book-to-screen', hashtag: '#BookToScreen', component: BookToScreen },
  { id: 'writing-tips', hashtag: '#WritingTips', component: WritingTips },
  { id: 'indie-authors', hashtag: '#IndieAuthors', component: IndieAuthors },
  { id: 'book-recommendations', hashtag: '#BookRecommendations', component: BookRecommendations }
]
    */}

const topics = [
 { id: 'ai-future-tech', hashtag: '#AIandFutureTech', component: AIandFutureTech }
]
    



const HotTopics = () => {
  const [activeTopic, setActiveTopic] = useState(topics[0].id)
  
  const ActiveTopicComponent = topics.find(t => t.id === activeTopic)?.component
  const activeHashtag = topics.find(t => t.id === activeTopic)?.hashtag

  return (
    <div className="min-h-screen">
      {/* Header with Hashtags */}
      <div className="sticky top-0 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Flame size={28} className="text-orange-500" />
            <h1 className="text-2xl font-bold">Hot Topics</h1>
          </div>
          
          {/* Hashtag Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${
                  activeTopic === topic.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Hash size={16} />
                {topic.hashtag.replace('#', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Post Composer */}
        <div className="border-t border-gray-200 px-6 py-4">
          <TextareaAutosize 
            placeholder={`Share your thoughts on ${activeHashtag}...`}
            className="w-full resize-none outline-none text-lg"
            minRows={2}
            maxRows={8}
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">{activeHashtag}</span>
            <button className="cta-button px-6 py-2 rounded-full font-bold">
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Topic Feed */}
      <div className="mt-2">
        <Suspense fallback={
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading {activeHashtag}...</p>
            </div>
          </div>
        }>
          {ActiveTopicComponent && <ActiveTopicComponent />}
        </Suspense>
      </div>
    </div>
  )
}

export default HotTopics