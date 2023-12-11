import React, { Component } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import HomePageGif from "../assests/unnamed-6.gif";
import Xarrow from "react-xarrows";

const { Content } = Layout;
export class Contentpage extends Component {
  state = {
    isMobile: window.innerWidth <= 500,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 500 });
  };

  render() {
    const { isMobile } = this.state;
    return (
      <Content>
        <div className="">
          <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
            <div className="2xl:w-full xl:w-5/12 lg:w-6/12">
              <p className="ml-[1%]">
                <div className="text-6xl font-bold">Welcome</div>
                <div className="text-lg">
                  to our website, where finding the perfect candidate for your
                  job opening is just a few clicks away.
                  <br /> Our resume ranking system makes it easy to identify the
                  most qualified candidates quickly and easily
                  <div id="startElement" className="w-fit">
                    We can do this using 2 ways:
                  </div>
                </div>

                <br />
                <br />
                <div className="flex justify-center ">
                  <Link to="/resume">
                    <button
                      className="md:w-96 h-14 bg-theme-dark hover:border-4 hover:border-theme-dark hover:bg-tran-color hover:text-theme-dark text-white font-bold md:py-2 px-4 ease-in duration-300 md:rounded"
                      id="e1"
                    >
                      USING AN IDEAL RESUME
                    </button>
                  </Link>
                </div>
                {!isMobile && (
                  <Xarrow
                    start="startElement" //can be react ref
                    end="e1" //or an id
                    color="#014a44"
                    curveness="0.7"
                  />
                )}

                <br />

                <br />
                {!isMobile && (
                  <Xarrow
                    start="startElement" //can be react ref
                    end="e2" //or an id
                    color="#014a44"
                    curveness="1.3"
                  />
                )}
                <div className="flex justify-center ">
                  <Link to="/Folder">
                    <button
                      className="md:w-96 h-14 bg-theme-dark hover:border-4 hover:border-theme-dark hover:bg-tran-color hover:text-theme-dark text-white font-bold md:py-2 px-4 ease-in duration-300 md:rounded"
                      id="e2"
                    >
                      BY FILLING REQUIREMENT FORM
                    </button>
                  </Link>
                </div>
              </p>
            </div>
            <div className="lg:flex items-center w-full lg:w-1/2  ">
              <img
                className="lg:block hidden w-full rounded-l-lg"
                src={HomePageGif}
                alt="people discussing on board"
              />
              <img
                className="lg:hidden sm:block hidden w-full h-3/4"
                src={HomePageGif}
                alt="people discussing on board"
              />
              <img
                className="sm:hidden block w-full"
                src={HomePageGif}
                alt="people discussing on board"
              />
            </div>
          </div>

          <br />
          <img src="" alt="" />
        </div>
      </Content>
    );
  }
}

export default Contentpage;
