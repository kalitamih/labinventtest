import React, { Component } from 'react';
import Ethernet from './sections/ethernet';
import Wireless from './sections/wireless';
import Buttons from './sections/buttons';
import './App.css';

class App extends Component {
  state = {
    validationData: false,
  }


  componentDidMount() {
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      validationData: true,
    });   
    const method = 'POST';    
    const body = new FormData(event.target);
    console.log('body', body.entries());
    for(let pair of body.entries()) {
     console.log(pair[0]+ ', '+ pair[1]); 
    }
    fetch("https://httpbin.org/post", { method, body: body })
      .then(res => res.json())
      .then(data => console.log(data.form));
  };

  render() {
    const { validationData } = this.state;
    return (
      <form className="App" id="data" onSubmit={this.handleSubmit} >
        <Ethernet validationData={validationData} />
        <Wireless validationData={validationData} />
        <Buttons />
      </form>
    );
  }
}

export default App;
