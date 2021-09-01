import React from 'react'
import { Formik, Form } from 'formik'
import TextField from './TextField'
import * as Yup from 'yup'

export default function SignUp() {

    const validate = Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 Chars Or less')
        .required('required'),
        lastName: Yup.string()
        .max(20, 'Must be 20 Chars Or less')
        .required('required'),
        email: Yup.string()
        .email('Email is Invalid')
        .required('Email is required'),
        password: Yup.string()
        .min(6, 'Password must be at least 6 chars')
        .required('Password is required'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password does not match')
        .required('Confirm password is required'),
    })

    return (

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">
                        Sing Up
                    </h1>
                    <Form>
                    <TextField label="First Name" name="firstName" type="text" />
                    <TextField label="Last Name" name="lastName" type="text" />
                    <TextField label="Email" name="email" type="email" />
                    <TextField label="Password" name="password" type="password" />
                    <TextField label="Confirm Password" name="confirmPassword" type="password" />
                    <button className="btn btn-dark mt-3" type="submit">Register</button>
                    <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>

                    </Form>
                </div>
            )}
        </Formik>

    )
}
