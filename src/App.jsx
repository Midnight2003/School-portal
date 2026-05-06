import { useMemo, useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Documents from './pages/Documents.jsx'
import Subjects from './pages/Subjects.jsx'
import Grades from './pages/Grades.jsx'
import Profile from './pages/Profile.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import TeacherDashboard from './pages/TeacherDashboard.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import ChatSupport from './pages/ChatSupport.jsx'
import { announcements, documentHistory, subjects, studentInfo, classroomPreview, grades, gradesHistory, users, teacherClasses, chatMessages } from './data.js'

const pages = {
  Dashboard: Dashboard,
  Subjects: Subjects,
  Documents: Documents,
  Grades: Grades,
  Profile: Profile,
  TeacherDashboard: TeacherDashboard,
  AdminDashboard: AdminDashboard,
  ChatSupport: ChatSupport,
}

const navConfigs = {
  student: {
    pages: {
      Dashboard: Dashboard,
      Subjects: Subjects,
      Documents: Documents,
      Grades: Grades,
      Profile: Profile,
      ChatSupport: ChatSupport,
    },
    navItems: [
      { id: 'Dashboard', label: 'Dashboard' },
      { id: 'Subjects', label: 'Subjects' },
      { id: 'Grades', label: 'Grades' },
      { id: 'Documents', label: 'Requests' },
      { id: 'ChatSupport', label: 'Support' },
      { id: 'Profile', label: 'Profile' },
    ]
  },
  teacher: {
    pages: {
      TeacherDashboard: TeacherDashboard,
      Subjects: Subjects,
      Profile: Profile,
    },
    navItems: [
      { id: 'TeacherDashboard', label: 'Dashboard' },
      { id: 'Subjects', label: 'My Classes' },
      { id: 'Profile', label: 'Profile' },
    ]
  },
  admin: {
    pages: {
      AdminDashboard: AdminDashboard,
      ChatSupport: ChatSupport,
    },
    navItems: [
      { id: 'AdminDashboard', label: 'Dashboard' },
      { id: 'ChatSupport', label: 'Support Chat' },
    ]
  }
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [authMode, setAuthMode] = useState('login') // 'login' or 'signup'
  const [activePage, setActivePage] = useState('Dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  const navConfig = useMemo(() => navConfigs[currentUser?.role] || navConfigs.student, [currentUser])
  const PageComponent = useMemo(() => navConfig.pages[activePage] || Dashboard, [navConfig, activePage])

  // Update HTML element with dark class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleLoginSuccess = (user) => {
    setCurrentUser(user)
    setIsAuthenticated(true)
    setActivePage(user.role === 'teacher' ? 'TeacherDashboard' : user.role === 'admin' ? 'AdminDashboard' : 'Dashboard')
  }

  const handleSignupSuccess = (user) => {
    setCurrentUser(user)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentUser(null)
    setActivePage('Dashboard')
    setAuthMode('login')
  }

  // Show login/signup pages if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
          {authMode === 'login' ? (
            <Login 
              onLoginSuccess={handleLoginSuccess}
              onSwitchToSignup={() => setAuthMode('signup')}
            />
          ) : (
            <Signup 
              onSignupSuccess={handleSignupSuccess}
              onSwitchToLogin={() => setAuthMode('login')}
            />
          )}
        </div>
      </div>
    )
  }

  // Show main dashboard if authenticated
  return (
    <div className="min-h-screen">
      <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="flex min-h-screen">
          <Sidebar
            navItems={navConfig.navItems}
            activePage={activePage}
            onNavigate={setActivePage}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <main className="flex-1">
            <Navbar
              schoolName="Cavite State University-Tanza"
              userName={currentUser?.name || studentInfo.name}
              userRole={currentUser?.role || 'student'}
              onMenuToggle={() => setSidebarOpen((value) => !value)}
              darkMode={darkMode}
              onToggleDarkMode={() => setDarkMode((value) => !value)}
              notificationsOpen={notificationsOpen}
              onToggleNotifications={() => setNotificationsOpen((value) => !value)}
              onLogout={handleLogout}
            />

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <PageComponent
              announcements={announcements}
              documentHistory={documentHistory}
              subjects={subjects}
              studentInfo={studentInfo}
              classroomPreview={classroomPreview}
              grades={grades}
              gradesHistory={gradesHistory}
              users={users}
              teacherClasses={teacherClasses}
              chatMessages={chatMessages}
              currentUser={currentUser}
              onNavigate={setActivePage}
              onMenuToggle={() => setSidebarOpen((value) => !value)}
            />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
