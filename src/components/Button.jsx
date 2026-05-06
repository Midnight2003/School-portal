function Button({ children, variant = 'primary', className = '', disabled = false, ...props }) {
  const styles = {
    primary: 'flex items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brandDark hover:shadow-xl hover:shadow-brand/40 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-slate-950 active:shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-brand',
    secondary: 'flex items-center justify-center rounded-2xl border-2 border-brand bg-white px-5 py-3 text-sm font-semibold text-brand transition hover:bg-green-50 hover:border-brandDark dark:border-brandLight dark:bg-slate-900 dark:text-brandLight dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-slate-950 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:border-brand',
  }

  return (
    <button className={`${styles[variant]} ${className}`} type="button" disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
