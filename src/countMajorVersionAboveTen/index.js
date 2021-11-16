/**
 * Make the following POST request with either axios or node-fetch:

POST url: http://ambush-api.inyourarea.co.uk/ambush/intercept
BODY: {
    "url": "https://api.npms.io/v2/search/suggestions?q=react",
    "method": "GET",
    "return_payload": true
}

 *******

The results should have this structure:
{
    "status": 200.0,
    "location": [
      ...
    ],
    "from": "CACHE",
    "content": [
      ...
    ]
}

 ******

 *  With the results from this request, inside "content", count
 *  the number of packages that have a MAJOR semver version 
 *  greater than 10.x.x
 */

// const { default: axios } = require("axios");

const axios = require("axios");

async function countMajorVersionsAbove10() {
  let payload = {
    url: "https://api.npms.io/v2/search/suggestions?q=react",
    method: "GET",
    return_payload: true,
  };
  let res = await axios.post(
    " http://ambush-api.inyourarea.co.uk/ambush/intercept",
    payload
  );
  let contents = res.data.content;
  let versions = [];
  let count = 0;
  contents.map(content => {
    versions.push(parseInt(content.package.version));
  });

  versions.map(version => {
    if (version > 10) {
      count = count + 1;
    }
  });

  return count;
}

countMajorVersionsAbove10();

module.exports = countMajorVersionsAbove10();
