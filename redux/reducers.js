import { UPDATE_TEXT, FILTER_BY_NAME } from "./actions";
//const data = require("../data.json");
let data;

async function JSONResponse () {

  let promise = new Promise((resolve, reject) => {
    var XMLHttpRequest = require('xhr2');
    let req = new XMLHttpRequest();
    let currentData = "";
    req.open("GET", "https://api.jsonbin.io/v3/b/619fe92201558c731cc8d669/latest", true);
    req.setRequestHeader("X-Master-Key", "$2b$10$uhR.5vVjjd1Oxt5/VemqBemLTV2utVcdwvRBW.9NuByKPccbG67Oa");
    req.send();
    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        currentData = JSON.parse(req.responseText)
        resolve(currentData.record)
        reject("");
      }
    }
  })
  data = await promise;
}

JSONResponse();


/*
function JSONResponse () {
  var XMLHttpRequest = require('xhr2');
  let req = new XMLHttpRequest();
  let currentData = "";
  req.open("GET", "https://api.jsonbin.io/v3/b/619fe92201558c731cc8d669/latest", true);
  req.setRequestHeader("X-Master-Key", "$2b$10$uhR.5vVjjd1Oxt5/VemqBemLTV2utVcdwvRBW.9NuByKPccbG67Oa");
  req.send();
  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      currentData = JSON.parse(req.responseText)
      console.log("IM HEREEEE")
      data = currentData.record;
      console.log(data)
    }
  }
}

JSONResponse();
*/

const initialState = {
  text: []
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_BY_NAME:
      if (action.payload.length == 0) {
        return { ...state, text: [] };
      } else {
        return {
          ...state,
          text: data.users.filter((user) =>
            user.profile.first_name
              .toLowerCase()
              .startsWith(action.payload.toLowerCase())
          )
        };
      }
    default:
      return state;
  }
}

export default userReducer;
