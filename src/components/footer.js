import React, { Component } from "react";
import { Layout, Space } from "antd";
import {
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
const { Footer } = Layout;
export class footer extends Component {
  render() {
    return (
      <div className=" drop-shadow-lg bottom-0 text-theme-light bg-theme-dark opacity-90">
        <Footer className="h-14 relative text-center">
          <Space className="text-2xl space-x-3">
            <InstagramOutlined />
            <TwitterOutlined />
            <FacebookOutlined />
            <GithubOutlined />
            <LinkedinOutlined />
          </Space>
   
           <br/>
            RMR Design ©2023 Created by HAPK
          
        </Footer>
      </div>
    );
  }
}

export default footer;
