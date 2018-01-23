export const analyze = ({
  profile_docs,
  new_doc,
  comparison_level,
}) => {
  return new Promise((resolve, reject) => {
    callApi({ profile_docs, new_doc, comparison_level })
      .then(res => resolve(res.json()))
      .catch(err => reject(err))
  });
}

export const callApi = ({ profile_docs, new_doc, comparison_level }) =>
  fetch('/api/analyze', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(
      {
        profile_docs,
        new_doc,
        comparison_level,
        combine_profile_docs: true,
        tone_categories: ["emotion_tone", "languages_tone", "social_tone"]
      }
    ),
  });
