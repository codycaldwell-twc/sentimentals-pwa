import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './styles.css';

class ProfileDocumentInputList extends Component {
  render() {
    return (
      <div className='profile-document-container'>
        <div>Profile Text</div>
        <div style={{overflowY:'scroll', height:'400px'}}>
          {
            [1,2,3,4,5,6,7].map(data => (
              <Panel key={data} id="collapsible-panel-example-3">
                <Panel.Heading>
                  <Panel.Title toggle>
                    Title that functions as a collapse toggle
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                  <Panel.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                    ea proident.
                  </Panel.Body>
                </Panel.Collapse>
              </Panel>
            ))
          }
        </div>
      </div>
    );
  }
}

export default ProfileDocumentInputList;
