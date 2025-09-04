import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import HomePage from '@/features/home/pages/HomePage'
import Create from '@/features/create/pages/Create'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/create', element: <Create /> },
      { path: '*', element: <div>404</div> },
    ],
  },
])
