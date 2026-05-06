import { useState } from 'react'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'

function Profile({ studentInfo, currentUser, teacherClasses }) {
  const [isEditing, setIsEditing] = useState(false)
  const [updated, setUpdated] = useState(false)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleUpdate = () => {
    setIsEditing(false)
    setUpdated(true)
    setTimeout(() => setUpdated(false), 3000)
  }

  const isTeacher = currentUser?.role === 'teacher'
  const teacherData = isTeacher ? teacherClasses.find(cls => cls.teacherId === 1) : null // Assuming current teacher is id 1

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Profile</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
              {isTeacher ? 'Teacher Details' : 'Student Details'}
            </h2>
          </div>
          <Button onClick={handleEdit} variant="secondary">Edit profile</Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-brand/10 to-brandLight/5 p-6 dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-brandLight/10 dark:to-brand/5">
            {isTeacher ? (
              <>
                <p className="text-sm font-bold text-brand dark:text-brandLight">Teacher ID</p>
                <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">T-001</p>
                <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <p><span className="font-bold text-slate-900 dark:text-slate-100">Department: </span>Information Technology</p>
                  <p><span className="font-bold text-slate-900 dark:text-slate-100">Subjects: </span>{teacherData ? teacherData.subject : 'N/A'}</p>
                  <p><span className="font-bold text-slate-900 dark:text-slate-100">Classes: </span>{teacherClasses.filter(cls => cls.teacherId === 1).length}</p>
                </div>
              </>
            ) : (
              <>
                <p className="text-sm font-bold text-brand dark:text-brandLight">Student ID</p>
                <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">{studentInfo.studentId}</p>
                <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <p><span className="font-bold text-slate-900 dark:text-slate-100">Year Level: </span>{studentInfo.yearLevel}</p>
                  <p><span className="font-bold text-slate-900 dark:text-slate-100">Course: </span>{studentInfo.course}</p>
                  <p><span className="font-bold text-slate-900 dark:text-slate-100">Section: </span>{studentInfo.section}</p>
                </div>
              </>
            )}
          </div>

          <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
            <div className="grid gap-6">
              <Input label="Full Name" id="full-name" value={isTeacher ? currentUser?.name : studentInfo.name} readOnly={!isEditing} />
              <Input label="Email Address" id="email" value={currentUser?.email || studentInfo.email} readOnly={!isEditing} />
              {isTeacher ? (
                <>
                  <Input label="Department" id="department" value="Information Technology" readOnly={!isEditing} />
                  <Input label="Employee ID" id="employee-id" value="T-001" readOnly={!isEditing} />
                </>
              ) : (
                <>
                  <Input label="Student ID" id="student-id" value={studentInfo.studentId} readOnly={!isEditing} />
                  <Input label="Course" id="course" value={studentInfo.course} readOnly={!isEditing} />
                  <Input label="Year Level" id="year-level" value={studentInfo.yearLevel} readOnly={!isEditing} />
                </>
              )}
            </div>
            {isEditing && (
              <div className="mt-6 flex justify-end">
                <Button onClick={handleUpdate}>Update information</Button>
              </div>
            )}
            {updated && (
              <div className="mt-6 rounded-3xl bg-emerald-50 p-4 text-emerald-700 dark:bg-emerald-200/20 dark:text-emerald-200">
                <p className="text-sm font-bold">Profile updated successfully!</p>
                <p className="text-xs">Your information has been saved.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
