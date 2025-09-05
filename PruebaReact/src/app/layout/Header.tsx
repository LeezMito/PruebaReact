type Props = {
  onToggleCompact?: () => void
  onBack?: () => void
  onSave?: () => void
  onSearch?: (q: string) => void
  title?: string
}

export default function Header({
  title = 'Prueba técnica',
}: Props) {
  return (
    <header
      className="grid h-14 grid-cols-[230px_1fr_300px] items-center gap-3 px-4 bg-white shadow-md z-30"
      aria-label="Barra superior"
    >
      <div className="flex items-center gap-2 font-bold" aria-label="Identidad del sistema">
        <div
          className="w-7 h-7 rounded-lg"
          style={{
            background:
              'linear-gradient(135deg, #f28c00, #ffce63)',
          }}
        />
        <span className="text-slate-800 text-sm md:text-base">{title}</span>
      </div>

      <div className="max-w-[1080px] hidden md:block">
        <form className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </span>

          <input
            name="q"
            aria-label="Búsqueda global"
            placeholder="Buscar clientes, folios, usuarios…"
            className="w-full h-9 border border-slate-200 rounded-lg pl-9 pr-3 text-sm bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </form>
      </div>
    </header>
  )
}
