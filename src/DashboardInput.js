import React from 'react';
import PropTypes from 'prop-types';
import ProfileDocumentInputList from './ProfileDocumentInputList';
import NewDocumentInput from './NewDocumentInput';
import DashboardControls from './DashboardControls';
import './styles.css';

const DashboardInput = ({
  profiles,
  newDocument,
  addProfileDocument,
  updateNewDocument,
  updateProfileDocument,
}) => (
  <div className='dashboard-input'>
    <ProfileDocumentInputList
      profiles={profiles}
      addProfileDocument={addProfileDocument}
      updateProfileDocument={updateProfileDocument}
    />
    <NewDocumentInput
      newDocument={newDocument}
      updateNewDocument={updateNewDocument}
    />
    <DashboardControls />
  </div>
);

DashboardInput.propTypes = {
  profiles: PropTypes.array,
  newDocument: PropTypes.string,
  addProfileDocument: PropTypes.func,
  updateNewDocument: PropTypes.func,
  updateProfileDocument: PropTypes.func,
};

export default DashboardInput;
