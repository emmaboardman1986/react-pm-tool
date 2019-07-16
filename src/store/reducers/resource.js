import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility/utility";

const initialState = {
  resourceSchedule: [],
  loading: false,
  availability: {}
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RESOURCE_SCHEDULE_START:
      return updateObject(state, {
        loading: true
      });
    case actionTypes.FETCH_RESOURCE_SCHEDULE_SUCCESS:
      return updateObject(state, {
        resourceSchedule: action.schedule
      });
    case actionTypes.FETCH_RESOURCE_SCHEDULE_FAIL:
      return updateObject(state, {
          loading: false
      })
    case actionTypes.HANDLE_SCHEDULE_PLACEMENT:
        return updateObject(state, {
            availability: action.availability
        })
    default:
        return state
  }
};

export default resourceReducer;
