import React, { Component } from "react";
import Scanner from "./components/Scanner";
import Result from "./components/Result";

class App extends Component {
  state = {
    scanning: false,
    results: []
  };

  _scan = () => {
    this.setState({ scanning: !this.state.scanning });
  };

  _onDetected = result => {
    console.log(this.state.results);
    if (this.state.results.indexOf(result) === -1)
      this.setState({
        results: this.state.results.concat([result])
      });
  };

  render() {
    return (
      <div>
        <button onClick={this._scan}>
          {this.state.scanning ? "Stop" : "Start"}
        </button>
        {this.state.scanning ? <Scanner onDetected={this._onDetected} /> : null}
        <ul className="results">
          {this.state.results.map((result, i) => (
            <Result key={result + i} result={result} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
