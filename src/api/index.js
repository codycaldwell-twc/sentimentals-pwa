export const analyze = ({
  profile_docs,
  new_doc,
  tone_categories,
}) => {
  return new Promise((resolve, reject) => {
    callApi({ profile_docs, new_doc, tone_categories})
      .then(res => resolve(res.json()))
      .catch(err => reject(err))
  });
}

export const callApi = ({ profile_docs, new_doc, tone_categories }) =>
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
        tone_categories: tone_categories.map(category => category.split(' ').join('_').toLowerCase())
      }
    ),
  });
