import React, { FC } from "react";
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import './styles.scss'
const SignIn: FC = () => {
    const initialValues = {
        username: '',
        password: ''
    }
    const validationSchema = yup.object().shape({
        username: yup.string().required('This field is required'),
        password: yup.string().required('This field is required')
    });
    return (
        <div className="sign-in">
            <div className="sign-in__form-cont">
                <Formik
                    onSubmit={() => { }}
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