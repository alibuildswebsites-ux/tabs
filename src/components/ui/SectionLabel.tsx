import React from 'react'

interface SectionLabelProps {
  number: number
  label: string
  className?: string
}

export function SectionLabel({ number, label, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      <span className="text-muted-stone text-sm font-medium">{number}</span>
      <span className="w-4 h-px bg-muted-stone" />
      <span className="text-muted-stone text-sm font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  )
}
