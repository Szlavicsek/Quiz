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
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}