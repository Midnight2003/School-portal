import { useState } from 'react'
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'
import logo from '../../logo.png'

function Signup({ onSignupSuccess, onSwitchToLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [studentId, setStudentId] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (!name || !email || !studentId || !password || !confirmPassword) {
        setError('Please fill in all fields')
      } else if (!email.includes('@')) {
        setError('Please enter a valid email address')
      } else if (password.length < 6) {
        setError('Password must be at least 6 characters')
      } else if (password !== confirmPassword) {
        setError('Passwords do not match')
      } else {
        // Mock signup - successful
        onSignupSuccess({ email, name, studentId })
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
            <img src={logo} alt="CSU-Tanza" className="h-20 w-20 object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Student Portal</h1>
          <p className="text-slate-600 dark:text-slate-400">Cavite State University-Tanza</p>
        </div>

        {/* Signup Card */}
        <div className="rounded-3xl border-2 border-brand/20 bg-white p-8 shadow-xl dark:border-brandLight/20 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Create account</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Join the student community today</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan Dela Cruz"
            />

            <Input
              label="Email Address"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@csu.edu.ph"
            />

            <Input
              label="Student ID"
              id="studentId"
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="2024-12345"
            />

            <Input
              label="Password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />

            <Input
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              {loading ? 'Creating account...' : 'Create account'}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t-2 border-brand/10 dark:border-brandLight/10">
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              Already have an account?{' '}
              <button
                onClick={onSwitchToLogin}
                className="font-bold text-brand transition hover:text-brandDark dark:text-brandLight dark:hover:text-brandLight/80"
              >
                Sign in here
              </button>
            </p>
          </div>

          {/* Terms Info */}
          <div className="mt-6 rounded-2xl border border-brand/20 bg-brand/5 p-4 text-xs text-slate-600 dark:border-brandLight/20 dark:bg-brandLight/5 dark:text-slate-400">
            <p className="mb-2">By creating an account, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
