import React from "react";
import s from './Login.module.css';
import { Field, reduxForm } from 'redux-form'
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from 'react-router-dom';


const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}
                    validate={[required, maxLength20]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} type={'password'}
                    validate={[required, maxLength20]} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}
                    validate={[required]} /> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData.email, formData.password, formData.rememberMe)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to='/profile' />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)

