import React, { Component } from 'react';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import ProfileDocumentInputList from './ProfileDocumentInputList';
import NewDocumentInput from './NewDocumentInput';
import DashboardControls from './DashboardControls';
import './styles.css';

class DashboardInput extends Component {

  analyze = () => {
    this.callApi()
      .then(res => this.transformSentimentData(res))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/analyze', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(
        {
          profile_docs:
          [
            {
   		         text: "I am very upset."
   	        },
   	        {
   		        text: "This is disgusting."
   	        }
          ],
          new_doc:
          {
            text: "I am extremely happy."
          },
          comparison_level: "sentence",
          combine_profile_docs: true,
          tone_categories: ["emotion_tone", "languages_tone", "social_tone"]
        }
      ),
    });
    const body = await response.json();
    console.log('BODY:', body);
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  transformSentimentData = (res) => {
    const tones = get(res, ['document', 'tones'], {});
    const avg = get(res, ['document', 'average'], 0);
    if (!isEmpty(tones) && avg) {
      console.log({
        tones,
        avg
      });
    }
  }

  render() {
    return (
      <div className='dashboard-input'>
        <ProfileDocumentInputList />
        <NewDocumentInput />
        <DashboardControls analyze={this.analyze}/>
      </div>
    );
  }
}

export default DashboardInput;
