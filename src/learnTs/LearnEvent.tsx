import React, { Component, createRef } from 'react'

export default class LearnEvent extends Component {

  handleClick2 = () => {
    alert("点击2");
  };
  handleClick4 = () => {
    console.log(4);

    // alert("点击4");
  };
  myRef = createRef<HTMLButtonElement>();
  componentDidMount(): void {
    this.myRef.current?.addEventListener('click', () => {
      console.log(1);
      this.handleClick4();
    })
  }

  componentWillUnmount(): void {
    this.myRef.current?.removeEventListener('click', () => {

    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick2}>按钮</button>
        <button ref={this.myRef}>test</button>
      </div>
    )
  }
}
