import {Link} from 'react-router-dom'

const Navbar = () => {

  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <nav className="nav">
      {/* <div className="navContainer"> */}
        <h1><Link style={navStyle} to='/portfolio'>Website</Link></h1>
        <ul className="navLinks">
          <Link style={navStyle} to='/about'>
            <li>About</li>
          </Link>
          <Link style={navStyle} to='/contact'>
            <li>Contact</li>
          </Link>
        </ul>
      {/* </div> */}
    </nav>
  )
}

export default Navbar
