export const setActiveSong: any = (payload) => {
  return {
    type: "SET_ACTIVE_SONG",
    payload,
  };
};

export const setSongs: any = (payload) => {
  return {
    type: "SET_SONGS",
    payload,
  };
};
