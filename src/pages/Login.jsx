import { useState } from 'react'
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'

function Login({ onLoginSuccess, onSwitchToSignup }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        const portalUsers = {
          student: { email: 'student@csu.edu.ph', password: '123', name: 'Juan Dela Cruz', role: 'student' },
          teacher: { email: 'reyes@csu.edu.ph', password: '123', name: 'Prof. Reyes', role: 'teacher' },
          admin: { email: 'admin@csu.edu.ph', password: '123', name: 'Admin User', role: 'admin' }
        }

        const user = portalUsers[role]
        if (user && user.email === email && user.password === password) {
          onLoginSuccess({ ...user, email })
        } else {
          setError('Invalid credentials for selected role')
        }
      } else {
        setError('Please fill in all fields')
      }
      setLoading(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand/5 via-white to-brandLight/5 dark:from-brand/10 dark:via-slate-950 dark:to-brandLight/10 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="CSU-Tanza" className="h-20 w-20 object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Portal Login</h1>
          <p className="text-slate-600 dark:text-slate-400">Cavite State University-Tanza</p>
        </div>

        {/* Login Card */}
        <div className="rounded-3xl border-2 border-brand/20 bg-white p-8 shadow-xl dark:border-brandLight/20 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Welcome back</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Sign in to your account to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Login as</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brandLight dark:focus:ring-brandLight/20"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <Input
              label="Email Address"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={`${role}@csu.edu.ph`}
            />

            <Input
              label="Password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />

            {error && (
              <div className="rounded-2xl border-l-4 border-l-red-500 bg-red-50 p-3 text-sm text-red-700 dark:bg-red-200/20 dark:text-red-200">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t-2 border-brand/10 dark:border-brandLight/10">
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              Don't have an account?{' '}
              <button
                onClick={onSwitchToSignup}
                className="font-bold text-brand transition hover:text-brandDark dark:text-brandLight dark:hover:text-brandLight/80"
              >
                Sign up here
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
