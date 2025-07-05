import * as React from "react"

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <button 
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:opacity-90 ${className}`}
        ref={ref} 
        {...props} 
      />
    )
  },
)
Button.displayName = "Button"

export { Button }