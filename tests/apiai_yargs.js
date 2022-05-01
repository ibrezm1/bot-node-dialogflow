
// Using Yargs to test api.ai response on console.

const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const sessionId = uuid.v4();
const projectId ='test-dialogflow-ycr9'

const sessionClient = new dialogflow.SessionsClient({
    keyFilename: '../config/test-dialogflow-ycr9-d72b498a2ed1.json'
});
const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );




  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: 'hello',
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };

  sessionClient.detectIntent(request).then(responses =>{
	console.log('Detected intent');
	const result = responses[0].queryResult;
	console.log(`  Query: ${result.queryText}`);
	console.log(`  Response: ${result.fulfillmentText}`);
	if (result.intent) {
	  console.log(`  Intent: ${result.intent.displayName}`);
	} else {
	  console.log('  No intent matched.');
	}
  }).catch((error) => {
    console.log(error); // an error has occured
});



