import { useState } from 'react'
import Button from '../components/Button.jsx'
import SubjectModal from '../components/SubjectModal.jsx'

function Subjects({ subjects, classroomPreview, teacherClasses, currentUser }) {
  const [activeSubject, setActiveSubject] = useState(null)

  if (currentUser?.role === 'teacher') {
    const myClasses = teacherClasses.filter(cls => cls.teacherId === 1) // Assuming current teacher is id 1

    return (
      <div className="space-y-8">
        <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">My Classes</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Manage your subjects</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">View enrolled students and post class announcements.</p>
          </div>
        </div>

        <div className="space-y-6">
          {myClasses.map((cls) => (
            <div key={cls.subject} className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-6 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{cls.subject}</h3>
                <span className="rounded-2xl bg-brand/10 px-3 py-1 text-sm font-semibold text-brand dark:bg-brandLight/10 dark:text-brandLight">
                  {cls.students.length} students
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Enrolled Students</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {cls.students.map((student) => (
                      <div key={student.id} className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50">
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{student.name}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{student.studentId}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Recent Posts</h4>
                  <div className="space-y-2">
                    {cls.posts.length > 0 ? (
                      cls.posts.map((post) => (
                        <div key={post.id} className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50">
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{post.title}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{post.date}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-slate-500 dark:text-slate-400">No posts yet</p>
                    )}
                  </div>
                  <Button size="sm" className="mt-2">Post Announcement</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Student view
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Subjects</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Active courses</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">Access classroom previews for your current subjects and review announcements without leaving the portal.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {subjects.map((subject) => (
          <div key={subject.id} className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-brand dark:text-brandLight">{subject.name}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">{subject.instructor}</h3>
              </div>
              <div className="rounded-3xl bg-brand/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.24em] text-brand dark:bg-brandLight/10 dark:text-brandLight">
                {subject.schedule}
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-600 dark:text-slate-400">Room and schedule are tracked in Google Classroom.</p>
              <Button onClick={() => setActiveSubject(subject)}>Open Classroom</Button>
            </div>
          </div>
        ))}
      </div>

      <SubjectModal open={Boolean(activeSubject)} data={activeSubject || classroomPreview} onClose={() => setActiveSubject(null)} />
    </div>
  )
}

export default Subjects
