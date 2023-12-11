import React, { Component } from "react";
import { Upload } from "antd";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class FolderUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileList: [],
      isDisabled: false,
      isUploaded: false,
    };

    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit() {
    for (
      let index = 0;
      index < this.state.fileList[0].fileList.length;
      index++
    ) {
      const formData = new FormData();
      let fileCon = await this.state.fileList[0].fileList[index].originFileObj;
      formData.append("file", fileCon);
      console.log("formData is", formData);
      axios
        .post("http://localhost:5000/uploadApplying", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    this.setState({ isDisabled: true, isUploaded: true });
  }

  async handleUpload(files) {
    files.file.status = "done";
    let fileList = [files];

    this.setState({ fileList });
  }

  render() {
    const props = {
      onChange: this.handleUpload,
      multiple: true,
      directory: true, // Enable folder upload
      webkitdirectory: true, // For Chrome browser only
      accept: ".pdf,.docx,.txt",
      customRequest: (event) => {
        console.log("event", event);
        return;
      },
      showUploadList: {
        showRemoveIcon: false,
      },
    };
    const disabledButtonClass = "bg-theme-dark text-white md:rounded sm:m-2 opacity-50 cursor-not-allowed";
    const buttonClass = this.state.isUploaded ? disabledButtonClass : "bg-theme-dark hover:bg-tran-color hover:text-theme-dark text-white hover:border-[00.45vh] hover:border-theme-dark sm:py-2 sm:px-4 md:rounded sm:m-2 ease-in duration-[0.25s]";
    return (
      <div className="">
        <div className=" xl:w-[1931238vh] sm:pb-2">
          <Upload {...props} className="">
            <button className="bg-theme-dark hover:bg-tran-color hover:text-theme-dark text-white sm:py-2 sm:px-4 hover:border-[00.45vh] hover:border-theme-dark md:rounded ease-in duration-[0.25s] ">
              Click to Upload Folder
            </button>
          </Upload>
          <button
            className={buttonClass}
            onClick={this.handleSubmit}
            disabled={this.state.isDisabled}
          >
            {this.state.isUploaded ? (
              <span>
                Uploaded <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            ) : (
              "Upload"
            )}
          </button>
        </div>
        <div></div>
      </div>
    );
  }
}
