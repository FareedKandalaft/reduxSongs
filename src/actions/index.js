// Action Creator

// Note use of Named Export  -- will require { }
export const selectSong = (song) => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
