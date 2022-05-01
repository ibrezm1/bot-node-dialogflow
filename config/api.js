//var apiai = require('apiai');

// read the api.ai docs : https://api.ai/docs/


const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const sessionId = uuid.v4();
const projectId ='test-dialogflow-ycr9'

const sessionClient = new dialogflow.SessionsClient({
    keyFilename: './config/test-dialogflow-ycr9-d72b498a2ed1.json'
});
const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );


// Function which returns speech from api.ai
var getRes = function(query) {
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: query,
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };
const responseFromAPI = sessionClient.detectIntent(request)
return responseFromAPI;
};

// test the command :
//getRes('hello').then(function(res){console.log(res[0].queryResult.fulfillmentText)});

module.exports = {getRes}