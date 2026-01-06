// pages/communities/AfricanLiteratiCommunity.tsx
import { Send, Paperclip, Smile, MoreVertical } from 'lucide-react'
import { useState } from 'react'

const AfricanLiteratiCommunity = () => {
  const [message, setMessage] = useState('')

  // Sample messages
  const messages = [
    {
      id: 1,
      user: 'Chimamanda A.',
      avatar: 'CA',
      message: 'Just finished reading "Things Fall Apart" for the third time. Achebe\'s prose never gets old!',
      time: '10:32 AM',
      color: 'bg-purple-500'
    },
    {
      id: 2,
      user: 'Kwame N.',
      avatar: 'KN',
      message: 'Has anyone read Nnedi Okorafor\'s Binti series? Looking for sci-fi recommendations.',
      time: '10:45 AM',
      color: 'bg-green-500'
    },
    {
      id: 3,
      user: 'Yaa G.',
      avatar: 'YG',
      message: 'The Binti series is amazing! Also check out "Who Fears Death" by the same author.',
      time: '11:02 AM',
      color: 'bg-blue-500'
    },
    {
      id: 4,
      user: 'Aminata S.',
      avatar: 'AS',
      message: 'We should organize a virtual book club meeting to discuss contemporary African literature!',
      time: '11:15 AM',
      color: 'bg-pink-500'
    }
  ]

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('')
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Community Info */}
      <div className="bg-linear-to-r from-purple-50 to-blue-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">African Literati Community</h2>
            <p className="text-sm text-gray-600">2,847 members · 124 online</p>
          </div>
          <button className="p-2 hover:bg-white rounded-full transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex gap-3">
            {/* Avatar */}
            <div className={`${msg.color} text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0`}>
              {msg.avatar}
            </div>
            
            {/* Message Content */}
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

      {/* Message Input */}
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
              placeholder="Share your thoughts on African literature..."
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

export default AfricanLiteratiCommunity