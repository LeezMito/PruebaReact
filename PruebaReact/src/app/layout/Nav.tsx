import { NavLink } from 'react-router-dom'

type Props = { collapsed?: boolean }

const itemCls = ({ isActive }: { isActive: boolean }) =>
  `block px-3 py-2 rounded hover:bg-slate-100 ${isActive ? 'bg-slate-200 font-medium' : ''}`

export default function Nav({ collapsed = false }: Props) {
  return (
    <nav className="p-2 text-sm h-[calc(100vh-60px)] shadow-md">
      <div className="px-2 py-1 text-slate-500 uppercase tracking-wide text-xs">Menú</div>
      <ul className="space-y-1">
        <li>
          <NavLink to="/" className={itemCls}>
            {!collapsed ? 'Inicio' : '🏠'}
          </NavLink>
        </li>
        <li>
          <NavLink to="/create" className={itemCls}>
            {!collapsed ? 'Alta de país' : '💸'}
          </NavLink>
        </li>

      </ul>
    </nav>
  )
}
