import Home from '../pages/Home'
import About from '../pages/About'
import GuestUser from '../layouts/GuestUser'

const routes = [
  {
    path: '/',
    element: <GuestUser/>,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]

export default routes