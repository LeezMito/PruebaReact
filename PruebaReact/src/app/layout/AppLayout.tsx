import { Outlet } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import { useState } from 'react'

export default function AppLayout() {
  const [open, setOpen] = useState(true)

  return (
    <div className="min-h-screen grid"
         style={{ gridTemplateRows: 'auto 1fr', gridTemplateColumns: open ? '240px 1fr' : '64px 1fr' }}>
      <header className="col-span-2 border-b">
        <Header onToggleNav={() => setOpen(v => !v)} />
      </header>
      <aside className="border-r overflow-auto">
        <Nav collapsed={!open} />
      </aside>
      <main className="overflow-auto p-4">
        <Outlet />
      </main>
    </div>
  )
}
