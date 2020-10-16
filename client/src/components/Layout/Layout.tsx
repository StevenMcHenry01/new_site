// 3rd party imports
import React from 'react'
import { PageProps } from 'gatsby'
import 'normalize.css'
import styled from 'styled-components'

// My imports
import GlobalStyles from '../../styles/GlobalStyles'
import { Footer } from '../Footer/Footer'
import { Nav } from '../Nav/Nav'
import Typography from '../../styles/Typography'

interface LayoutProps {}

const ContentStyled = styled.div``

export const Layout: React.FC<LayoutProps> = ({ children }: PageProps) => {
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
