// Enter an API key from the Google API Console:
//   https://console.developers.google.com/apis/credentials
var apiKey = 'AIzaSyB1C2O9hFUSBwIGPBC_tdx9tHjRkzto3R4';
// Enter a client ID for a web application from the Google API Console:
//   https://console.developers.google.com/apis/credentials?project=_
// In your API Console project, add a JavaScript origin that corresponds
//   to the domain where you will be running the script.
var clientId = '760782681355-gdjhr4frp8o1d5tm4k7oah1v2dl0tgol.apps.googleusercontent.com';
// Enter the API Discovery Docs that describes the APIs you want to
// access. In this example, we are accessing the People API, so we load
// Discovery Doc found here: https://developers.google.com/people/api/rest/
var discoveryDocs = ["https://people.googleapis.com/$discovery/rest?version=v1"];
// Enter one or more authorization scopes. Refer to the documentation for
// the API or https://developers.google.com/people/v1/how-tos/authorizing
// for details.
var scopes = 'profile';

function handleClientLoad() {
    // Load the API client and auth2 library
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: apiKey,
        discoveryDocs: discoveryDocs,
        clientId: clientId,
        scope: scopes
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        $('.google-button').click(function () {
            if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
                gapi.auth2.getAuthInstance().signOut();
            } else {
                gapi.auth2.getAuthInstance().signIn();
            }
        });
    });
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        $('.google-button .google-button-text').text('Sign up with Google');
        makeApiCall();
    } else {
        $('.google-button .google-button-text').text('Sign in with Google');
    }
}

// Load the API and make an API call.  Display the results on the screen.
function makeApiCall() {
    gapi.client.people.people.get({
        'resourceName': 'people/me',
        'requestMask.includeField': 'person.names'
    }).then(function (resp) {
        // model hide
        modelObjHide('loginModel');
        console.log(resp.result);
    });
}