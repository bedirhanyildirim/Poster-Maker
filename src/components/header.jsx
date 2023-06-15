import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="w-full flex justify-center items-center bg-gray-100 bg-white">
      <div className="content flex justify-between items-center gap-4 py-2">
        <NavLink to="/" className="text-2xl font-bold mr-auto">
          Poster Maker
        </NavLink>
        <NavLink to="/about" className="mr-4">
          About
        </NavLink>
      </div>
    </div>
  )
}