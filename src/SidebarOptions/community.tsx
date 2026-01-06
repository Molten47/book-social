import { lazy, Suspense, useState } from 'react'
import { Users } from 'lucide-react'

// Lazy load community chat components
const AfricanLiteratiCommunity = lazy(() => import('./communites/AfricanLiterati'))
const StanfordScienceBookClub = lazy(() => import('./communites/StanfordSscience'))
const TechnicalWriters = lazy(() => import('./communites/technicalwriters'))
const FantasyLovers = lazy(() => import('./communites/fantasylovers'))
const MysteryReaders = lazy(() => import('./communites/miseryreaders'))
const PoetryCircle = lazy(() => import('./communites/poetrylovers'))

const communities = [
  { id: 'african-literati', name: 'African Literati Community', component: AfricanLiteratiCommunity },
  { id: 'stanford-science', name: 'Stanford Science Book Club', component: StanfordScienceBookClub },
  { id: 'technical-writers', name: 'Technical Writers', component: TechnicalWriters },
  { id: 'fantasy-lovers', name: 'Fantasy Lovers', component: FantasyLovers },
  { id: 'mystery-readers', name: 'Mystery Readers', component: MysteryReaders },
  { id: 'poetry-circle', name: 'Poetry Circle', component: PoetryCircle }
]

const Community = () => {
  const [activeTab, setActiveTab] = useState(communities[0].id)
  
  const ActiveCommunityComponent = communities.find(c => c.id === activeTab)?.component

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Users size={28} className="text-blue-500" />
            <h1 className="text-2xl font-bold">Communities</h1>
          </div>
          
          {/* Community Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-x-hide">
            {communities.map((community) => (
              <button
                key={community.id}
                onClick={() => setActiveTab(community.id)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeTab === community.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {community.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Community Content */}
      <div className="flex-1 overflow-hidden">
        <Suspense fallback={
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading community...</p>
            </div>
          </div>
        }>
          {ActiveCommunityComponent && <ActiveCommunityComponent />}
        </Suspense>
      </div>
    </div>
  )
}

export default Community