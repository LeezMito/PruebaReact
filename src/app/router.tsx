import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import HomePage from '../features/home/pages/HomePage'
import CreatePage from '../features/create/pages/CreatePage'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/create', element: <CreatePage /> },
      { path: '*', element: <div>404</div> },
    ],
  },
])
