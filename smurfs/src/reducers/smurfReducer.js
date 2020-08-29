import {
  FETCHING_SMURFS,
  FETCHING_COMPLETED,
  FETCHING_FAILED,
} from "../actions/action";

const initialState = {
  smurfData: [],
  isFetching: false,
  error: "",
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCHING_COMPLETED:
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfData: action.payload,
      };
    case FETCHING_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
