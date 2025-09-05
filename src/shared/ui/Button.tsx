type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }

export default function Button({ loading, className = '', children, ...rest }: Props) {
  return (
    <button
      disabled={loading || rest.disabled}
      className={`inline-flex items-center justify-center rounded bg-amber-600 px-4 py-2 text-white
                  disabled:opacity-50 hover:bg-amber-700 transition-colors ${className}`}
      {...rest}
    >
      {loading ? 'Procesando…' : children}
    </button>
  )
}