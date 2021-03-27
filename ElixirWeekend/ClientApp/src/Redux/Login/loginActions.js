import * as type from "../actionTypes";

export const onChange = (data) => {
    return (dispatch)=>{
        dispatch(login_on_change_field(data))
    }
}
function login_on_change_field( data)
{
    return {type: type.LOGIN_ON_CHANGE_FIELD, data: data}
}