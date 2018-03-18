import React, { Component } from 'react';
import ShareList from '../components/ShareList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    shares: state.shares
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShares: (shares) => {
      dispatch({type: "SET_SHARES", ...shares})
    }
  }
}

const ShareListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareList)

export default ShareListContainer
