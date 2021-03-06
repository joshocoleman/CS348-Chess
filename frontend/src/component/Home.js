import React from "react";
import { Link } from "react-router-dom";
const jsonWeb = require("jsonwebtoken");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      user: {
        username: "",
        user_id: "",
        name: "",
        email: "",
        rank: 0,
        wins: 0,
        losses: 0,
      },
    };
  }
  render() {
    return (
      <div className="pl-3 pr-3 pt-2">
        {!this.state.signIn && (
          <div>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}

        {!this.state.signIn && (
          <div>
            <Link to="/login">Login</Link>
          </div>
        )}
        {this.state.signIn && (
          <div>
            <Link to="/Homepage">Home</Link>
          </div>
        )}
      </div>
    );
  }

  async componentDidMount() {
    if (document.cookie) {
      const token = document.cookie.substring(13);
      const decoded = JSON.parse(token);
      await this.setState({ user: decoded, signIn: true });
    } else {
      this.setState({ signIn: false });
    }
  }
}

export default Home;
