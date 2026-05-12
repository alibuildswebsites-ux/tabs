import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-base font-normal text-midnight-ink">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full bg-[rgba(0,0,0,0.04)] text-midnight-ink placeholder:text-muted-stone rounded-[6px] px-3 py-2.5 text-base font-normal focus:outline-none focus:ring-[1.5px] focus:ring-midnight-ink transition-shadow duration-150 ${error ? 'ring-[1.5px] ring-red-500' : ''} ${className}`}
          {...props}
        />
        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'
