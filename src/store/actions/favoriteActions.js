export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export const addToFavorite = (note) => ({
  type: ADD_TO_FAVORITE,
  payload: note
});

export const removeFromFavorite = (noteId) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: noteId
});