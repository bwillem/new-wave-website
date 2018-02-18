import React from 'react'
import styled from 'styled-components'
import { 
  HeroImage,
  NavBar,
} from './'
import * as ds from '../uiLibrary'

const ViewportHeightDiv = styled(ds.Row)`
  background-image: radial-gradient(66.666% 66.666% at 75% 50%, rgb(66, 66, 66) 0%, rgb(0, 0, 0) 100%);
  @media screen and (min-width: ${ ds.mq.medium }) {
    height: 100vh;
  }
`
const VerticallyAlignedDiv = styled.div`
  text-align:center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @media screen and (min-width: ${ ds.mq.small }) {
    text-align: left
  }
`
const LeftPanel = styled(VerticallyAlignedDiv)`
  position: relative;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 4em;
  @media screen and (min-width: ${ ds.mq.large }) {
    padding-top: 0;
    padding-left: 8em
  }
`
const RightPanel = styled(VerticallyAlignedDiv)`
  position: relative
`
const StyledAppStore = styled.img`
  max-width: 178px 
`
export const Hero = props => <React.Fragment>
  <NavBar />
  <ViewportHeightDiv>
    <ds.Column span={ 7 }>
      <LeftPanel>
        <ds.Headline className='tl white'>
          The fastest way to get
          around a race course
        </ds.Headline>
        <ds.Lead className='mb5 tl silver'>
          Made for inshore one-design racing,
          new wave calculates the metrics you care about
          and delivers them straight to your phone
        </ds.Lead>
        <StyledAppStore src='app-store.png' />
      </LeftPanel>
    </ds.Column>
    <ds.Column span={ 5 }>
      <RightPanel>
        <HeroImage />
      </RightPanel>
    </ds.Column>
  </ViewportHeightDiv>
</React.Fragment>