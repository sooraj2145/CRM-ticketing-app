import React from 'react'
import PropTypes from 'prop-types'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'

export default function Login({handleOnChange,handleOnSubmit,handleResetPassword,email,password}) {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Client Login</h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                            type="email"
                             name='email'
                             value={email}
                             onChange={handleOnChange}

                              placeholder="Enter your email"
                               required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name='password'
                        value={password}
                        onChange={handleOnChange}
                         placeholder="Enter your password" 
                         required />
                </Form.Group>
                <Button variant="primary" type="submit" className='mt-3'>
                    Login   
                </Button>
            </Form>
            <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='#!' onClick={()=>handleResetPassword('reset')}>Forgot Password?</a>
            </Col>
        </Row>
    </Container>
  )
}

Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
    handleResetPassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}


