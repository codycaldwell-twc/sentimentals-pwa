import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardInput from './DashboardInput';
import {
  addProfileDocument,
  updateNewDocument,
  updateProfileDocument,
} from './actions';
import {
  profilesSelector,
  newDocumentSelector,
  analysisSelector,
  sentencesSelector,
} from './selectors';
import './styles.css';

const Dashboard = ({
  profiles,
  newDocument,
  analysis,
  sentences,
  addProfileDocument,
  updateNewDocument,
  updateProfileDocument,
}) => {
  return (
    <div className="dashboard">
      <DashboardInput
        profiles={profiles}
        newDocument={newDocument}
        addProfileDocument={addProfileDocument}
        updateNewDocument={updateNewDocument}
        updateProfileDocument={updateProfileDocument}
        sentences={sentences}
      />
    </div>
  )
}

Dashboard.propTypes = {
  profiles: PropTypes.array,
  newDocument: PropTypes.string,
  analysis: PropTypes.object,
  sentences: PropTypes.object,
  addProfileDocument: PropTypes.func,
  updateNewDocument: PropTypes.func,
  updateProfileDocument: PropTypes.func,
};

const mapStateToProps = (state) => ({
  profiles: profilesSelector(state),
  newDocument: newDocumentSelector(state),
  analysis: analysisSelector(state),
  sentences: sentencesSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addProfileDocument,
  updateNewDocument,
  updateProfileDocument,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
