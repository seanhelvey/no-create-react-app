import React, { Component } from 'react';
import Share from './Share'

export default class ShareList extends Component {

  componentDidMount() {
    console.log("component did mount");
    fetch(process.env.REACT_APP_API_URL + "shares")
    .then(results => results.json())
    .then(data => {
      this.props.setShares({
        shares: data
      })
    })
  }

  renderCards() {
    console.log("render cards - this.props.shares", this.props.shares);
    return this.props.shares.map((share, index) => {
      return <Share key={index} text={share.text}></Share>
    })
  }

  render() {
    return (
      <div className="card-list">
        <ul>
          {this.renderCards()}
        </ul>
      </div>
    )
  }
}
