// 3rd party imports
import React from 'react'
import styled from 'styled-components'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import { Box } from '@chakra-ui/core'

// My imports

interface FooterProps {}

const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #e6e6e6;
    margin: 1rem 0 0 0;
    padding: 0;
  }
`

const FooterContentStyled = styled.div`
  max-width: var(--max-app-width);
  margin: 0 auto;
  padding: 5px;
  color: var(--grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 1.5rem;
    margin: 5px;
  }
`

const IconWrapperStyled = styled.div`
  display: flex;
`

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <FooterStyled>
      <hr />
      <FooterContentStyled>
        <div>
          <p>copyright {new Date().getFullYear()}</p>
          <p>stevenmchenry01@gmail.com</p>
        </div>
        <IconWrapperStyled>
          <Box as={FaGithubSquare} size='28px' color='var(--dark-grey)' />
          <Box as={AiFillLinkedin} size='28px' color='var(--dark-grey)' />
          <Box as={AiFillTwitterSquare} size='28px' color='var(--dark-grey)' />
        </IconWrapperStyled>
      </FooterContentStyled>
    </FooterStyled>
  )
}
