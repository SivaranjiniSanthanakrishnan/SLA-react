import logo from './logo.svg';
import './App.css';
import Counter from './CounterComponent';
import React from 'react';
import ControlledForm from './ControlledForm';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      show: true
    }
  }
  toggleComponent = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleComponent}>Show/Hide</button>
        {this.state.show ? <Counter initialValue={5}/> : <> </>} 
        <br />
        <ControlledForm />
      </div>
    );
  }
}

export default App;
