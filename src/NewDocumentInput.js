import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './styles.css';

class NewDocumentInput extends Component {

  handleChange = (event) => {
    const { updateNewDocument } = this.props;
    updateNewDocument(event.target.value);
  }

  render() {
    const { newDocument } = this.props;

    return (
      <div className='document-container'>
        <div className='document-container-header'>
          <div className='document-container-title'>New Text</div>
        </div>
        <div className='document-container-input' style={{overflowY:'scroll', maxHeight:'400px'}}>
          <textarea
            className='document-input-area'
            value={newDocument}
            onChange={this.handleChange}
          >
          </textarea>
        </div>
      </div>
    );
  }
}

export default NewDocumentInput;
