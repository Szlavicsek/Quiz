const Login = (() => {
  const $signInText = document.querySelector('.sign-in-text')
  const $avatarImage = document.querySelector('.avatar-image')
  const $googleSignInButton = document.querySelector('.sign-in-with-google-button')
  const $loginCube = document.querySelector('.login-cube')

  const onSuccess = (googleUser) => {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }

  const onFailure = (error) => {
    console.log(error);
  }

  const renderButton = () => {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }

  const eventListeners = () => {
    $signInText.addEventListener("click", function() {
      console.log("hello");
      $loginCube.classList.toggle("login-cube-turned")
    })
  }

  const init = () => {
    eventListeners()
  }
  return {
    onSuccess,
    onFailure,
    renderButton,
    init
  }
})()

export default Login