import { useMemo, useState } from 'react'

export type CatalogItem = { id: string; name: string }

type Props = {
  title?: string
  items: CatalogItem[]
  placeholder?: string
  onSearchSubmit?: (term: string) => void 
  className?: string 
}

export default function CatalogList({
  title = 'Catálogo país',
  items,
  placeholder = 'Buscar por país…',
  onSearchSubmit,
  className = '',
}: Props) {
  const [term, setTerm] = useState('')

  const filtered = useMemo(() => {
    const t = term.trim().toLowerCase()
    if (!t) return items
    return items.filter(i => i.name.toLowerCase().includes(t) || i.id.toLowerCase().includes(t))
  }, [items, term])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearchSubmit?.(term)
  }

  return (
    <aside className={`rounded-2xl border border-slate-200 bg-white shadow-sm p-4 space-y-3 ${className}`}>
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      <form onSubmit={submit} className="flex gap-2">
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-2 flex items-center text-slate-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"/>
            </svg>
          </span>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder={placeholder}
            className="w-full h-9 rounded-lg border border-slate-300 bg-white pl-8 pr-3 text-sm
              focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          />
        </div>
        <button
          className="h-9 px-3 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600"
        >
          Buscar
        </button>
      </form>

      <ul className="space-y-2 max-h-[420px] overflow-auto pr-1">
        {filtered.map((i) => (
          <li key={i.id} className="flex items-center justify-between gap-2">
            <span className="truncate text-sm text-slate-800">{i.name}</span>
            <button
              type="button"
              className="h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50"
              title="Ver detalle"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </li>
        ))}

        {filtered.length === 0 && (
          <li className="text-xs text-slate-500 py-6 text-center">Sin resultados</li>
        )}
      </ul>
    </aside>
  )
}
