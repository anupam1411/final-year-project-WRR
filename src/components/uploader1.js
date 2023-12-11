import React, { Component } from "react";
import FileUpload from "./fileUploader";

export default class Uploader1 extends Component {
  render() {
    return (
      <div className="rounded-md text-center shadow-lg shadow-theme-dark flex flex-col   items-center bg-uploader-bg md:h-[36vh] md:w-[64vh] border-2 bg-opacity-80 border-theme-dark ">
        <div className="m-3 text-xl font-bold text-theme-light">
          Upload Ideal Candidate Resumes
        </div>
        <FileUpload />
      </div>
    );
  }
}
