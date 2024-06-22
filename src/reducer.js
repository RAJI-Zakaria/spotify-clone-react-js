export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // TODO : remove the token after development
  token:
    "BQC9mFui2tk3n1YAP8gehjl1ls8gCnqfrO2RZZsUr_JwZzZqartNR6i91BIm3JSfo-PsUyLq08SCXNcQazPFFK1wQhcVHTOJij631feQ5CieBWeqjOykh5VefYSaIKgUR6YDuK2TkRO6EzQgywLOZXek13dcTLgBxSO9GYPstpaWF1HcAx2rAa3knZK1IlZeGOw",
};

export const reducer = (state, action) => {
  //for debugging purposes
  console.log(action);

  // Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state, //keep the current state
        user: action.user, //update the user slice
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
