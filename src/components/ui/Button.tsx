import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'filled', size = 'md', className = '', children, ...props }, ref) => {
    const base =
      'inline-flex items-center gap-2 rounded-md font-medium transition-all duration-200 cursor-pointer'
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    }
    const variants = {
      filled: 'bg-accent text-white hover:bg-accent-light',
      outline: 'border border-white/10 text-foreground hover:border-white/18 hover:bg-surface',
      ghost: 'text-muted hover:text-foreground',
    }
    return (
      <button
        ref={ref}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
