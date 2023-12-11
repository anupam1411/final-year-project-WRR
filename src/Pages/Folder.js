import React, { Component } from "react";
import Uploader2 from "../components/uploader2";
import Form from "../components/Form";
export class Folder extends Component {
  render() {
    return (
      <div className="2xl:h-screen sm:pt-14 sm:p-8 flex flex-col space-y-[12vh]">
        <div>
          <Form />
        </div>
        <div>
          <Uploader2 />
        </div>
      </div>
    );
  }
}

export default Folder;
