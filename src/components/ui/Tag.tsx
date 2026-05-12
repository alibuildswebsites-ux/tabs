import React from 'react'

interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'green'
  className?: string
  [key: string]: unknown
}

export function Tag({ children, variant = 'default', className = '', ...rest }: TagProps) {
  const variantClass =
    variant === 'green'
      ? 'bg-[rgba(110,206,157,0.15)] text-midnight-ink'
      : 'bg-[rgba(0,0,0,0.04)] text-midnight-ink'

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-[24px] text-sm font-medium ${variantClass} ${className}`}
      {...rest}
    >
      {children}
    </span>
  )
}
