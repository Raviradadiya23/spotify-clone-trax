const initialState = {
  activeSongs: [],
  activeSong: null,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_SONG":
      return {
        ...state,
        activeSong: action.payload,
      };
    case "SET_SONGS":
      return {
        ...state,
        activeSongs: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
