// 3rd party imports
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'
import { Box } from '@chakra-ui/core'

// My imports
// @ts-ignore
import SmallLogo from '../../assets/images/smallLogo.svg'

interface NavProps {}

// STYLING
const NavbarStyled = styled.nav`
  max-width: var(--max-app-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    padding: 20px;
    li {
      margin: 0 15px;
      a {
        color: var(--dark-grey);
      }
    }
  }
`

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <NavbarStyled>
      <SmallLogo style={{ width: '50px' }} />
      <ul>
        <li>
          <Link to='/' activeStyle={{ borderBottom: '5px solid var(--main)' }}>
            home
          </Link>
        </li>
        <li>
          <Link
            to='/work'
            activeStyle={{ borderBottom: '5px solid var(--main)' }}
          >
            work
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            activeStyle={{ borderBottom: '5px solid var(--main)' }}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to='/writing'
            activeStyle={{ borderBottom: '5px solid var(--main)' }}
          >
            writing
          </Link>
        </li>
        <li>
          <Box as={AiFillGithub} size='28px' color='var(--dark-grey)' />
        </li>
      </ul>
    </NavbarStyled>
  )
}
