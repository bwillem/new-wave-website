import React from 'react'
import styled from 'styled-components'
import { mq } from '../uiLibrary'

const StyledHeroImage = styled.img`
  display: inline-block;
  margin-bottom: 4em;
  max-width: 100%;
  @media screen and (min-width: ${ mq.small }) {
    margin: 0 auto;
  }
  max-width: 380px
`

export const HeroImage = props => <StyledHeroImage src='new-wave.png'/>