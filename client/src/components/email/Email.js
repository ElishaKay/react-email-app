import React, { Component } from 'react';
import EmailEditor from 'react-email-editor';
import { render } from 'react-dom';

class Email extends Component {
  constructor( props ){
    super(props);
    this.exportHtml = this.exportHtml.bind(this);

    console.log('this in constructor: ',this)
  }

  componentWillMount() {
    //
  }

  exportHtml() {
    this.editor.exportHtml(data => {
      const { design, html } = data
      console.log('exportHtml', html)
    })
  }

  render() {
    return <div>
      <h1>react-email-editor Demo</h1>

      <div>
        <button onClick={this.exportHtml}>Export HTML</button>
      </div>

      <EmailEditor
        ref={editor => this.editor = editor}
      />
    </div>
  }
}

export default Email;
