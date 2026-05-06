import { useState } from 'react'
import Button from '../components/Button.jsx'

function ChatSupport({ chatMessages, currentUser }) {
  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState(chatMessages)

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message = {
      id: messages.length + 1,
      from: currentUser.role,
      message: newMessage,
      timestamp: new Date().toLocaleString()
    }
    setMessages([...messages, message])
    setNewMessage('')

    // Simulate admin response for students
    if (currentUser.role === 'student') {
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          from: 'admin',
          message: 'Thank you for your message. We will get back to you soon.',
          timestamp: new Date().toLocaleString()
        }
        setMessages(prev => [...prev, response])
      }, 2000)
    }
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Support Chat</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
            {currentUser.role === 'admin' ? 'Admin Support' : 'Contact Support'}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            {currentUser.role === 'admin' 
              ? 'Respond to student inquiries and manage support tickets.'
              : 'Get help with your account, grades, or any other issues.'
            }
          </p>
        </div>
      </div>

      <div className="rounded-3xl border-2 border-brand/20 bg-white p-6 shadow-soft dark:border-brandLight/20 dark:bg-slate-900">
        <div className="h-96 overflow-y-auto mb-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.from === currentUser.role ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                msg.from === currentUser.role
                  ? 'bg-brand text-white'
                  : 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100'
              }`}>
                <p className="text-sm">{msg.message}</p>
                <p className={`text-xs mt-1 ${
                  msg.from === currentUser.role ? 'text-brandLight/80' : 'text-slate-500 dark:text-slate-400'
                }`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brandLight dark:focus:ring-brandLight/20"
          />
          <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChatSupport