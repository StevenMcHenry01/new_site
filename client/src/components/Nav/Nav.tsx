// 3rd party imports
import React from 'react'
import { Link } from 'gatsby'

// My imports

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}
