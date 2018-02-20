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
  sentences,
  toneCategories,
  analyzeDisabled,
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
      sentences={sentences}
    />
    <DashboardControls toneCategories={toneCategories} analyzeDisabled={analyzeDisabled} />
  </div>
);

DashboardInput.propTypes = {
  profiles: PropTypes.array,
  newDocument: PropTypes.string,
  addProfileDocument: PropTypes.func,
  updateNewDocument: PropTypes.func,
  updateProfileDocument: PropTypes.func,
  sentences: PropTypes.array,
  toneCategories: PropTypes.array,
  analyzeDisabled: PropTypes.bool,
};

export default DashboardInput;
