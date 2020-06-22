import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      experiences: null,
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    const url = '//api.portfolio.local/get-experiences'
    const config = {}

    axios.get(url, config)
      .then(results => {
        console.log(results.data["Value"]);
        console.log(typeof(results.data["Value"].json()));
        this.setState({
          experiences: results.data
        });
      })
      .catch(error => {console.log(error)});
  }

  render() {
    return (
      <div>
        <button onClick={this.getData}>getData</button>
        <p>{this.state.experiences}</p>
    </div>
    );
  }
}
export default App;
