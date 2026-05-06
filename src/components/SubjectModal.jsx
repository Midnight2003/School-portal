function SubjectModal({ open, data, onClose }) {
  if (!open || !data) {
    return null
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-brand/40 p-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border-2 border-brand/30 bg-white shadow-xl shadow-brand/20 dark:border-brandLight/30 dark:bg-slate-950">
        <div className="flex items-center justify-between border-b-2 border-brand/30 bg-gradient-to-r from-brand to-brandDark px-6 py-4 dark:border-brandLight/30 dark:bg-gradient-to-r dark:from-brandDark dark:to-brandLight">
          <div>
            <p className="text-sm font-bold text-brandLight dark:text-brand">Classroom preview</p>
            <h2 className="mt-1 text-xl font-bold text-white">{data.title}</h2>
          </div>
          <button onClick={onClose} className="rounded-full p-2 text-white transition hover:bg-white/20 dark:hover:bg-white/10" aria-label="Close modal">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="space-y-6 px-6 py-6 text-slate-700 dark:text-slate-300">
          <p className="font-medium">{data.summary}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {(data.updates || []).map((update) => (
              <div key={update.id} className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-brand/5 to-brandLight/5 p-4 dark:border-brandLight/20 dark:bg-gradient-to-br dark:from-brandLight/5 dark:to-brand/5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand dark:text-brandLight">{update.type}</p>
                <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-slate-100">{update.label}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{update.detail}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => window.open('https://classroom.google.com', '_blank')}
              className="inline-flex items-center rounded-2xl bg-brand px-4 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brandDark hover:shadow-xl hover:shadow-brand/40"
            >
              Open classroom link
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectModal
