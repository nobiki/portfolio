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
    const url = '//api.portfolio.local/postgres/gorm'
    const config = {}

    axios.get(url, config)
      .then(results => {
        const data = results.data;
        console.log(data);
        this.setState({
          message: data['message']
        });
      })
      .catch(error => {console.log(error)});
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
