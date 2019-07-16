import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchResourceScheduleStart = () => {
  return {
    type: actionTypes.FETCH_RESOURCE_SCHEDULE_START
  };
};

export const fetchResourceScheduleSuccess = schedule => {
  return {
    type: actionTypes.FETCH_RESOURCE_SCHEDULE_SUCCESS,
    schedule: schedule
  };
};

export const fetchResourceScheduleFail = error => {
  return {
    type: actionTypes.FETCH_RESOURCE_SCHEDULE_FAIL,
    error: error
  };
};

export const fetchResourceSchedule = resourceAndEstimate => {
  return dispatch => {
    dispatch(fetchResourceScheduleStart);
    var t0 = performance.now();
    let url =
      "http://40414669.wdd.napier.ac.uk/inc/readResourceSchedule.php/?id=" +
      resourceAndEstimate.resourceId;
    axios
      .get(url)
      .then(result => {
        dispatch(fetchResourceScheduleSuccess(result.data));
      })
      .catch(error => {
        dispatch(fetchResourceScheduleFail(error));
      });
    var t1 = performance.now();
    console.log(
      "Call to fetchResourceSchedule took " + (t1 - t0) + " milliseconds."
    );
  };
};


export const handleSchedulePlacement = (availability) => {
    return {
    type: actionTypes.HANDLE_SCHEDULE_PLACEMENT,
    availability: availability
    }
}