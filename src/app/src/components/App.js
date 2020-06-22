import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    axios
      .get('http://localhost:3001/postgres/gorm')
      .then(results => {
        const data = results.data;
        this.setState({
          message: data['message']
        });
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.getData}>getData</button>
        <p>{this.state.message}</p>
    </div>
    );
  }
}
export default App;
