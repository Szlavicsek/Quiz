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
GeneralSettings.init();


async function post(data) {
  const resp = await fetch("../json/users.json", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
  const res = resp.json();
  return res
}

const userpoints = {
  id: 123456789,
  points: 67576
}

post(userpoints)
  .then(res => console.log(res))
  .catch(err => console.log(err))

console.log("test1");