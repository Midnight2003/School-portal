function Card({ title, description, value, footer, icon, children, className = '' }) {
  return (
    <div className={`rounded-3xl border border-slate-200 border-l-4 border-l-brand bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 dark:border-slate-800 dark:border-l-brandLight dark:bg-slate-900 ${className}`}>
      {icon && (
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand dark:bg-brandLight/10 dark:text-brandLight">
            {icon}
          </div>
          {title ? <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3> : null}
        </div>
      )}
      {!icon && title ? <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3> : null}
      {description ? <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{description}</p> : null}
      {children}
      {value ? <div className="mt-4 text-3xl font-bold text-brand dark:text-brandLight">{value}</div> : null}
      {footer ? <div className="mt-5 text-sm text-slate-600 dark:text-slate-300">{footer}</div> : null}
    </div>
  )
}

export default Card
