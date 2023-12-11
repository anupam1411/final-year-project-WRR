import React, { Component } from "react";
import { Upload } from "antd";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class FileUpload extends Component {
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
    const formData = new FormData();
    let fileCon = await this.state.fileList[0].file.originFileObj;
    formData.append("file", fileCon);
    axios
      .post("http://localhost:5000/uploadIdeal", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        this.setState({ isDisabled: true, isUploaded: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async handleUpload(files) {
    files.file.status = "done";
    let fileList = [files];
    this.setState({ fileList });
    return;
  }


  render() {
    const props = {
      onChange: this.handleUpload,
      multiple: false,
      directory: false,
      webkitdirectory: true,
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
      <div className="2xl:h-screen xl:w-[198vh] md:pb-2">
        <Upload {...props} maxCount={1}>
          <button className="bg-theme-dark hover:bg-tran-color hover:text-theme-dark text-white hover:border-[00.45vh] hover:border-theme-dark sm:py-2 sm:px-4  md:rounded ease-in duration-[0.25s]">
            Click to Browse File
          </button>
        </Upload>
        <div>
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
      </div>
    );
  }
}
