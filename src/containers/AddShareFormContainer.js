import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddShareForm extends Component {

  constructor(props) {
    super(props)
  }

  onSubmit = (e) => {
    e.preventDefault()
    let fakeShare = {userId: 2, text: this.refs.title.value}
    fetch(process.env.REACT_APP_API_URL + "shares", {
      method: 'POST',
      body: JSON.stringify(fakeShare),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      this.props.addShare({type: "ADD_SHARE", ...fakeShare})
      this.refs.title.value = ""
    })
  }

  render() {
    return (
      <form className="well" onSubmit={this.onSubmit}>
        <fieldset className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" ref="title" id="title" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <button className="btn btn-success">Add Task</button>
        </fieldset>
      </form>
    )
  }

}

AddShareForm.defaultProps = {
  onSubmit() {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShare: share => {
      dispatch(share)
    }
  }
}

const AddShareFormContainer = connect(null, mapDispatchToProps)(AddShareForm)

export default AddShareFormContainer
