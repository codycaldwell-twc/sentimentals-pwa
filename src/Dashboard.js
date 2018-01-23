import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardInput from './DashboardInput';
import DashboardResults from './DashboardResults';
import {
  addProfileDocument,
  updateNewDocument,
  updateProfileDocument,
} from './actions';
import {
  profilesSelector,
  newDocumentSelector,
  analysisSelector,
} from './selectors';
import './styles.css';

const Dashboard = ({
  profiles,
  newDocument,
  analysis,
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
      />
      <DashboardResults analysis={analysis} />
    </div>
  )
}

Dashboard.propTypes = {
  profiles: PropTypes.array,
  newDocument: PropTypes.string,
  analysis: PropTypes.object,
  addProfileDocument: PropTypes.func,
  updateNewDocument: PropTypes.func,
  updateProfileDocument: PropTypes.func,
};

const mapStateToProps = (state) => ({
  profiles: profilesSelector(state),
  newDocument: newDocumentSelector(state),
  analysis: analysisSelector(state),
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addProfileDocument,
  updateNewDocument,
  updateProfileDocument,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
