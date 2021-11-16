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

 *  With the results from this request, inside "content", return
 *  the "name" of the package that has the oldest "date" value
 */

const axios = require("axios");

async function oldestPackageName() {
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
  let oldest = 99999999999999999999999;
  let name = "";

  data.content.map(element => {
    let dateString = element.package.date
      .replace("-", "")
      .replace("-", "")
      .replace("T", "")
      .replace(":", "")
      .replace(":", "")
      .replace(".", "")
      .replace("Z", "");
    let dateNumber = parseInt(dateString);
    if (oldest > dateNumber) {
      oldest = dateNumber;
      name = element.package.name;
    }
  });
 
  return name;
}

oldestPackageName();

module.exports = oldestPackageName();
