import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { pdfData } from './pdfData';
import { htmlData } from './htmlData';
import { Document, Page } from 'react-pdf';

class App extends Component {
  constructor() {
    super();
  }

  view(data, type) {
    var objbuilder = `<iframe width="100%" height="100%" src="data:${type};base64,${data}" type="text/html" class="internal">
        <embed src="text/html;base64,${data}" type="${type}" />
    </iframe>
    `;

    var win = window.open("","_blank","titlebar=yes");
        win.document.title = "My Title";
        win.document.write('<html><body>');
        win.document.write(objbuilder);
        win.document.write('</body></html>');
  }

  render() {
    return (
      <div>
        <h1>View PDF</h1>
        <button id="view-pdf" onClick={() => this.view(pdfData, 'application/pdf')}>View PDF</button>
        <hr />
        <button id="view-html" onClick={() => this.view(htmlData, 'text/html')}>View HTML</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
