module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'hughes' );


app.launch( function( request, response ) {
	response.say( 'Welcome to Hughes Network' ).reprompt( 'What is your name?' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('welcomeUser',
  {
    "slots":{"name":"AMAZON.US_FIRST_NAME"}
	,"utterances":[ 
		"My Name is {John|Matt|Sam|name}",

		]
  },
  function(request,response) {
    var name = request.slot('name');
    response.say("Welcome "+name);
  }
);

module.exports = app;