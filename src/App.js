
import React, { Component } from 'react'
import CounterFun from './component/CounterFun'

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })

  }
  decrement = () => {
    this.state.counter===0 ? this.setState({conter:0}) :this.setState({counter:this.state.counter-1})

  }
  reset = () => {
    this.setState({
      counter: 0
    })

  }

  render() {

    return (
      <>
        <div style={{textAlign:'center'}}>
          <h1>Counter App</h1>
          <h2>{this.state.counter}</h2>
          <button className='btn btn-primary mx-2' onClick={this.increment}>Increment</button>
          <button className='btn btn-danger' onClick={this.decrement}>Decrement</button>
          <div style={{marginTop:'10px'}}>
          <button className='btn btn-warning' onClick={this.reset}>Reset</button>
          </div>
         
        </div>
        <hr></hr>
        <h4 style={{textAlign:'center',marginTop:'50px'}}>---------------Using Function Comp---------------</h4>
        <CounterFun/>


      </>
    )
  }
}

export default App