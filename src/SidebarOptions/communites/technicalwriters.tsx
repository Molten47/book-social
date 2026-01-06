// pages/communities/StanfordScienceBookClub.tsx
import { Send, Paperclip, Smile, MoreVertical } from 'lucide-react'
import { useState } from 'react'

const StanfordScienceBookClub = () => {
  const [message, setMessage] = useState('')

  const messages = [
    {
      id: 1,
      user: 'Dr. Sarah Chen',
      avatar: 'SC',
      message: 'This month\'s pick: "The Gene: An Intimate History" by Siddhartha Mukherjee. Discussion starts next week!',
      time: '9:15 AM',
      color: 'bg-indigo-500'
    },
    {
      id: 2,
      user: 'Michael R.',
      avatar: 'MR',
      message: 'Can\'t wait! I\'m halfway through and it\'s absolutely fascinating.',
      time: '9:30 AM',
      color: 'bg-teal-500'
    },
    {
      id: 3,
      user: 'Emma L.',
      avatar: 'EL',
      message: 'Has anyone read "The Immortal Life of Henrietta Lacks"? Similar themes and equally compelling.',
      time: '10:05 AM',
      color: 'bg-orange-500'
    }
  ]

  const handleSend = () => {
    if (message.trim()) {
      setMessage('')
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-linear-to-r from-indigo-50 to-teal-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Stanford Science Book Club</h2>
            <p className="text-sm text-gray-600">1,523 members · 67 online</p>
          </div>
          <button className="p-2 hover:bg-white rounded-full transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex gap-3">
            <div className={`${msg.color} text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0`}>
              {msg.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-semibold text-gray-900">{msg.user}</span>
                <span className="text-xs text-gray-500">{msg.time}</span>
              </div>
              <p className="text-gray-700">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 px-6 py-4 bg-white">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Paperclip size={20} className="text-gray-600" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Discuss science books and discoveries..."
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 pr-12"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Smile size={20} className="text-gray-600" />
            </button>
          </div>
          <button 
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default StanfordScienceBookClub