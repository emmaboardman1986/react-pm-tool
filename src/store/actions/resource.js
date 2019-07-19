import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchResourceScheduleStart = () => {
  return {
    type: actionTypes.FETCH_RESOURCE_SCHEDULE_START
  };
};

export const fetchResourceScheduleSuccess = (schedule, resourceAndEstimate) => {
  return {
    type: actionTypes.FETCH_RESOURCE_SCHEDULE_SUCCESS,
    schedule: schedule,
    resourceAndEstimate: resourceAndEstimate
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
        dispatch(fetchResourceScheduleSuccess(result.data, resourceAndEstimate));
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


export const handleSchedulePlacementSuccess = (availability) => {
  return {
    type: actionTypes.HANDLE_SCHEDULE_PLACEMENT_SUCCESS,
    availability: availability
  };
};

export const handleSchedulePlacement = (resourceAndEstimate, resourceSchedule) => {
  return dispatch => {
  var t0 = performance.now();
  const weeklyAvailability = Array(45).fill(true);
  const weeklyTimeSlots = [
    "Mon0900",
    "Mon1000",
    "Mon1100",
    "Mon1200",
    "Mon1300",
    "Mon1400",
    "Mon1500",
    "Mon1600",
    "Mon1700",
    "Tues0900",
    "Tues1000",
    "Tues1100",
    "Tues1200",
    "Tues1300",
    "Tues1400",
    "Tues1500",
    "Tues1600",
    "Tues1700",
    "Wed0900",
    "Wed1000",
    "Wed1100",
    "Wed1200",
    "Wed1300",
    "Wed1400",
    "Wed1500",
    "Wed1600",
    "Wed1700",
    "Thurs0900",
    "Thurs1000",
    "Thurs1100",
    "Thurs1200",
    "Thurs1300",
    "Thurs1400",
    "Thurs1500",
    "Thurs1600",
    "Thurs1700",
    "Fri0900",
    "Fri1000",
    "Fri1100",
    "Fri1200",
    "Fri1300",
    "Fri1400",
    "Fri1500",
    "Fri1600",
    "Fri1700"
  ];
  if (resourceSchedule.length > 0) {
    for (let n = 0; n < resourceSchedule.length; n++) {
      const startTime = resourceSchedule[n].taskStartTime;
      const estimatedTime = resourceSchedule[n].taskEstimate;
      for (let i = 0; i < weeklyTimeSlots.length; i++) {
        if (weeklyTimeSlots[i] === startTime) {
          for (let j = 0; j < estimatedTime; j++) {
            weeklyAvailability[i + j] = false;
          }
        }
      }
    }
  }
  console.log(weeklyAvailability);
  const estimateArray = Array(resourceAndEstimate.taskEstimate).fill(true);
  let indexOfFirstAvailability = findAvailability(
    weeklyAvailability,
    estimateArray
  );
  const endTime =
    parseInt(indexOfFirstAvailability) +
    parseInt(resourceAndEstimate.taskEstimate);
    dispatch(handleSchedulePlacementSuccess({
      startTime: weeklyTimeSlots[indexOfFirstAvailability],
      endTime: weeklyTimeSlots[endTime]
    }))
  var t1 = performance.now();
  console.log(
    "Call to handleSchedulePlacement took " + (t1 - t0) + " milliseconds."
  );
}};

const findAvailability = (arr, subarr) => {
  var t0 = performance.now();
  for (var i = 0; i < 1 + (arr.length - subarr.length); i++) {
    var j = 0;
    for (; j < subarr.length; j++) if (arr[i + j] !== subarr[j]) break;
    if (j === subarr.length) return i;
  }
  var t1 = performance.now();
  console.log(
    "Call to findAvailability took " + (t1 - t0) + " milliseconds."
  );
  return -1;
};