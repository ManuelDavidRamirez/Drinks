import { Formik, Field, ErrorMessage } from 'formik'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
import * as Yup from 'yup'
import useUser from '../../hooks/useUser'

export const Login = () => {

  const {login, alert} = useUser()

  const initialValues = {
    email: "",
    password: ""
  }

  const validationSchema = Yup.object({
    email: Yup.string().required("El email es requerido"),
    password: Yup.string().required("La contraseña es requerida")
  })

  const handleSubmit = (values) => {
    //console.log(values);
    login(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {
        (formik) => {
          <Form onSubmit={formik.handleSubmit} className='col-6 mx-auto'>
            {alert && <Alert variant='danger'>{alert}</Alert>}
            <Form.Group>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Field
                id="email"
                type="email"
                placeholder="user@gmail.com"
                name="email"
                as={Form.Control}
              />
              <ErrorMessage
                name="email"
                component={Form.Text}
                className='text-danger ms2'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='password'>Contraseña</Form.Label>
              <Field
                id="password"
                type="password"
                name="password"
                as={Form.Control}
              />
              <ErrorMessage
                name="password"
                component={Form.Text}
                className='text-danger ms2'
              />
            </Form.Group>
            <Row className='justify-content-end mt-3'>
              <Col md={3}>
                <Button variant="dark" disabled={false} className="w-100" type="submit">
                  Ingresar
                </Button>
              </Col>
            </Row>
          </Form>
        }
      }
    </Formik>
  )
}