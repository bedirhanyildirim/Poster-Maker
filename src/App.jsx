import { useRoutes } from 'react-router-dom'
import routes from './routers/index'

export default function App() {
  return useRoutes(routes)
}

