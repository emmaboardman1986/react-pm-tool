import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility/utility";

const initialState = {
  tasks: [],
  loading: false,
  projectList: [],
  resourceList: [],
  data: []
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
        data: action.data,
        projectList: updatedProjectList,
        resourceList: action.data.resources
      });
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
