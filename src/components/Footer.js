import React from 'react'
import styled from 'styled-components'
import * as ds from '../uiLibrary'

const StyledFooterWrap = styled.footer`
  background-color: black;
  padding: 8em
`

const StyledFooterLogo = styled.img`
  max-width: 76px
`
const StyledTextCenter = styled.div`
  width: 100%;
  text-align: center
`
const StyledComingText = styled.h3`
  color: white;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: .3em;
  font-weight: bold
`
const StyledCopyright = styled.p`
  font-size: 0.75em;
  font-weight: 200;
  color: rgba(255,255,255,0.5)
`

export const Footer = props => <StyledFooterWrap>
    <StyledTextCenter>
      <StyledFooterLogo src='logo-sm-white.png' />
      <StyledComingText className='mb0 pb4'>
        coming summer 2018
      </StyledComingText>
      <StyledCopyright className='mb0'>
        © 2018 New Wave Sailing, Bryan Guenther
      </StyledCopyright>
    </StyledTextCenter>
  </StyledFooterWrap>