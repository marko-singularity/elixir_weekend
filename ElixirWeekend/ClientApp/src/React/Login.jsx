import React, {useState} from 'react';
import Input from "../SharedComponents/Input/Input";
import * as loginActions from "../Redux/Login/loginActions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Login = (props) => 
{
    console.log(props);
    return (<div><Input id = "username" onChange={
      props.actions.onChange
    }/> 
    <Input id = "password" onChange={
       props.actions.onChange
    }/>
    
    </div>);
}

const mapStateToProps = (state) =>
{
    return {...state.loginReducer}
}
const mapDispatchToProps = (dispath) =>
{
    return {actions:{onChange: bindActionCreators(loginActions.onChange, dispath)}}
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);