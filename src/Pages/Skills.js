import React, { Component } from "react";
import Uploader2 from "../components/uploader2";
import Form from "../components/Form";
import StartProcess from "../components/startProcess";

export class Folder extends Component {
  render() {
    return (
      <div className="bg-[url('/src/assests/Resume-Blog-Animation-1080.gif')] overflow-x-hidden bg-theme-light bg-fixed bg-no-repeat bg-cover ">
        <div className="h-screen sm:pt-14 sm:p-8 flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6 backdrop-blur-md ">
          <div className="sm:w-2/3">
            <Form />
          </div>
          <div className="sm:w-2/3">
            <Uploader2 />
          </div>
          <div className="sm:w-2/3 text-center ">
            <StartProcess />
          </div>
        </div>
      </div>
    );
  }
}

export default Folder;
