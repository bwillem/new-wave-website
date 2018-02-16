import React from 'react'
import styled from 'styled-components'
import BadAssShit from '../components/BadAssShit'
import * as ds from '../uiLibrary'

const StyledFooterWrap = styled.footer`
  background: black  
`

const StyledFooterRow = styled(ds.Row)`
  padding: 8em 2em;
  @media screen and (min-width: ${ ds.mq.medium }) {
    padding: 8em
  }
`

const P = styled.p`
  font-size: 1em;
  font-weight: 100;
  line-height: 1.5;
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

const Footer = props => <StyledFooterWrap>
    <StyledFooterRow>
      <ds.Column span={ 6 } className='tc'>  
        <BadAssShit />
      </ds.Column>  
      <ds.Column span={ 6 } className='measure'>
        <ds.Lead className='white'>
          new wave™ demystifies the metrics you need to stay at the top of the fleet.
        </ds.Lead>
        <P className='silver'>
          Race computers are part of modern one-design racing. But they are not all equal.
          Made by one-design racers for one-design racers, new wave™ provides the functionality of a race computer and more, 
          straight to your phone.
        </P>
      </ds.Column>
    </StyledFooterRow>
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

export default Footer