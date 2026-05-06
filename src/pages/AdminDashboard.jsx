import { useState } from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'

function AdminDashboard({ announcements, users, onNavigate }) {
  const [newAnnouncement, setNewAnnouncement] = useState({ title: '', description: '' })

  const handlePostAnnouncement = () => {
    // In a real app, this would save to backend
    alert('Announcement posted!')
    setNewAnnouncement({ title: '', description: '' })
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Admin Dashboard</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">System Management</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
              Manage announcements, users, and system settings.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          <Card 
            title="Total Students" 
            value={users.students.length} 
            footer="Registered students"
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          <Card 
            title="Total Teachers" 
            value={users.teachers.length} 
            footer="Active faculty"
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          <Card 
            title="Total Admins" 
            value={users.admins.length} 
            footer="System admins"
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          <Card 
            title="Announcements" 
            value={announcements.length} 
            footer="Posted this month"
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-6 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand dark:bg-brandLight/10 dark:text-brandLight">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Post Announcement</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Title</label>
              <input
                type="text"
                value={newAnnouncement.title}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brandLight dark:focus:ring-brandLight/20"
                placeholder="Announcement title"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Description</label>
              <textarea
                value={newAnnouncement.description}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, description: e.target.value })}
                rows={4}
                className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brandLight dark:focus:ring-brandLight/20"
                placeholder="Announcement details"
              />
            </div>
            <Button onClick={handlePostAnnouncement} disabled={!newAnnouncement.title || !newAnnouncement.description}>
              Post Announcement
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-6 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand dark:bg-brandLight/10 dark:text-brandLight">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Recent Announcements</h3>
          </div>
          <div className="space-y-4">
            {announcements.slice(0, 3).map((announcement) => (
              <div key={announcement.id} className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/50">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{announcement.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{announcement.description}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">{announcement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-6 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">User Management</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Button onClick={() => onNavigate('ChatSupport')}>Manage Support Chat</Button>
            <Button variant="secondary">View All Users</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard