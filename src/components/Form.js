import { Modal } from "antd";
import { Component } from "react";
import FormUploader from "./formUploader";
import { DoubleRightOutlined } from "@ant-design/icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }

  handleClick() {
    this.setState({
      open: true,
    });
  }

  handleCancel() {
    this.setState({
      open: false,
    });
  }

  handleOk() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div className="flex justify-center">
        <button
          className="md:w-96 h-14 bg-theme-dark hover:border-4 hover:border-theme-dark hover:bg-tran-color hover:text-theme-dark text-white font-bold md:py-2 px-4 ease-in duration-300 md:rounded"
          onClick={this.handleClick}
        >
          Enter the Requirements here <DoubleRightOutlined />
        </button>

        <Modal
          title=""
          centered
          open={this.state.open}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={500}
          footer={null} 
        >
          <div>
            <FormUploader />
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
