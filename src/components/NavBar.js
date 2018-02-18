import React from 'react'
import styled from 'styled-components'

const StyledNavBar = styled.div`
  position: absolute;
  padding: 1em;
  color: rgba(255,255,255,0.2);
  font-weight: 100
`

const StyledLogo = styled.img`
  max-width: 42px;
  opacity: .2
`

const Logo = props => <StyledLogo src='new-wave-logo-white.png' />

export const NavBar = props => <StyledNavBar><Logo /></StyledNavBar>