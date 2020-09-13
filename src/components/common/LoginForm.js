import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

const Styles = styled.div` 
    .form-control{
      margin-bottom: 30px;
    }  
`;

const BasicoF = () => (
  <Styles>
  <div>
    <h1>Login </h1>
    <Formik
      initialValues={{ correo: '', clave: '' }}
      validate={values => {
        const errors = {};
        if (!values.correo) {
          errors.correo = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)
        ) {
          errors.correo = 'Invalid email address';
        }
        if (!values.clave) {
            errors.clave = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 4000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* otros */
      }) => (
        <form onSubmit={handleSubmit}>
          <Form.Row>
          <Form.Control
            type="email"
            name="correo"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.correo}
          />
          {errors.correo && touched.correo && errors.correo}
          <Form.Control
            type="password"
            name="clave"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.clave}
          />
          {errors.clave && touched.clave && errors.clave}
          <Button  type="submit" disabled={isSubmitting}>
            Submit
          </Button>
          </Form.Row>
        </form>
      )}
    </Formik>
  </div>
  </Styles>
);

export default BasicoF;