import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'

function TeacherDashboard({ teacherClasses, currentUser, onNavigate }) {
  const myClasses = teacherClasses.filter(cls => cls.teacherId === 1) // Assuming current teacher is id 1

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Teacher Dashboard</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Welcome, {currentUser?.name}</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
              Manage your classes, post announcements, and view student progress.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card 
            title="Total Classes" 
            value={myClasses.length} 
            footer="Active subjects"
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          <Card 
            title="Total Students" 
            value={myClasses.reduce((sum, cls) => sum + cls.students.length, 0)} 
            footer="Enrolled students"
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          <Card 
            title="Recent Posts" 
            value={myClasses.reduce((sum, cls) => sum + cls.posts.length, 0)} 
            footer="Class announcements"
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {myClasses.map((cls) => (
          <div key={cls.subject} className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-6 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand dark:bg-brandLight/10 dark:text-brandLight">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{cls.subject}</h3>
              </div>
              <span className="rounded-2xl bg-brand/10 px-3 py-1 text-sm font-semibold text-brand dark:bg-brandLight/10 dark:text-brandLight">
                {cls.students.length} students
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Recent Posts</h4>
                {cls.posts.length > 0 ? (
                  <div className="space-y-2">
                    {cls.posts.slice(0, 2).map((post) => (
                      <div key={post.id} className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50">
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{post.title}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{post.date}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400">No posts yet</p>
                )}
              </div>

              <div className="flex gap-2">
                <Button size="sm" onClick={() => onNavigate('Subjects')}>View Students</Button>
                <Button size="sm" variant="secondary">Post Update</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeacherDashboard