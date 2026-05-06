function Input({ label, id, type = 'text', children, ...props }) {
  return (
    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor={id}>
      {label}
      {children || (
        <input
          id={id}
          type={type}
          {...props}
          className="mt-2 block w-full rounded-2xl border-2 border-brand/20 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 dark:border-brandLight/20 dark:bg-slate-950 dark:text-slate-100"
        />
      )}
    </label>
  )
}

export default Input
