import React, { FC } from "react";
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { unwrapResult } from "@reduxjs/toolkit";
import { useAppDispatch, useTypedSelector } from "../../store";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import './styles.scss'
import { loginApiCall } from "../../store/auth/api";
import { useNavigate } from "react-router-dom";

interface SignInFormValues{
    username:string,
    password:string
}

const SignIn: FC = () => {
    const navigate = useNavigate()
    const {isLoading} = useTypedSelector((state)=>state.auth)
    const dispatch = useAppDispatch()
    const initialValues = {
        username: '',
        password: ''
    }
    const validationSchema = yup.object().shape({
        username: yup.string().required('This field is required'),
        password: yup.string().required('This field is required')
    });

    const onSubmit = async(e: SignInFormValues) => {
        const data = {
            username:e.username,
            password:e.password
        }
        const result = await dispatch(loginApiCall(data))
        const unwrappedReulst = await unwrapResult(result)
        if(unwrappedReulst!==undefined){
            navigate('/game')
        }
    }
    return (
        <div className="sign-in">
            <div className="sign-in__form-cont">
                <Formik
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    validateOnBlur={true}
                    validateOnChange={true}
                >
                    <Form>
                        <h2 className="sign-in__form-cont__header">Sign In</h2>
                        <div className="sign-in__form-cont__form">
                            <Input type="text" name="username" placeholder="" labelText="User name or email" />

                        </div>
                        <div className="sign-in__form-cont__form">
                            <Input type="password" name="password" placeholder="" labelText="Password" />
                        </div>
                        <Button className="sign-in__form-cont__btn" onClick={() => { }}>Sign In</Button>
                        <div className="sign-in__form-cont__kmli">
                            <input type="radio" id="keep-me-logged-in" />
                            <label htmlFor="keep-me-logged-in">Keep me logged in</label>
                        </div>
                        <div className="sign-in__form-cont__options">
                            <a href="">Register</a>
                            <a href="">Reset password</a>
                        </div>
                    </Form>
                </Formik>
            </div>

        </div>
    )
}

export default SignIn