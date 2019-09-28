import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility/utility";

const initialState = {
  clientResourceList: [],
  loading: false
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CLIENT_RESOURCES_START:
      return updateObject(state, {
        loading: true
      });
    case actionTypes.FETCH_CLIENT_RESOURCES_SUCCESS:
      return updateObject(state, {
        clientResourceList: action.clientResourceList
      });
    case actionTypes.FETCH_CLIENT_RESOURCES_FAIL:
      return updateObject(state, {
          loading: false
      })
    default:
        return state
  }
};

export default clientReducer;
