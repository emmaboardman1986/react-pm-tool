import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchClientResourcesStart = () => {
  return {
    type: actionTypes.FETCH_CLIENT_RESOURCES_START
  };
};

export const fetchClientResourcesSuccess = clientResources => {
  return {
    type: actionTypes.FETCH_CLIENT_RESOURCES_SUCCESS,
    clientResourceList: clientResources
  };
};

export const fetchClientResourcesFail = error => {
  return {
    type: actionTypes.FETCH_CLIENT_RESOURCES_FAIL,
    error: error
  };
};

export const fetchClientResources = () => {
  return dispatch => {
    dispatch(fetchClientResourcesStart);
    var t0 = performance.now();
    // let url =
    //   "http://40414669.wdd.napier.ac.uk/inc/readClientTasks.php/?id=" +
    //   clientId;
    axios
      .get('http://40414669.wdd.napier.ac.uk/inc/readClientTasks.php')
      .then(result => {
        dispatch(fetchClientResourcesSuccess(result.data));
      })
      .catch(error => {
        dispatch(fetchClientResourcesFail(error));
      });
    var t1 = performance.now();
    console.log(
      "Call to fetchClientResource took " + (t1 - t0) + " milliseconds."
    );
  };
};
