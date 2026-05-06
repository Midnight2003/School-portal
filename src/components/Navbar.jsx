import { useState } from 'react'

function Navbar({ schoolName, userName, userRole, onMenuToggle, darkMode, onToggleDarkMode, notificationsOpen, onToggleNotifications, onLogout }) {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 lg:hidden"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Open sidebar</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="hidden items-center gap-3 sm:flex">
            <img src="/logo.png" alt="Cavite State University" className="h-10 w-10 flex-shrink-0 object-contain" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{schoolName}</p>
            <h1 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">Student Portal</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleDarkMode}
            className="inline-flex h-11 items-center gap-2 rounded-2xl border-2 border-brand/20 bg-brand/5 px-4 text-sm font-bold text-brand transition hover:bg-brand/10 dark:border-brandLight/20 dark:bg-brandLight/5 dark:text-brandLight dark:hover:bg-brandLight/10"
          >
            {darkMode ? '🌙' : '☀️'} {darkMode ? 'Dark' : 'Light'}
          </button>

          <button
            type="button"            onClick={onToggleNotifications}            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-brand hover:text-brand dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brandLight dark:hover:text-brandLight"
            aria-label="Notifications"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 0 1-6 0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-3 rounded-2xl border-2 border-brand/20 bg-brand/5 px-3 py-2 text-sm transition hover:border-brand/40 dark:border-brandLight/20 dark:bg-brandLight/5 dark:hover:border-brandLight/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brandDark text-white font-bold shadow-md">
                {userName.charAt(0).toUpperCase()}{userName.split(' ')[1]?.charAt(0).toUpperCase() || 'D'}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{userName}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{userRole}</p>
              </div>
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-14 z-50 w-48 rounded-2xl border-2 border-brand/20 bg-white p-2 shadow-xl dark:border-brandLight/20 dark:bg-slate-900">
                <button
                  onClick={() => {
                    setProfileOpen(false)
                    onLogout()
                  }}
                  className="w-full rounded-xl border-l-4 border-l-red-500 bg-red-50 px-4 py-2 text-left text-sm font-bold text-red-700 transition hover:bg-red-100 dark:bg-red-200/20 dark:text-red-200 dark:hover:bg-red-200/30"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {notificationsOpen && (
          <div className="absolute right-4 top-16 z-50 w-80 rounded-3xl border-2 border-brand/30 bg-white p-4 shadow-xl shadow-brand/20 dark:border-brandLight/30 dark:bg-slate-950">
            <h3 className="text-lg font-bold text-brand dark:text-brandLight">Notifications</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border-l-4 border-l-brand bg-slate-50 p-3 dark:border-l-brandLight dark:bg-slate-900">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Document Ready</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Your Certificate of Registration is ready for pickup.</p>
              </div>
              <div className="rounded-2xl border-l-4 border-l-brand bg-slate-50 p-3 dark:border-l-brandLight dark:bg-slate-900">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Class Update</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">New assignment posted in Digital Logic Design.</p>
              </div>
              <div className="rounded-2xl border-l-4 border-l-brand bg-slate-50 p-3 dark:border-l-brandLight dark:bg-slate-900">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">System Maintenance</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Portal will be down for maintenance on May 10th.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
