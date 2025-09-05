import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'

type Props = {
  label: string
  error?: string
  maxLength?: number
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ label, error, className = '', ...rest }, ref) => {
    const errorCls = error ? 'border-red-500 ring-1 ring-red-400' : 'border-slate-300'
    return (
      <div className="space-y-1">
        <label className="block text-sm">{label}</label>
        <input
          ref={ref}
          className={`w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 ${errorCls} ${className}`}
          aria-invalid={!!error}
          {...rest}
        />
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    )
  }
)

export default TextInput