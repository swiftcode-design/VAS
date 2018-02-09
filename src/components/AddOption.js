import React, { Component } from 'react'
import Modal from 'react-modal';
import axios from 'axios'
class AddOption extends Component{

componentDidMount(){
  console.log(
    'bitch plz'
  );
  axios.get('/api/test').then(res => console.log('res', res))
}
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
