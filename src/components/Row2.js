import React from 'react'
import * as ds from '../uiLibrary'
import {
  BadAssShit
} from '../components'

export const Row2 = props => <ds.PaddedRow>
    <ds.Column span={ 6 } className='measure'>  
      <ds.Lead>
        tooling for a better understanding of race course tactics
      </ds.Lead>
      <ds.P>
        Give your tactician the tools they need to make the best 
        decisions on the race course. Combined with a thru-hull 
        knot meter and a classic compass, new wave is the missing
        piece in a tactician’s arsenal.
      </ds.P>
    </ds.Column>  
    <ds.Column span={ 6 } className='tc'>
      <BadAssShit src='new-wave-keel.png' width='416px' />
    </ds.Column>
  </ds.PaddedRow>