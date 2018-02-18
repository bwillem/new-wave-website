import React from 'react'
import styled from 'styled-components'

const StyledBadAssShit = styled.img`
  max-width: 100%;
  width: ${ props => props.width ? props.width : `374px` }
`

export const BadAssShit = props => <StyledBadAssShit src={ props.src } { ...props }/>
