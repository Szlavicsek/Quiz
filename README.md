# Quizzit app

A quiz game project using the [Open Trivia API](https://opentdb.com/api_config.php)

## Getting Started

To get started, clone the repo to your local machine and install the dependencies as listed below. Please note that for the Google login api to work properly, you will also need:
* to configure the game as a new project on Google (you can do so [here](https://developers.google.com/identity/sign-in/web/sign-in))
* a development url to register within the Google dev console for your project (which is other than your local host's url, else it won't work either)

After registering, replace the google client id in the "google-signin-client_id" meta tag with yours.

For testing purposes, registering a new project is not mandatory, skipping the process above will only affect the corresponding functionality of the app.


### Installing prerequisites

The project files are bundled with webpack. To install it, run the following code in your terminal:

```
npm install --save-dev webpack-cli
```

To manage audio files properly on all devices, you will also need the [howlerjs](https://github.com/goldfire/howler.js) library:

```
npm install howler
```

Once the dependencies are installed, you can open the project with live server and run `npm run dev` which will watch and bundle the files automatically during development.

To build the production version, you can run `npm run build`.

## Authors

Pataki Péter


## License

This project is licensed under the MIT License.
