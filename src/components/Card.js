import React, { Component } from "react";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import LoadingScreen from "react-loading-screen";
import axios from "axios";
import PdfPage from "./pdfPage";
import Avatar from "antd/es/avatar/avatar";
import { setStateAsync } from "../helpers/utils";
import logo from "../assests/logo.png";

const pdfFiles = require.context(
  "../../../server/static/applying",
  false,
  /\.pdf$/
);
const pdfs = pdfFiles.keys().map(pdfFiles);

let counter = 0;

export default class Card extends Component {
  constructor(props) {
    counter += 1;
    console.log("Counter ", counter);
    console.log("Props", props);
    super(props);

    this.state = {
      numPages: null,
      user: [],
      data: [],
      pageNumber: 1,
      rank: "",
      name: "",
      phoneNum: "",
      emailId: "",
      score: "",
      candidateId: "",
      isLoading: true,
      viewPdf: [],
    };

    this.fetchData = this.fetchData.bind(this);
    this.fetchDone = this.fetchDone.bind(this);
    this.clickMe = this.clickMe.bind(this);
    this.goToPrevPage = this.goToPrevPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  componentDidMount() {
    console.log("DATABASE");

    this.fetchDone();
  }

  async fetchDone() {
    axios.get("http://127.0.0.1:5000/start").then(async (response) => {
      if (response.data.msg === "SuccessDone") {
        await this.fetchData();

        this.setState({ isLoading: false });
      }
    });
  }

  async fetchData() {
    try {
      const response = await axios.get("http://127.0.0.1:5000/result");
      const temp = response.data;
      const length = temp.length;
      const viewPdf = [];
      console.log(temp, "TEMP DATA IS HERE");
      console.log(pdfs, typeof pdfs, "pdfsTEMP DATA IS HERE");
      console.log(viewPdf,"bbs")
  
      if (pdfs && pdfs.length > 0) {
        temp.forEach((candidate) => {
          const pdfMatch = pdfs.find((pdf) => {
            const candidateId = candidate.candidateId.toString();
            return pdf.includes(candidateId);
          });
          if (pdfMatch) {
            viewPdf.push(candidate.candidateId);
          }
        });
      }
  
      await setStateAsync(this, { data: temp });
      await setStateAsync(this, { numPages: length });
      await setStateAsync(this, { viewPdf });
  
      this.clickMe(this.state.pageNumber);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  

  goToPrevPage = () => {
    this.setState({
      pageNumber:
        this.state.pageNumber - 1 <= 1 ? 1 : this.state.pageNumber - 1,
    });
    if (this.state.pageNumber === 1) {
      console.log("invalid Click");
    } else {
      this.clickMe(this.state.pageNumber - 1);
    }
  };

  goToNextPage = () => {
    this.setState({
      pageNumber:
        this.state.pageNumber + 1 >= this.state.numPages
          ? this.state.numPages
          : this.state.pageNumber + 1,
    });
    console.log("candidateId", this.state.candidateId);
    if (this.state.pageNumber === this.state.numPages) {
      console.log("invalid Click");
    } else {
      this.clickMe(this.state.pageNumber + 1);
    }
  };

  clickMe = (pageNow) => {
    this.setState({ rank: pageNow });

    const { data, viewPdf } = this.state;
    const selectedCandidate = data[pageNow - 1];

    this.setState({
      name: selectedCandidate.name,
      phoneNum: selectedCandidate.phone,
      emailId: selectedCandidate.email,
      candidateId: selectedCandidate.candidateId,
      score: selectedCandidate.scores * 100,
    });

    const pdfFile = pdfs[pageNow - 1];
    this.setState({ pdfFile });

    if (viewPdf.includes(selectedCandidate.candidateId)) {
      // Perform any action you need with the matched candidate ID
      console.log("Matched candidate ID:", selectedCandidate.candidateId);
    }
  };

  render() {
    return (
      <div className="App h-screen bg-theme-light bg-[url('/src/assests/how-to-hire-the-right-person_nyt-jumbo-v2.gif')] bg-blend-overlay bg-no-repeat bg-cover  ">
        {this.state.isLoading ? (
          <LoadingScreen
            loading={true}
            bgColor="#f1f1f1"
            spinnerColor="#9ee5f8"
            textColor="#676767"
            text="Loading..."
            logoSrc={logo}
          />
        ) : (
          <div className="">
            <div className="flex justify-center text-3xl">Ideal Candidate</div>
            <br />
            <div className="p-2 pl-[72vh]">
              <div className="flex">
                <div className="pl-2 pt-6 flex  h-[13vh] w-[55vh] rounded-tl-lg  border-l-4  border-t-4 border-gray-500 ">
                  <div className="flex text-2xl"> Rank:{this.state.rank}</div>
                </div>
                <div className="h-[13vh] w-[13vh]  border-b-4 border-l-4 rounded-bl-lg  border-gray-500 ">
                  <div className="border-b-4 border-gray-500 rotate-45 p-7 w-[17vh] "></div>
                </div>
              </div>
              <div className="h-[58vh] w-[68vh] rounded-b-lg border-l-4 border-r-4 border-b-4 border-gray-500  shadow-[rgba(0,0,_0,_0.2)_0px_60px_40px-7px]">
                <div className="flex">
                  <div className="">
                    <br />
                    <div className="flex text-xl pl-2">
                      Name:{this.state.name}
                    </div>
                    <br />
                    <br />
                    <div className="flex text-xl pl-2">
                      Phone No:{this.state.phoneNum}
                    </div>
                    <br />
                    <br />
                    <div className="flex text-lg pl-2 ">Email Id:</div>
                    <div className="flex text-lg pl-2 ">
                      {this.state.emailId}
                    </div>
                    <br />
                    <br />
                    <div className="flex pt-4 pl-[26vh]">
                      {this.state.pdfFile && (
                        <PdfPage pdfFile={this.state.pdfFile} />
                      )}
                    </div>
                  </div>
                  <div className="">
                    <Avatar
                      className="flex w-[20vh] h-[28vh] p-2"
                      shape="square"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fsZLHy95Sa4xg3Qs-qj-4jf9iEaXG3e_j7afEMVgPw&usqp=CAU&ec=48600113"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center p-2 ">
              <DoubleLeftOutlined
                className="text-4xl"
                onClick={this.goToPrevPage}
              />
              <div className="pl-6 text-4xl">{this.state.pageNumber}</div>
              <DoubleRightOutlined
                className="text-4xl pl-6"
                onClick={this.goToNextPage}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
