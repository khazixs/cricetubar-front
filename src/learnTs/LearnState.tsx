import React, { Component } from 'react'
interface IState {
  name: string,
}
export class LearnState extends Component<any,IState> {
  state = {
    name: "weixin",
  }
  render() {
    return (
      <div> 
        LearnState-{this.state.name}<br />
        <button onClick={() => {
          this.setState({
            name: "QQ",
          })
        }}> click </button>
      </div>
    )
  }
}

export default LearnState