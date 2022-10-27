import React from "react";

interface OrangePropsInterface {
    name: string
};
interface OrangeStatesInterface {
    date: string,
    timerID:NodeJS.Timer|string
};
class Orange extends React.Component<OrangePropsInterface, OrangeStatesInterface> {
    constructor(props: OrangePropsInterface) {
        super(props);
        this.state = {
            date: new Date().toLocaleString(), 
            timerID:''
        }
    }
    
    tick() {
        this.setState({
            date: new Date().toLocaleString()
        })
    }

    componentDidMount(): void {
        this.setState({
            timerID: setInterval<string[]>(()=>this.tick(),1000)
        }); 
    }
    
    componentWillUnmount(): void {
        clearInterval(this.state.timerID);
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date}.</h2>
            </div>
        );
    }

}

export default Orange;