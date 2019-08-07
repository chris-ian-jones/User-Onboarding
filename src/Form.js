import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import axios from 'axios';

const ErrorMessage = styled.p`
  color: red;
`

const NewUserForm = ({ errors, touched, values }) => {
  return (
    <Form>
      {touched.name && errors.name && (<ErrorMessage>{errors.name}</ErrorMessage>)}
      <Field type='text' name='name' placeholder='Name'/>
      {touched.email && errors.email && (<ErrorMessage>{errors.email}</ErrorMessage>)}
      <Field type='email' name='email' placeholder='Email'/>
      {touched.password && errors.password && (<ErrorMessage>{errors.password}</ErrorMessage>)}
      <Field type='password' name='password' placeholder='Password'/>
      <label>
        TOS
        <Field type='checkbox' name='tos' checked={values.tos}/>
      </label>
      <button type='submit'>Submit</button>
    </Form>
  )
}


const FormikNewUserForm = withFormik({
  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      tos: tos || false
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email(),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    // tos: Yup.required()
  }),

  handleSubmit( values ) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => console.log('Axios success', res.data))
      .catch(err => console.log('Axios error', err.response))
  }
})(NewUserForm)

export default FormikNewUserForm