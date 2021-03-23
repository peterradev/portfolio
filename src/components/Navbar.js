import {Link} from 'react-router-dom'

const Navbar = () => {

  const navStyle = {
    color: 'white'
  }

  return (
    <nav className="nav">
      <h1>Website</h1>
      <ul className="navLinks">
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
