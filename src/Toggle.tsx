import React from 'react';

interface ToggleProps {
    name: string,
}
interface ToggleStates {
    isToggleOn: boolean,
}
class Toggle extends React.Component<ToggleProps, ToggleStates>  {

    constructor(props: ToggleProps) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        //要用bind方法，是因为单纯把this.handleClick作为参数传递出去之后，
        //就失去this的环境了，ES6不会自动给成员函数绑定this
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;
