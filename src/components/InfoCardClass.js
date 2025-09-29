import { GITHUB_API_GET_USER } from "../utils/constants";
import "./InfoCard.css";
import React from "react";

class InfoCardClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      count: 0,
      userinfo: {},
    };
  }

  async componentDidMount() {
    console.log("mount method");
    const data = await fetch(GITHUB_API_GET_USER);
    const json = await data.json();

    //console.log(json);

    this.setState({ userinfo: json });
  }

  render() {
    return (
      <div className="info-card">
        <h2 className="info-name">{this.state.userinfo.name}</h2>
        <p className="info-location">📍 {this.props.location}</p>
        <p
          className="info-contact"
          onMouseOutCapture={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          📞 {this.state.count}
        </p>
      </div>
    );
  }
}

export default InfoCardClass;
