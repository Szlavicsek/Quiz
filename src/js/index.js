import MainMenu from "./modules/MainMenu.js"
import GeneralSettings from "./modules/GeneralSettings.js"
import GameSettings from "./modules/GameSettings.js"
import QuizLogic from "./modules/QuizLogic.js"
import Login from "./modules/Login.js"

// GeneralSettings.init();
MainMenu.init();
GameSettings.init();
QuizLogic.init();
Login.init();

function onSignIn(googleUser) {
  console.log("called");
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  const imgUrl = profile.getImageUrl();
  console.log("Email: " + profile.getEmail());
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
};

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log('User signed out.');
  });
};