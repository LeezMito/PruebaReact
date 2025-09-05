import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="p-8 space-y-8">

      <div className="rounded-2xl bg-gradient-to-r bg-amber-50 p-8 text-amber-900 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Bienvenido al Sistema Prueba </h1>
        <p className="mt-2 text-sm opacity-90 text-center">
          Un sistema para una prueba técnica.
        </p>
      </div>
      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
        <p className="text-slate-600 mb-6">¿Quieres agregar nuevo registro?</p>
        <Link
          to="/create"
          className="rounded-lg bg-amber-500 px-4 py-2 text-white text-sm font-medium hover:bg-amber-600 mb-3"
        >
          + Agregar registro
        </Link>
      </div>
    </div>
  )
}
