import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility/utility";

const initialState = {
  resourceSchedule: [],
  loading: false,
  availability: {
    startTime: '',
    endTime: ''
  },
  resourceAndEstimate: {}
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RESOURCE_SCHEDULE_START:
      return updateObject(state, {
        loading: true
      });
    case actionTypes.FETCH_RESOURCE_SCHEDULE_SUCCESS:
      return updateObject(state, {
        resourceSchedule: action.schedule,
        resourceAndEstimate: action.resourceAndEstimate
      });
    case actionTypes.FETCH_RESOURCE_SCHEDULE_FAIL:
      return updateObject(state, {
          loading: false
      })
    case actionTypes.HANDLE_SCHEDULE_PLACEMENT_SUCCESS:
        return updateObject(state, {
            availability: action.availability
        })
    default:
        return state
  }
};

export default resourceReducer;
