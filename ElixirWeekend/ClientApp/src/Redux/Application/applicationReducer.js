import initialState from '../initialState';
import * as type from '../actionTypes';

export default function applicationReducer(
  state = initialState.application,
  action
) {
  switch (action.type) {
    case type.APPLICATION_SET_TOAST: {
      return { ...state, toast: action.toast };
    }
    case type.ON_CHANGE_APP: {
      return {
        ...state,
        [action.data.id]: action.data.value,
      };
    }

    default: {
      return { ...state };
    }
  }
}
