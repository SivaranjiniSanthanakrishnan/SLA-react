import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super();
        console.log("This is Constructor");
        this.state = {
            initialValue : props.initialValue
        }
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    componentDidMount() {
        console.log("This is Component Did Mount");
    }
    componentDidUpdate() {
        console.log("This is Component Did Update");
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.initialValue>10)
            return false;
        else
            return true;
    }
    handleIncrement () {
        this.setState({initialValue : this.state.initialValue +1 })
    }
    handleDecrement = () => {
        this.setState({initialValue : this.state.initialValue -1 })
    }
    componentWillUnmount() {
        console.log("This is component will unmount");
    }
    render() {
        return(
            <div>
                <br />
                Initial Value : {this.state.initialValue} <br/> <br/>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;