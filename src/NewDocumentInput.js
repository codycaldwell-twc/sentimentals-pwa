import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './styles.css';

class NewDocumentInput extends Component {
  render() {
    return (
      <div className='document-container'>
        <div className='document-container-header'>
          <div className='document-container-title'>New Text</div>
        </div>
        <div className='document-container-input' style={{overflowY:'scroll', maxHeight:'400px'}}>
          <textarea className='document-input-area'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid. Nihil anim keffiyeh
            helvetica, craft beer labore wes anderson cred nesciunt sapiente
            ea proident.
          </textarea>
        </div>
      </div>
    );
  }
}

export default NewDocumentInput;
