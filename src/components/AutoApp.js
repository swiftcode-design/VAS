import React, { Component} from 'react'
import AddOption from './AddOption'

class AutoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: false
    }
    this.test = this.test.bind(this)
  }
  test(){
    this.setState({test: !this.state.test})
  }
  render() {
    return (
      <div>
        <p onClick={this.test}>Plz sons</p>
        <AddOption test={this.test} open={this.state.test}/>
      </div>
    )
  }
}

export default AutoApp
