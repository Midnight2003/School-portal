import { useEffect } from 'react'
import logo from '../assets/logo.png'

const icons = {
  Dashboard: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  ),
  TeacherDashboard: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  ),
  AdminDashboard: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  ),
  Subjects: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
      <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Grades: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Documents: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
      <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
      <path d="M14 2v5h5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ChatSupport: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Profile: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
    </svg>
  ),
}

function Sidebar({ navItems, activePage, onNavigate, isOpen, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <>
      <div className={`hidden w-72 shrink-0 border-r-2 border-brand/20 bg-gradient-to-b from-white to-brand/5 p-6 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-b dark:from-slate-900 dark:to-brandLight/5 ${isOpen ? 'lg:block' : 'lg:hidden'}`}>
        <div className="mb-10 flex items-center gap-4 rounded-2xl border-2 border-brand/20 bg-gradient-to-r from-brand/10 to-brandLight/10 p-4 dark:border-brandLight/20 dark:bg-gradient-to-r dark:from-brandLight/10 dark:to-brand/10">
          <img src={logo} alt="Cavite State University" className="h-14 w-14 flex-shrink-0 object-contain" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Portal</p>
            <h2 className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">Cavite State University-Tanza</h2>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const active = activePage === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                  active
                    ? 'bg-brand text-white shadow-lg shadow-brand/20 dark:bg-brandDark'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {icons[item.id]}
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-30 flex bg-brand/40 lg:hidden">
          <div className="w-72 border-r-2 border-brand/20 bg-gradient-to-b from-white to-brand/5 p-6 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-b dark:from-slate-900 dark:to-brandLight/5">
            <div className="mb-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1 rounded-2xl border-2 border-brand/20 bg-gradient-to-r from-brand/10 to-brandLight/10 p-3 dark:border-brandLight/20 dark:bg-gradient-to-r dark:from-brandLight/10 dark:to-brand/10">
                <img src={logo} alt="Cavite State University" className="h-12 w-12 flex-shrink-0 object-contain" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Portal</p>
                  <h2 className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">CSU-Tanza</h2>
                </div>
              </div>
              <button onClick={onClose} className="text-brand transition hover:text-brandDark dark:text-brandLight dark:hover:text-brandLight/80 font-bold">
                ✕
              </button>
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => {
                const active = activePage === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      onNavigate(item.id)
                      onClose()
                    }}
                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                      active
                        ? 'bg-brand text-white shadow-lg shadow-brand/20 dark:bg-brandDark'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    {icons[item.id]}
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
          <button className="flex-1" aria-label="Close sidebar" onClick={onClose} />
        </div>
      ) : null}
    </>
  )
}

export default Sidebar
