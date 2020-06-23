import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    // const url = '//api.portfolio.local/get-experiences'
    const url = '//localhost:3001/get-experiences'
    const config = {}

    axios.get(url, config)
      .then(results => {
        console.log(results.data["Value"]);
        this.setState({
          experiences: results.data["Value"]
        });
      })
      .catch(error => {console.log(error)});
  }

  render() {
    return (
      <div>
        <button onClick={this.getData}>getData</button>
      </div>
    );
  }
}
export default App;
