import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
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
              <Collapse>
                <Collapse.Panel header={`Example #${i}`}>
                  <textarea
                    className='document-input-area'
                    value={value}
                    onChange={(e) => this.handleChange(e, i)}
                  />
                </Collapse.Panel>
              </Collapse>
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
