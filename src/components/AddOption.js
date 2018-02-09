import React, { Component } from 'react'
import Modal from 'react-modal';

class AddOption extends Component{

  render(){
    return(
      <Modal
        isOpen={this.props.open}
        label="Selected Option">
        <h3 onClick={this.props.test}>Selected option</h3>
      </Modal>
    )
  }
}

export default AddOption
