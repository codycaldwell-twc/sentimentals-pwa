import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import range from 'lodash/range';
import './styles.css';

const ProfileDocumentInputList = ({ profiles, addProfileDocument }) =>  (
  <div className='document-container'>
    <div className='document-container-header'>
      <div className='document-container-title'>Profile Text</div>
      <div className="icon icon-plus" onClick={addProfileDocument}></div>
    </div>
    <div className='document-container-input' style={{overflowY:'scroll', height:'400px'}}>
      {
        range(10).map(data => (
          <Panel key={data} id="collapsible-panel-example-3">
            <Panel.Heading>
              <Panel.Title toggle>
                {`Profile Example #${data}`}
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <textarea className='document-input-area'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident.
                </textarea>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        ))
      }
    </div>
  </div>
);


ProfileDocumentInputList.propTypes = {
  profiles: PropTypes.array,
  addProfileDocument: PropTypes.func,
};

export default ProfileDocumentInputList;
