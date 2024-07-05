import React, { FC } from "react";
import * as yup from 'yup';
import { Formik, Form,Field } from 'formik';
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { BsFillInfoCircleFill } from "react-icons/bs";

import './styles.scss'
const SignUp: FC = () => {
    const initialValues = {
        username: '',
        password: ''
    }
    const validationSchema = yup.object().shape({
        username: yup.string().required('This field is required'),
        password: yup.string().required('This field is required')
    });
    return (
        <div className="sign-up">
            <div className="sign-up__form-cont">
                <Formik
                    onSubmit={() => { }}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    validateOnBlur={true}
                    validateOnChange={true}
                >
                    <Form>
                        <h2 className="sign-up__form-cont__header">Sign Up</h2>
                        <div className="sign-up__form-cont__form">
                            <Input type="text" name="username" placeholder="" labelText="Username" />
                        </div>
                        <div className="sign-up__form-cont__form">
                            <Input type="password" name="password" placeholder="" labelText="Password" />
                        </div>
                        <div className="sign-up__form-cont__form">
                            <Input type="text" name="email" placeholder="" labelText="Email" />
                        </div>

                        <p>
                            <BsFillInfoCircleFill style={{display:'inline-block', marginRight:10}} size={15} />
                            Computers and computer-assisted players are not allowed to play. Please do not get assistance from chess engines, databases, or from other players while playing. Also note that making multiple accounts is strongly discouraged and excessive multi-accounting will lead to being banned.
                            By registering, you agree to be bound by our Terms of Service.
                            Read about our Privacy policy.
                        </p>
                        <div className="sign-up__form-cont__kmli">
                            <Field as="switch" name="adad" />
                            <label htmlFor="keep-me-logged-in">I agree that I will at no time receive assistance during my games (from a chess computer, book, database or another person).</label>
                        </div>
                        <div className="sign-up__form-cont__kmli">
                            <Field as="switch" name="adad" />
                            <label htmlFor="keep-me-logged-in">I agree that I will always be nice to other players.</label>
                        </div>
                        <div className="sign-up__form-cont__kmli">
                            <Field as="switch" name="adad" />
                            <label htmlFor="keep-me-logged-in">I agree that I will not create multiple accounts (except for the reasons stated in the Terms of Service).</label>
                        </div>
                        <div className="sign-up__form-cont__kmli">
                            <Field as="switch" name="adad" />
                            <label htmlFor="keep-me-logged-in">I agree that I will follow all Lichess policies.</label>
                        </div>
                       
                        <Button className="sign-up__form-cont__btn" onClick={() => { }}>Sign In</Button>
                        <div className="sign-up__form-cont__options">
                            <a href="">Register</a>
                            <a href="">Reset password</a>
                        </div>
                    </Form>
                </Formik>
            </div>

        </div>
    )
}

export default SignUp