import React, { Component } from 'react'
interface IState {
    myRef: any,
}
export default class LearnRefs extends Component<any, IState> {
    num: number = 123;
    constructor(props: any) {
        super(props);
        this.setState({
            myRef: React.createRef()
        })
        // console.log(this.num);
    }
    componentDidMount() { // 在render()函数执行完成后调用
        // eslint-disable-next-line react/no-direct-mutation-state
        // this.myRef中有一个current属性
    }
    render() {
        return (
            <div>
                LearnRefs{this.num}
            </div>
        )
    }
}
