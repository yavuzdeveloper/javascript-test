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

 * With the results from this request, inside "content", 
 * list every maintainer and each package name that they maintain,
 * return an array with the following shape:
[
    ...
    {
        username: "a-username",
        packageNames: ["a-package-name", "another-package"]
    }
    ...
]
 * NOTE: the parent array and each "packageNames" array should 
 * be in alphabetical order.
 */

module.exports = async function organiseMaintainers() {
  // TODO

  return maintainers;
};

const axios = require("axios");

async function makePostRequest() {
  let payload = {
    url: "https://api.npms.io/v2/search/suggestions?q=react",
    method: "GET",
    return_payload: true,
  };

  let res = await axios.post(
    "http://ambush-api.inyourarea.co.uk/ambush/intercept",
    payload
  );

  let data = res.data;
//   console.log("DATA-index3:", data.content);

  let contents = data.content;
  contents.map(content => {
    // console.log("content:", content);
    // console.log("content.package:", content.package);
  });
}

makePostRequest();
