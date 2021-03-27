import initialState from "../initialState";
import * as type from "../actionTypes";

export default function loginReducer(
  state = initialState.login,
  action
) {
  switch (action.type) {
    case type.LOGIN_ON_CHANGE_FIELD: {
      return { ...state, [action.data.id] : action.data.value };
    }

    default: {
      return { ...state };
    }
  }
}
