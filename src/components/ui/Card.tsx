import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  [key: string]: unknown
}

const paddingClasses = {
  sm: 'p-6',
  md: 'p-8',
  lg: 'p-12',
}

export function Card({ children, className = '', padding = 'md', ...rest }: CardProps) {
  return (
    <div
      className={`bg-ghostly-gray rounded-[24px] ${paddingClasses[padding]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
