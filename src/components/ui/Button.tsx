import React from 'react'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-sunbeam-yellow text-midnight-ink hover:bg-[#ffe999] active:bg-[#ffd94e]',
  secondary:
    'bg-leafy-green text-midnight-ink hover:bg-[#85d9ae] active:bg-[#5cb98a]',
  outline:
    'bg-transparent border border-midnight-ink/20 text-midnight-ink hover:bg-black/[0.04] active:bg-black/[0.08]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-[12px] transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-midnight-ink focus-visible:ring-offset-2 select-none'
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'} ${className}`

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
