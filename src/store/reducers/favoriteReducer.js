import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from "../actions/favoriteActions";
import { favoriteItems } from "../initialStates/favoriteItems";

const initialState = {
  favoriteItems: favoriteItems,
};

export default function favoriteReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case ADD_TO_FAVORITE:
      let note = state.favoriteItems.find((n) => n.note.id === payload.id);

      if (note) {
        note.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          favoriteItems: [
            ...state.favoriteItems,
            { quantity: 1, note: payload },
          ],
        };
      }

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (n) => n.note.id !== payload
        ),
      };

    default:
      return state;
  }
}