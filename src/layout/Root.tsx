import { NavLink } from 'react-router-dom'

export const Root = () => {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input id="q" aria-label="Search contacts" placeholder="Search" type="search" name="q" />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <div className={'text-3xl font-bold underline'}>test</div>
        <nav>
          <ul>
            <li>
              <NavLink to={'/home'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/contacts/1'}>User</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  )
}
