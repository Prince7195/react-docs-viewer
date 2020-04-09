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

    const win = window.open("","_blank","titlebar=yes,width = 800, height = 600");
    if (win) {
      const document = `<html>
                    <head>
                      <title>${name}</title>
                      <link href="core/css/bootstrap.min.css" rel="stylesheet">
                      <link href="core/css/bell.css" rel="stylesheet">
                      <link href="core/css/global-connector.css" rel="stylesheet">
                    </head>
                    <body>
                      <div style="background-color:#fff">
                        <br />
                        <a class="btn btn-secondary floatR"
                          download="${name}"
                          href="data:application/octet-stream;base64,${encodeURIComponent(
                            data.content
                          )}"
                        >Download</a>
                        <br />
                        ${objbuilder}
                      </div>
                    </body>
                  </html>`;
      win.document.write(document);
    }
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
