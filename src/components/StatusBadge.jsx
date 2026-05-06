function StatusBadge({ status }) {
  const variants = {
    Pending: 'bg-amber-100 text-amber-700 dark:bg-amber-200/20 dark:text-amber-200',
    Processing: 'bg-sky-100 text-sky-700 dark:bg-sky-200/20 dark:text-sky-200',
    Ready: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-200/20 dark:text-emerald-200',
  }
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${variants[status] || variants.Pending}`}>
      {status}
    </span>
  )
}

export default StatusBadge
