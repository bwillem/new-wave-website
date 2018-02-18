import React from 'react'
import * as ds from '../uiLibrary'
import { BadAssShit } from './'

export const Row1 = props => <ds.PaddedRowBlack>
    <ds.Column span={ 6 } className='tc'>  
      <BadAssShit src='bad-ass-shit.png' />
    </ds.Column>  
    <ds.Column span={ 6 } className='measure'>
      <ds.Lead className='white'>
        new wave demystifies the metrics you need to stay at the top of the fleet.
      </ds.Lead>
      <ds.P className='silver'>
        Race computers are part of modern one-design racing. But they are not all equal.
        Made by one-design racers for one-design racers, new wave provides the functionality of a race computer and more, 
        straight to your phone.
      </ds.P>
    </ds.Column>
  </ds.PaddedRowBlack>