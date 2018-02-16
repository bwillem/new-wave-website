import styled from 'styled-components'
import { mq } from './'

export const Headline = styled.h1`
  font-size: 3em;
  font-weight: 300;
  line-height: 1.4;
  @media screen and (min-width: ${ mq.large }){
    font-size: 4em
  }
`

export const H2 = styled.h2`
  font-size: 2.75em;
  line-height: 1.333;
  @media screen and (min-width: ${ mq.small }){
    font-size: 3em
  }
`
export const Lead = styled.p`
  font-size: 1.5em;
  font-weight: 200;
  line-height: 1.4;
  max-width: 30em;
  @media screen and (min-width: ${ mq.small }){
    font-size: 1.5em
  }
`

export const Supertitle = styled.h3`
  color: rgba(255,255,255,0.23);
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  max-width: 30em;
  @media screen and (min-width: ${ mq.small }){
    font-size: 0.75em
  }
`