import React, { Component } from 'react';

interface IState {
    text: string
}

export default class TodoList extends Component<any, IState> {
    state = {
        text: ""
    }
    myRef = React.createRef<HTMLInputElement>();
    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={
                    (e) => {
                        this.setState({
                            text: e.target.value
                        })
                    }}
                />
                <button onClick={() => {
                    console.log(this.state.text);
                }}>click</button>
                <br />
                {/* 绑定ref */}
                <input ref={this.myRef} />
                <button onClick={() => {
                    // 此处使用“断言”告诉编译器myRef绑定的值一定是input标签
                    console.log((this.myRef.current as HTMLInputElement).value);
                }}>click</button>
            </div >
        )
    }
}
