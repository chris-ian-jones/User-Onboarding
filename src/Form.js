import React from 'react'
import { Form, Field, withFormik } from 'formik'

const NewUserForm = ({ errors, touched, values }) => {
  return (
    <Form>
      <Field type='text' name='name' placeholder='Name'/>
      <Field type='email' name='email' placeholder='Email'/>
      <Field type='password' name='password' placeholder='Password'/>
      {/* <Field type='checkbox' name='tos' placeholder='Name'/> */}
      <button>Submit</button>
    </Form>
  )
}

const FormikNewUserForm = withFormik({
  mapPropsToValues({ name, email, password }) {
    return {
      name: name || '',
      email: email || '',
      password: password || ''
    }
  }
})(NewUserForm)

export default FormikNewUserForm