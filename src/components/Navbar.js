import {Link} from 'react-router-dom'

const Navbar = () => {

  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <nav className="nav">
      <h1><Link style={navStyle} to='/'>Website</Link></h1>
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
