function Logo({ size = 'md' }) {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  return (
    <img src="/logo.png" alt="Cavite State University" className={`${sizeMap[size]} flex-shrink-0 object-contain`} />
  )
}

export default Logo
