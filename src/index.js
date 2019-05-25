import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import "./index.css";

class App extends React.Component {
  state = {
    lat: null,
    month: new Date().getMonth(),
    season: null,
    errMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

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
      return (
        <div>
          <SeasonDisplay
            lat={this.state.lat}
            month={this.state.month}
            season={this.state.season}
          />
          <div className="buttons">
            <div
              onClick={() => this.setState({ season: "spring" })}
              className="ui vertical  button"
              tabIndex="0"
            >
              <div className="visible content">
                <i className="umbrella icon" />
              </div>
            </div>
            <div
              onClick={() => this.setState({ season: "summer" })}
              className="ui vertical  button"
              tabIndex="0"
            >
              <div className="visible content">
                <i className="sun icon" />
              </div>
            </div>
            <div
              onClick={() => this.setState({ season: "fall" })}
              className="ui vertical  button"
              tabIndex="0"
            >
              <div className="visible content">
                <i className="leaf icon" />
              </div>
            </div>
            <div
              onClick={() => this.setState({ season: "winter" })}
              className="ui vertical  button"
              tabIndex="0"
            >
              <div className="visible content">
                <i className="snowflake icon" />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.errMessage) {
      return <div>Error: {this.state.errMessage}</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
