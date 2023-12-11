import React, { Component } from "react";
import { Link } from "react-router-dom";

export class StartProcess extends Component {
  constructor(props) {
    super(props);
    this.state = { isDisabled: false };
  }

  handleClick = () => {
    this.setState({ isDisabled: true });
  };
  render() {
    return (
      <div>
        <Link to="/Card">
          <button
            className="md:w-96 h-14 bg-theme-dark hover:border-4 hover:border-theme-dark hover:bg-tran-color hover:text-theme-dark text-white font-bold md:py-2 px-4 ease-in duration-300 md:rounded"
            id="e1"
            onClick={this.handleClick}
            disabled={this.state.isDisabled}
          >
            START
          </button>
        </Link>
      </div>
    );
  }
}

export default StartProcess;
