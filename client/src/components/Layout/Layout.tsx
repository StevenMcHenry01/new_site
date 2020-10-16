// 3rd party imports
import React from 'react'
import 'normalize.css'
import styled from 'styled-components'

// My imports
import GlobalStyles from '../../styles/GlobalStyles'
import { Footer } from '../Footer/Footer'
import { Nav } from '../Nav/Nav'
import Typography from '../../styles/Typography'

interface LayoutProps {}

const ContentStyled = styled.div`
  max-width: var(--max-app-width);
  margin: 0 auto;
`

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Nav />
      <ContentStyled>{children}</ContentStyled>
      <Footer />
    </>
  )
}
