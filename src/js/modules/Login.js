const Login = (() => {
  const $signInText = document.querySelector('.sign-in-text')
  const $avatarImage = document.querySelector('.avatar-image')
  const $googleSignInButton = document.querySelector('.sign-in-with-google-button')
  const $loginCube = document.querySelector('.login-cube')

  const state = {
    signedIn: false
  }

  const eventListeners = () => {
    $signInText.addEventListener("click", function(e) {
      if (state.signedIn) {
        window.signOut();
      } else {
        $loginCube.classList.add("login-cube-turned")
        console.log(e.target);
      }
    })
  }

  const init = () => {
    window.onSuccess = function(googleUser) {
      state.signedIn = true;

      const profile = googleUser.getBasicProfile();

      $signInText.innerText = "Sign out";
      $avatarImage.src = profile.getImageUrl()
      $loginCube.classList.remove("login-cube-turned")

      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    window.onFailure = function(error) {
      console.log(error);
    }

    window.signOut = function() {
      state.signedIn = false;

      $signInText.innerText = "Sign in";
      $avatarImage.src = "src/assets/user-avatar-default.jpg"

      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        console.log('User signed out.');
      });
    }

    window.renderButton = function() {
      gapi.signin2.render('google-signin-button', {
        'scope': 'profile email',
        'width': 200,
        'height': 45,
        'longtitle': true,
        'theme': 'light',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }

    eventListeners()
  }

  return {
    init
  }
})()

export default Login