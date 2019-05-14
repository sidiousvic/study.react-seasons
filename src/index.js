import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMessage: "" };
    console.log(this.state);
  }

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
      return <div>LOADING...</div>;
    } else if (!this.state.err && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else if (this.state.errMessage) {
      return <div>Error: {this.state.errMessage}</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
