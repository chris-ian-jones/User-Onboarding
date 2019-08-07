import React from 'react'
import { Form, Field, withFormik } from 'formik'

const NewUserForm = ({ errors, touched, values }) => {
  return (
    <Form>
      <Field type='text' name='name' placeholder='Name'/>
      <Field type='email' name='email' placeholder='Email'/>
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

  handleSubmit( values ) {
    console.log(values)
  }
})(NewUserForm)

export default FormikNewUserForm