import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchTasksStart = () => {
  return {
    type: actionTypes.FETCH_TASKS_START
  };
};

export const fetchTasksSuccess = tasks => {
  return {
    type: actionTypes.FETCH_TASKS_SUCCESS,
    tasks: tasks
  };
};

export const fetchTasksFail = error => {
  return {
    type: actionTypes.FETCH_TASKS_FAIL,
    error: error
  };
};

export const fetchTasks = () => {
  return dispatch => {
    dispatch(fetchTasksStart());
    var t0 = performance.now();
    axios
      .get("http://40414669.wdd.napier.ac.uk/inc/readTaskDetails.php")
      .then(result => {
        console.log(result);
        dispatch(fetchTasksSuccess(result.data));
      })
      .catch(error => {
        dispatch(fetchTasksFail(error));
      });
    var t1 = performance.now();
    console.log(
      "Call to useEffect for readTaskDetails took " +
        (t1 - t0) +
        " milliseconds."
    );
  };
};

export const fetchTaskOptionsStart = () => {
    return {
      type: actionTypes.FETCH_TASK_OPTIONS_START
    };
  };
  
  export const fetchTaskOptionsSuccess = tasks => {
    console.log("fetch task options success");
    return {
      type: actionTypes.FETCH_TASK_OPTIONS_SUCCESS,
      data: tasks
    };
  };
  
  export const fetchTaskOptionsFail = error => {
    return {
      type: actionTypes.FETCH_TASK_OPTIONS_FAIL,
      error: error
    };
  };

export const fetchTaskOptions = () => {
  return dispatch => {
    dispatch(fetchTaskOptionsStart());
    var t0 = performance.now();
    axios
      .get("http://40414669.wdd.napier.ac.uk/inc/readAddTaskOptions.php")
      .then(result => {
        dispatch(fetchTaskOptionsSuccess(result.data))
      })
      .catch(error => {
          dispatch(fetchTaskOptionsFail(error));
      })
    var t1 = performance.now();
    console.log(
      "Call to useEffect for task options took " + (t1 - t0) + " milliseconds."
    );
  };
};

export const showTaskDetails = (task) => {
  return {
    type: actionTypes.SHOW_TASK_DETAILS,
    selectedTask: task
  }
}
