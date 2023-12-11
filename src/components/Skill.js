import { PlusCircleOutlined } from "@ant-design/icons";
import { Input, Tag } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      inputVisible: false,
      inputValue: "",
    };

    this.inputRef = React.createRef();
  }

  handleClose = (removedTag) => {
    const newTags = this.state.tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    this.setState({ tags: newTags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.inputRef.current.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue, tags } = this.state;

    if (inputValue && tags.indexOf(inputValue) === -1) {
      this.setState({
        tags: [...tags, inputValue],
        inputValue: "",
        inputVisible: false,
      });
    } else {
      this.setState({ inputVisible: false, inputValue: "" });
    }
  };

  forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          this.handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span
        key={tag}
        style={{
          display: "inline-block",
        }}
      >
        {tagElem}
      </span>
    );
  };

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const tagChild = tags.map(this.forMap);

    return (
      <>
        <div className="">
          {inputVisible ? (
            <Input
              ref={this.inputRef}
              type="text"
              style={{
                width: 200,
                height: 35,
              }}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
              
            />
          ) : (
            <Tag onClick={this.showInput}>Enter Your Skills</Tag>
          )}

          <PlusCircleOutlined
            style={{ fontSize: "130%" }}
            onClick={this.handleInputConfirm}
          />
        </div>
        <div
          style={{
            marginTop: 18,
          }}
        >
          <TweenOneGroup
            enter={{
              scale: 0.8,
              opacity: 0,
              type: "from",
              duration: 100,
            }}
            onEnd={(e) => {
              if (e.type === "appear" || e.type === "enter") {
                e.target.style = "display: inline-block";
              }
            }}
            leave={{
              opacity: 0,
              width: 0,
              scale: 0,
              duration: 200,
            }}
            appear={false}
          >
            {tagChild}
          </TweenOneGroup>
        </div>
      </>
    );
  }
}

export default App;
