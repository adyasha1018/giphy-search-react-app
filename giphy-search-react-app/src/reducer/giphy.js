import { REQUEST_GIPHYS, TRENDING_GIPHYS } from "../actions";

const initialState = {
  data: [],
};

export default function giphys(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIPHYS:
      return {
        ...state,
        data: action.payload.body.data,
      };
    case TRENDING_GIPHYS:
      return {
        ...state,
        data: action.payload.body.data,
      };
    default:
      return state;
  }
}
