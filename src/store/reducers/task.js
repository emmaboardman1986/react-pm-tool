import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility/utility";

const initialState = {
  tasks: [],
  loading: false,
  projectList: [],
  resourceList: [],
  data: [],
  selectedTask: {
    taskId: "0",
    taskTitle: "No task was selected, please exit the screen and click a task",
    taskAffectedArea: "n/a",
    taskErroneousBehaviour: "n/a",
    taskExpectedBehaviour: "n/a",
    taskImpact: "n/a",
    taskStartTime: "n/a",
    taskEndTime: "n/a",
    taskEstimate: "n/a",
    projectTitle: "n/a",
    clientName: "n/a"
  },
  showTaskDetail: false,
  showTaskNew: false,
  unscheduledTasks: [],
  showSchedulingComponent: false,
  taskToBeScheduled: {
    taskId: "0",
    taskTitle: "No task was selected, please exit the screen and click a task",
    taskAffectedArea: "n/a",
    taskErroneousBehaviour: "n/a",
    taskExpectedBehaviour: "n/a",
    taskImpact: "n/a",
    projectTitle: "n/a",
    clientName: "n/a"
  }
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS_START:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_TASKS_SUCCESS:
      return updateObject(state, { tasks: action.tasks });
    case actionTypes.FETCH_TASKS_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.FETCH_TASK_OPTIONS_START:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_TASK_OPTIONS_SUCCESS:
      const updatedProjectList = handleTaskPresets(action.data.clientProjects);
      return updateObject(state, {
        projectList: updatedProjectList,
        resourceList: action.data.resources
      });
    case actionTypes.SHOW_TASK_DETAILS:
      return updateObject(state, {
        selectedTask: action.selectedTask,
        showTaskDetail: true
      })
    case actionTypes.HIDE_TASK_DETAILS:
      return updateObject(state, {
        showTaskDetail: false
      })
    case actionTypes.TOGGLE_TASK_NEW:
      return updateObject(state, {
        showTaskNew: !state.showTaskNew
      })
      case actionTypes.FETCH_UNSCHEDULED_TASKS_START:
        return updateObject(state, { loading: true });
      case actionTypes.FETCH_UNSCHEDULED_TASKS_SUCCESS:
        return updateObject(state, { unscheduledTasks: action.tasks });
      case actionTypes.FETCH_UNSCHEDULED_TASKS_FAIL:
        return updateObject(state, { loading: false });
        case actionTypes.SHOW_SCHEDULING_COMPONENT:
          return updateObject(state, {
            taskToBeScheduled: action.selectedTask,
            showSchedulingComponent: true
          })
        case actionTypes.HIDE_SCHEDULING_COMPONENT:
          return updateObject(state, {
            showSchedulingComponent: false
          })
    default:
      return state;
  }
};


const handleTaskPresets = projectList => {
  let projectsArray = projectList.reduce(function(formPresetsArray, clientObj) {
    console.log("client object:" + clientObj.clientName);
    for (let j = 0; j < clientObj.projects.length; j++) {
      let clientObject = {
        clientName: clientObj.clientName,
        projectName: clientObj.projects[j].projectTitle,
        projectId: clientObj.projects[j].projectId
      };
      formPresetsArray.push(clientObject);
    }
    return formPresetsArray;
  }, []);
  return projectsArray;
};

export default taskReducer;
