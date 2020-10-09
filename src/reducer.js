export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  //   make hte token value null, after development is done.
  token: null,
};

//  reducer listen to actions.
const reducer = (state, action) => {
  console.log("my action", action);

  // action contains -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state, // keep whatever in the current state.
        user: action.user,
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

export default reducer;
