type Option = { value: string; label: string }

type Props = {
  label: string
  error?: string
  options: Option[]
  placeholder?: string
} & React.SelectHTMLAttributes<HTMLSelectElement>

export default function Select({ label, error, options, placeholder = 'Selecciona…', className = '', ...rest }: Props) {
  const errorCls = error ? 'border-red-500 ring-1 ring-red-400' : 'border-slate-300'
  return (
    <div className="space-y-1">
      <label className="block text-sm">{label}</label>
      <select
        className={`w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 ${errorCls} ${className}`}
        aria-invalid={!!error}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}