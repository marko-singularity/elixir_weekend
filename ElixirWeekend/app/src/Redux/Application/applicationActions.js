import * as type from '../actionTypes';

export function showToast(toast) {
  return function (dispatch) {
    dispatch(application_set_toast(toast));
    dispatch(application_set_toast(null));
  };
}
export const onChange = (data) => {
  return (dispatch) => {
    dispatch(on_change_app(data));
  };
};

function application_set_toast(toast) {
  return { type: type.APPLICATION_SET_TOAST, toast };
}
function on_change_app(data) {
  return {
    type: type.ON_CHANGE_APP,
    data,
  };
}
