import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import './styles.css';

class ProfileDocumentInputList extends Component {

  handleChange = (e, i) => {
    const { updateProfileDocument } = this.props;
    updateProfileDocument({ value: e.target.value, index: i });
  }

  render() {
    const { profiles, addProfileDocument } = this.props;
    return (
      <div className='document-container'>
        <div className='document-container-header'>
          <div className='document-container-title'>Profile Text</div>
          <div className="icon icon-plus" onClick={addProfileDocument}></div>
        </div>
        <div className='document-container-input profile-container'>
          {
            profiles.map((value, i) => (
              <Panel key={`profile_document_${i}`} id="collapsible-panel-example-3">
                <Panel.Heading>
                  <Panel.Title toggle>
                    {`Example #${i}`}
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                  <Panel.Body>
                    <textarea
                      className='document-input-area'
                      value={value}
                      onChange={(e) => this.handleChange(e, i)}
                    >
                    </textarea>
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


ProfileDocumentInputList.propTypes = {
  profiles: PropTypes.array,
  addProfileDocument: PropTypes.func,
  updateProfileDocument: PropTypes.func,
};

export default ProfileDocumentInputList;
