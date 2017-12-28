import React, { Component } from 'react';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import './styles.css';

class DashboardInputList extends Component {

  analyze = () => {
    this.callApi()
      .then(res => this.transformSentimentData(res))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/analyze', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ text: this.textArea.value }),
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  transformSentimentData = (res) => {
    const data = get(res, ['document_tone', 'tone_categories'], []);
    if (!isEmpty(data)) {
      const transformed = data.map(datum => {
        return {
          category_name: datum.category_name,
          tones: datum.tones.map(tone => ({
            name: tone.tone_name,
            score: tone.score,
          }))
        }
      });
      console.log(transformed);
    }
  }

  render() {
    return (
      <div>
        <textarea
          className="dashboard-text"
          rows="15"
          cols="50"
          placeholder="This is the placeholder text."
          ref={node => this.textArea = node}
          value={this.state ? this.state.response : undefined}
        />
        <input type='submit' onClick={this.analyze}/>
      </div>
    );
  }
}

export default DashboardInputList;
