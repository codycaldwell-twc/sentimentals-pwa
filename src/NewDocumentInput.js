import React, { Component } from 'react';
import './styles.css';

class NewDocumentInput extends Component {
  render() {
    return (
      <div className='new-document-container'>
        <div>New Text</div>
        <textarea
          className="dashboard-text"
          rows="15"
          cols="75"
          placeholder="This is the placeholder text."
          ref={node => this.textArea = node}
          value={this.state ? this.state.response : undefined}
        />
      </div>
    );
  }
}

export default NewDocumentInput;
