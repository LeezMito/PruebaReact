import { Outlet } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import { useState } from 'react'

export default function AppLayout() {
  const [open, setOpen] = useState(true)

  return (
    <div className="h-[calc(100vh-1px)] grid"
        style={{ gridTemplateRows: 'auto 1fr', gridTemplateColumns: open ? '240px 1fr' : '64px 1fr' }}>
      <header className="col-span-2 z-99">
        <Header/>
      </header>
      <aside className="shadow-md z-99 ">
        <Nav />
      </aside>
      <main className="bg-slate-100/60">
        <div className="w-[calc(100%-30px)] h-[calc(100vh-100px)] rounded-2xl shadow-gray-200 shadow-md bg-white m-4 p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
