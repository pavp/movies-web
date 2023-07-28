import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-c-light-purple p-4">
      <div className="mx-4">
        <div className="flex items-center justify-between">
          <div className="text-c-light-blue font-semibold text-xl">
            <NavLink to={'/home'}>Movies</NavLink>
          </div>
          <ul className="flex space-x-4 ml-4 justify-end">
            <li className="text-white hover:text-gray-300">
              <NavLink to={'/wishlist'} className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                <span style={{ color: 'white', fontSize: 16 }} className="sm:hidden">
                  <i className="fa-solid fa-bookmark"></i>
                </span>
                <div className="hidden sm:block">Wishlist</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
