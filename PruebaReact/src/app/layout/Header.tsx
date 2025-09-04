import styles from './Header.module.css'

type Props = {
  onToggleCompact?: () => void
  onBack?: () => void
  onSave?: () => void
  onSearch?: (q: string) => void
  title?: string
}

export default function Header({
  onToggleCompact,
  onBack,
  onSave,
  onSearch,
  title = 'CRM • Pagos',
}: Props) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const q = new FormData(e.currentTarget).get('q')?.toString() ?? ''
    onSearch?.(q)
  }

  return (
    <header className={styles.appbar} aria-label="Barra superior">
      <div className={styles.brand} aria-label="Identidad del sistema">
        <div className={styles.logo} aria-hidden="true" />
        <span>{title}</span>
      </div>

      <div className={styles.search}>
        <form onSubmit={handleSubmit}>
          <input
            name="q"
            aria-label="Búsqueda global"
            placeholder="Buscar clientes, folios, usuarios…"
          />
        </form>
      </div>

      <div className={styles.user}>
        <button
          className={styles.btn}
          title="Modo compacto"
          type="button"
          onClick={onToggleCompact}
        >
          ↕ Compacto
        </button>
        <button className={styles.btn} type="button" onClick={onBack}>
          ⟵ Volver
        </button>
        <button
          className={`${styles.btn} ${styles.primary}`}
          type="button"
          onClick={onSave}
        >
          💾 Guardar
        </button>
      </div>
    </header>
  )
}
