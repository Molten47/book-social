// pages/Profile.tsx
import {  MapPin, Calendar, Link as LinkIcon, Mail, Edit } from 'lucide-react'

const Profile = () => {
  const profile = {
    name: 'Alex Johnson',
    username: '@alexreads',
    avatar: 'AJ',
    bio: 'Book lover | Sci-fi enthusiast | Coffee addict ☕ | Always looking for the next great read 📚',
    location: 'San Francisco, CA',
    joined: 'January 2023',
    website: 'alexreads.blog',
    email: 'alex@example.com',
    stats: {
      booksRead: 127,
      following: 342,
      followers: 1248,
      reviews: 89
    }
  }

  const recentActivity = [
    { id: 1, type: 'finished', book: 'The Midnight Library', time: '2 days ago' },
    { id: 2, type: 'review', book: 'Atomic Habits', rating: 5, time: '5 days ago' },
    { id: 3, type: 'started', book: 'Project Hail Mary', time: '1 week ago' },
    { id: 4, type: 'liked', book: 'Dune', time: '1 week ago' }
  ]

  return (
    <div className="min-h-screen">
      {/* Cover Image */}
      <div className="h-48 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Profile Section */}
      <div className="px-6 pb-6">
        <div className="relative -mt-20 mb-4">
          <div className="bg-blue-500 text-white rounded-full w-32 h-32 flex items-center justify-center text-4xl font-bold border-4 border-white">
            {profile.avatar}
          </div>
          <button className="absolute bottom-0 right-0 bg-white border-2 border-gray-300 rounded-full p-2 hover:bg-gray-50">
            <Edit size={18} />
          </button>
        </div>

        {/* Profile Info */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600">
              Edit Profile
            </button>
          </div>
          <p className="text-gray-600 mb-3">{profile.username}</p>
          <p className="text-gray-800 mb-4">{profile.bio}</p>

          {/* Details */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              {profile.location}
            </div>
            <div className="flex items-center gap-1">
              <LinkIcon size={16} />
              <a href="#" className="text-blue-500 hover:underline">{profile.website}</a>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={16} />
              {profile.email}
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              Joined {profile.joined}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{profile.stats.booksRead}</div>
            <div className="text-sm text-gray-600">Books Read</div>
          </div>
          <div className="text-center cursor-pointer hover:bg-gray-50 rounded-lg p-2">
            <div className="text-2xl font-bold text-gray-900">{profile.stats.following}</div>
            <div className="text-sm text-gray-600">Following</div>
          </div>
          <div className="text-center cursor-pointer hover:bg-gray-50 rounded-lg p-2">
            <div className="text-2xl font-bold text-gray-900">{profile.stats.followers}</div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{profile.stats.reviews}</div>
            <div className="text-sm text-gray-600">Reviews</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  {activity.type === 'finished' && (
                    <p className="text-gray-800">
                      <span className="font-semibold">Finished reading</span> "{activity.book}"
                    </p>
                  )}
                  {activity.type === 'review' && (
                    <p className="text-gray-800">
                      <span className="font-semibold">Reviewed</span> "{activity.book}" 
                      <span className="text-yellow-500 ml-2">{'★'.repeat(activity.rating!)}</span>
                    </p>
                  )}
                  {activity.type === 'started' && (
                    <p className="text-gray-800">
                      <span className="font-semibold">Started reading</span> "{activity.book}"
                    </p>
                  )}
                  {activity.type === 'liked' && (
                    <p className="text-gray-800">
                      <span className="font-semibold">Liked</span> "{activity.book}"
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile