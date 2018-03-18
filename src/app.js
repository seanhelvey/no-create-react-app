import React, { Component } from 'react';
import ShareListContainer from './containers/ShareListContainer'
import AddShareFormContainer from './containers/AddShareFormContainer'

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <ShareListContainer></ShareListContainer>
        <AddShareFormContainer></AddShareFormContainer>
      </div>
    );
  }
}
