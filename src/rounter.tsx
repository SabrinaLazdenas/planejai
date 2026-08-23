import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './components/shared/Layout/RootLayout'
import { SimulateFormPage } from './pages/SimulationFormPage'
import { SimulationResultsPage } from './pages/SimulationResultsPage'
import { SimulationHistoryPage } from './pages/SimulationHistoryPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <SimulateFormPage />
      },
      {
        path: '/resultado/:id',
        element: <SimulationResultsPage />,
      },
      {
        path: '/historico',
        element: <SimulationHistoryPage />,
      },
    ],
  },
])
