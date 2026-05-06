import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'

function Grades({ grades, gradesHistory, studentInfo, onNavigate }) {
  const totalUnits = grades.reduce((sum, grade) => sum + grade.units, 0)
  const gpa = (grades.reduce((sum, grade) => sum + grade.grade * grade.units, 0) / totalUnits).toFixed(2)
  const passed = grades.filter((grade) => grade.grade <= 3.0).length

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-8 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Grades</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Academic performance</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
              Review your current grades, GPA summary, and subject-level performance for this semester.
            </p>
          </div>
          <Button variant="secondary" onClick={() => onNavigate('Dashboard')}>Back to dashboard</Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card title="Current GPA" value={gpa} footer={`${totalUnits} units attempted`} />
          <Card title="Subjects passed" value={`${passed}/${grades.length}`} footer="Latest results" />
          <Card title="Top course" value={grades[0].subject} footer="Highest grade" />
        </div>
      </div>

      <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-6 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Current Semester</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">Subject breakdown</h3>
          </div>
          <div className="rounded-3xl bg-brand/10 px-4 py-2 text-sm font-semibold text-brand dark:bg-brandLight/10 dark:text-brandLight">
            {studentInfo.course}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
          <table className="min-w-full divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-950">
            <thead className="bg-brand/5 text-left text-xs font-bold uppercase tracking-[0.24em] text-brand dark:bg-brandLight/10 dark:text-brandLight">
              <tr>
                <th className="px-4 py-4">Subject</th>
                <th className="px-4 py-4">Grade</th>
                <th className="px-4 py-4">Units</th>
                <th className="px-4 py-4">Remark</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {grades.map((grade) => (
                <tr key={grade.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/60">
                  <td className="px-4 py-4 text-sm text-slate-700 dark:text-slate-200">{grade.subject}</td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-900 dark:text-slate-100">{grade.grade.toFixed(2)}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">{grade.units}</td>
                  <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">{grade.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white to-brand/5 p-6 shadow-soft dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-slate-900 dark:to-brandLight/5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand dark:text-brandLight">Grade History</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">Previous Semesters</h3>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {gradesHistory.map((semester, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">{semester.semester}</h4>
              <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                <table className="min-w-full divide-y divide-slate-200 bg-white dark:divide-slate-700 dark:bg-slate-900">
                  <thead className="bg-slate-100 text-left text-xs font-bold uppercase tracking-[0.24em] text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    <tr>
                      <th className="px-3 py-2">Subject</th>
                      <th className="px-3 py-2">Grade</th>
                      <th className="px-3 py-2">Units</th>
                      <th className="px-3 py-2">Remark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {semester.grades.map((grade) => (
                      <tr key={grade.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/60">
                        <td className="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">{grade.subject}</td>
                        <td className="px-3 py-2 text-sm font-bold text-slate-900 dark:text-slate-100">{grade.grade.toFixed(2)}</td>
                        <td className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400">{grade.units}</td>
                        <td className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400">{grade.remark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Grades
