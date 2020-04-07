import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { response } from './data';
import { Document, Page } from 'react-pdf';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numPages: null,
      pageNumber: 1,
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  pdf() {
    const byteCharacters = atob(response);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], {type: 'application/pdf'});
  }

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <h1>View PDF</h1>
        <Document
          file={this.pdf()}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
