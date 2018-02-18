import styled from 'styled-components'
import * as ds from './'

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 16px
`

export const PaddedRow = styled(Row)`
  padding: 8em 2em;
  @media screen and (min-width: ${ ds.mq.medium }) {
    padding: 8em
  }
`

export const PaddedRowBlack = styled(PaddedRow)`
  background-color: black
`