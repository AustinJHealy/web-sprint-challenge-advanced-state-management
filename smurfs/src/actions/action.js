import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_COMPLETED = "FETCHING_COMPLETED";
export const FETCHING_FAILED = "FETCHING_FAILED";

export const ADDING_SMURF_START = "ADDING_SMURF_SUCCESS";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE";

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS });

  axios
    .get("http://localhost:3333/smurfs")
    .then((response) =>
      dispatch({ type: FETCHING_COMPLETED, payload: response.data })
    )
    .catch((error) =>
      dispatch({ type: FETCHING_FAILED, payload: error.response })
    );
};

export const addSmurf = (smurf) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((response) => {
      console.log(response);
      dispatch({
        type: ADDING_SMURF_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => console.log(error));
};
