import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

  //   componentDidUpdate() {
  //     console.log("Component did update");
  //   }

  render() {
    if (!this.state.errMessage && !this.state.lat) {
      return (
        <div className="season-display">
          <h1 className="loading">
            LOADING<span className="blink-ellipsis">...</span>
          </h1>
        </div>
      );
    } else if (!this.state.err && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (this.state.errMessage) {
      return <div>Error: {this.state.errMessage}</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
