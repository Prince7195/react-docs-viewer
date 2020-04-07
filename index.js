import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { data } from './data';
import { Document, Page } from 'react-pdf';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>View PDF</h1>
        <div id="pdf-viewer"></div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
