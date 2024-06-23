export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // TODO : remove the token after development
  token: null,
  // "BQAuwmqn3JlC0ZMA0dqZ7rHm9-m9JAmePW9CUvTtvs_fIfbMBOIJh1w57-Gq10jHgsE8q9IOZczvy_R7OXoK3KXhGrZwBwtMppDXXi2R-ibHkP2z4gQo2VPn_RSLxIM6qrUiw_19W27m5yMQF-4EWkbquy0sQAkyo17fAf1n8pepkNF6DCeJYbvFfykgDEG3uNY",
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
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};
