const axios = require('axios');
const crypto = require('crypto');

const API_URI = 'https://api.github.com/users/Baldrani/gists';

exports.sourceNodes = async ({actions}) => {
  const {createNode} = actions;
  const result = await axios.get(API_URI);
  for (const gist of result.data) {
    await createNode({
      children: [],
      id: gist.id,
      description: gist.description,
      files: gist.files,
      parent: null,
      internal: {
        type: 'Gist',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(gist))
          .digest(`hex`),
      },
    });
  }
};