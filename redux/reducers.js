import { UPDATE_TEXT, FILTER_BY_NAME } from "./actions";
const data = require("../data.json");

const initialState = {
  text: []
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_BY_NAME:
      if (action.payload.length == 0) {
        return { ...state, text: [] };
      } else {
        return  {
          ...state,
          text: data.users.filter(user=> (
            (user.profile.first_name.toLowerCase().startsWith(action.payload.toLowerCase()))
            ||
            (user.profile.last_name.toLowerCase().startsWith(action.payload.toLowerCase()))
            
          )).sort(),
        };
      }
    default:
      return state;
  }
}

export default userReducer;
