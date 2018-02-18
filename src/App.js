import React, { Component, Fragment } from 'react'
import { 
  Hero,
  Footer,
  Row1,
  Row2,
} from './components'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Row1 />
        <Row2 />
        <Footer />
      </Fragment>
    )
  }
}

export default App;
