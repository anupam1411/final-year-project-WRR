import { Modal } from "antd";
import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PdfViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    open: false,
    rank: 1, // Default rank value
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  changePage = (offset) => {
    this.setState((prevState) => ({
      pageNumber: prevState.pageNumber + offset,
    }));
  };

  previousPage = () => {
    this.changePage(-1);
  };

  nextPage = () => {
    this.changePage(1);
  };

  handleRankChange = (event) => {
    const rank = parseInt(event.target.value);
    this.setState({ rank });
  };

  render() {
    const { numPages, pageNumber, rank } = this.state;

    return (
      <div className="md:w-full">
        <button
          className="w-full md:w-36 md:h-14 bg-theme-dark hover:border-4 border-theme-light hover:border-theme-dark hover:bg-tran-color hover:text-theme-dark text-white font-bold md:py-2 px-4 ease-in duration-300 md:rounded hover:border-"
          id="e1"
          onClick={() => this.setState({ open: true })}
        >
          View Pdf
        </button>
        <Modal
          centered
          open={this.state.open}
          onOk={() => this.setState({ open: false })}
          onCancel={() => this.setState({ open: false })}
          width={800}
          className="md:w-full"
          footer={null} 
        >
          <div className="pdf-toolbar">
            <button
              disabled={pageNumber <= 1}
              onClick={this.previousPage}
              className="w-full md:w-auto"
            >
              Previous
            </button>
            <input
              type="number"
              min="1"
              max={numPages}
              value={rank}
              onChange={this.handleRankChange}
              className="w-full md:w-auto"
            />
            <button
              disabled={pageNumber >= numPages}
              onClick={this.nextPage}
              className="w-full md:w-auto"
            >
              Next
            </button>
          </div>
          <div className="pdf-container">
            <Document
              file={this.props.pdfFile}
              onLoadSuccess={this.onDocumentLoadSuccess}
              options={{
                workerSrc:
                  "//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.worker.js",
              }}
            >
              <Page pageNumber={rank} renderTextLayer={false} renderAnnotationLayer={false}/>
            </Document>
            <span>
              Page {pageNumber} of {numPages}
            </span>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PdfViewer;
