import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import Highlighter from 'react-highlight-words';
import AnalysisGraph from './AnalysisGraph';
import EmptyResult from './EmptyResult';
import './styles.css';

class DashboardResults extends Component {
  getBackgroundColor = (sentence) => {
    const colorMap = {
      anger: '#DB3650',
      disgust: '#00A594',
      fear: '#67338B',
      joy: '#FDD448',
      sadness: '#007AAB',
      analytical: '#E05A36',
      confident: '#DA3560',
      tentative: '#6C63A5',
      openness_big5: '#E8863B',
      conscientiousness_big5: '#78338B',
      extraversion_big5: '#00ABE9',
      agreeableness_big5: '#98216D',
      emotional_range_big5: 'pink'
    };
    const tones = get(sentence, ['tones'], {});
    let toneIntensity = -1;
    let tone = 'anger';
    Object.keys(tones).forEach(key => {
      if (Math.abs(tones[key]) > toneIntensity) {
        toneIntensity = Math.abs(tones[key]);
        tone = key;
      }
    });
    return colorMap[tone];
  }

  render() {
    const {
      analysis,
      sentences
    } = this.props;
    return (
      !isEmpty(analysis) ?
      <div className='dashboard-results'>
        <div className='results-container'>
          <div className='results-container-header'>
            <div className='results-container-title'>Document Level Analysis</div>
          </div>
          <div className='results'>
            <div id='analysis-graph-container'>
              <AnalysisGraph
                height={400}
                width={600}
                analysis={analysis}
              />
          </div>
          </div>
        </div>
        <br />
        <div className='results-container'>
          <div className='results-container-header'>
            <div className='results-container-title'>Sentence Level Analysis</div>
          </div>
          <div className='sentence-results'>
            {
              sentences.map((sentence, i) => (
                <Highlighter
                  key={i}
                  highlightClassName={this.getBackgroundColor(sentence)}
                  searchWords={[sentence.text]}
                  autoEscape={true}
                  highlightStyle={{
                    backgroundColor: this.getBackgroundColor(sentence),
                    color: 'white',
                  }}
                  textToHighlight={sentence.text}
                />
              ))
            }
          </div>
        </div>
      </div>
      : <EmptyResult />
    );
  }
}

DashboardResults.propTypes = {
  analysis: PropTypes.object
};

export default DashboardResults;
