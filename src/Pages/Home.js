import React, { Component } from "react";
import Contentpage from "../components/Contentpage";

export class Home extends Component {
  render() {
    return (
      <div className="2xl:h-screen bg-theme-light bg-[url('/src/assests/how-to-hire-the-right-person_nyt-jumbo-v2.gif')] bg-blend-overlay bg-no-repeat bg-cover ">
        <Contentpage />
      </div>
    );
  }
}

export default Home;
