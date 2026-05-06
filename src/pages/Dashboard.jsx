import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'

function Dashboard({ announcements, subjects, studentInfo, grades, onNavigate, onMenuToggle }) {
  const activeGrades = grades.slice(0, 3)
  const totalUnits = grades.reduce((sum, grade) => sum + grade.units, 0)
  const gpa = (grades.reduce((sum, grade) => sum + grade.grade * grade.units, 0) / totalUnits).toFixed(2)

  return (
    <div className="space-y-8">
      <section className="space-y-8">
        <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Student Portal</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Welcome back, {studentInfo.name.split(' ')[0]}</h2>
              <p className="mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
                This is your student hub. Check announcements, track grades, request documents, and manage your profile in one place.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:w-[420px]">
              <Button onClick={() => onNavigate('Grades')}>View Grades</Button>
              <Button variant="secondary" onClick={() => onNavigate('Documents')}>Request Documents</Button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Card 
              title="Current GPA" 
              value={gpa} 
              footer={`${totalUnits} units completed`}
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <Card 
              title="Active subjects" 
              value={subjects.length} 
              footer="This semester"
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <Card 
              title="Pending requests" 
              value="2" 
              footer="Document queue"
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <Card 
              title="Profile" 
              value={studentInfo.yearLevel} 
              footer={studentInfo.course}
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_0.8fr]">
          <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Student flow</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">What to do next</h3>
              </div>
              <Button variant="secondary" onClick={() => onNavigate('Profile')}>Open Profile</Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand dark:bg-brandLight/10 dark:text-brandLight">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Check announcements</p>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">Stay informed about schedules, events, and portal updates.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand dark:bg-brandLight/10 dark:text-brandLight">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Review grades</p>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">Track your current academic standing and completed courses.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand dark:bg-brandLight/10 dark:text-brandLight">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Request documents</p>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">Submit certificates, registration forms, and other official requests.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand dark:bg-brandLight/10 dark:text-brandLight">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Update profile</p>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">Keep your contact and student information current.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-6 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Upcoming class</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-950">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Digital Logic Design</p>
                  <p className="mt-2 text-lg font-bold text-slate-900 dark:text-slate-100">Tue / Thu • 12:00 PM</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Room 402 • Lab session</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-950">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Recent activity</p>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Project proposal submitted for review.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-6 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Announcements</p>
              <div className="mt-5 space-y-4">
                {announcements.slice(0, 3).map((item) => (
                  <div key={item.id} className="rounded-3xl border-l-4 border-l-brand bg-slate-50 p-4 dark:border-l-brandLight dark:bg-slate-950">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Grades preview</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">Latest course results</h3>
            </div>
            <Button onClick={() => onNavigate('Grades')}>Full grade report</Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {activeGrades.map((grade) => (
              <div key={grade.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">{grade.subject}</p>
                <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-slate-100">{grade.grade.toFixed(2)}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{grade.remark}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
