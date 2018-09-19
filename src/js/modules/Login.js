const Login = (() => {
  const $signInText = document.querySelector('.sign-in-text')
  const $avatarImage = document.querySelector('.avatar-image')
  const $googleSignInButton = document.querySelector('.sign-in-with-google-button')
  const $loginCube = document.querySelector('.login-cube')

  const state = {
    loginCubeTurned: false,
    currentlySigningIn: false,
    signedIn: false
  }

  const eventListeners = () => {
    $signInText.addEventListener("click", function(e) {
      if (state.signedIn) {
        window.signOut();
      } else {
        $loginCube.classList.add("login-cube-turned");
        state.loginCubeTurned = true;
        setTimeout(function() {
          if (!state.currentlySigningIn && state.loginCubeTurned) {
            $loginCube.classList.remove("login-cube-turned");
          }
        }, 5000)
      }
    });

    window.addEventListener("click", function(e) {
      if (!e.target.closest(".login-cube") && state.loginCubeTurned) {
        $loginCube.classList.remove("login-cube-turned");
        state.loginCubeTurned = false;
      } else if (e.target.closest(".abcRioButtonContentWrapper") && state.loginCubeTurned) {
        state.currentlySigningIn = true;
      }
    })
  }

  const init = () => {
    window.onSuccess = function(googleUser) {
      state.signedIn = true;
      state.currentlySigningIn = false;

      const profile = googleUser.getBasicProfile();

      $signInText.innerText = "Sign out";
      $avatarImage.src = profile.getImageUrl();
      $loginCube.classList.remove("login-cube-turned");

      console.log('ID: ' + profile.getId());
    }

    window.onFailure = function(error) {
      console.log(error);
    }

    window.signOut = function() {
      state.signedIn = false;

      $signInText.innerText = "Sign in";
      $avatarImage.src = "src/assets/user-avatar-default.jpg";

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

    eventListeners();
  }

  return {
    init
  }
})()

export default Login