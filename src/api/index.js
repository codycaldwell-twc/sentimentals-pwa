export const analyze = () => {
  return new Promise((resolve, reject) => {
    callApi()
      .then(res => resolve(res.json()))
      .catch(err => reject(err))
  });
}

export const callApi = () =>
  fetch('/api/analyze', {
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
