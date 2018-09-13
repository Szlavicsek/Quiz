const Login = (() => {

  const $signInText = document.querySelector('.sign-in-text')
  const $avatarImage = document.querySelector('.avatar-image')
  const $googleSignInButton = document.querySelector('.sign-in-with-google-button')
  const $loginCube = document.querySelector('.login-cube')

  const eventListeners = () => {
    $signInText.addEventListener("click", function() {
      $loginCube.classList.toggle("login-cube-turned")
    })
  }

  const init = () => {
    eventListeners()
  }

  return {
    init
  }

})()

export default Login