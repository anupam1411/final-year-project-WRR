import React, { Component } from "react";
import Uploader1 from "../components/uploader1";
import Uploader2 from "../components/uploader2";
import axios from "axios";
import StartProcess from "../components/startProcess";

export default class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileList: [],
    };
    this.onPageLoad = this.onPageLoad.bind(this);
  }

  componentDidMount() {
    this.onPageLoad();
  }

  onPageLoad() {
    axios
      .get("http://127.0.0.1:5000/deleteFiles")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="h-screen bg-[url('/src/assests/Resume-Blog-Animation-1080.gif')] bg-no-repeat bg-cover bg-fixed bg-opacity-20 bg-theme-light">
        <div className=" h-screen grid grid-cols-1 backdrop-blur-md sm:grid-cols-3 gap-4 sm:pt-14 sm:p-8 overflow-x-hidden ">
          <div className="sm:col-start-1 sm:col-span-0 z-10 mt-4 sm:mt-0">
            <Uploader1 />
          </div>
          <div className="sm:col-start-3">
            <Uploader2 />
          </div>
          <div className="sm:col-start-2 text-center -translate-y-100 z-30 ">
            <StartProcess />
          </div>
        </div>
      </div>
    );
  }
}
