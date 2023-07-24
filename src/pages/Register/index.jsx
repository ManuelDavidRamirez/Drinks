import { Formik, Field, ErrorMessage } from 'formik'
import { Form, Row, Col, Button } from 'react-bootstrap'
import * as Yup from 'yup'
import { registerAuthService } from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'

export const Register = () => {

    const navigate = useNavigate()

    const initialValues = {
        name: "",
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("El nombre es requerido"),
        email: Yup.string().required("El email es requerido"),
        password: Yup.string().required("La contraseña es requerida")
    })

    const handleSubmit = async (values) => {
        const response = await registerAuthService(values)
        console.log(response);
        navigate("/login")
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
                        <Form.Group>
                            <Form.Label htmlFor='name'>Nombre</Form.Label>
                            <Field
                                id="name"
                                type="text"
                                placeholder="Tu nombre"
                                name="name"
                                as={Form.Control}
                            />
                            <ErrorMessage
                                name="name"
                                component={Form.Text}
                                className='text-danger ms2'
                            />
                        </Form.Group>
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
                                    Registrarse
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                }
            }
        </Formik>
    )
}