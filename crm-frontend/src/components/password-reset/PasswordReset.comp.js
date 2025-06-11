import React from 'react'
import PropTypes from 'prop-types'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'

export default function ResetPassword({handleOnChange,handleResetPassword,handleResetPasswordSubmit,email}) {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Reset Password </h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleResetPasswordSubmit}>
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
                
                <Button variant="primary" type="submit" className='mt-3'>
                    Submit   
                </Button>
            </Form>
            <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='#!' onClick={()=>handleResetPassword('login')}>Back to Login</a>
            </Col>
        </Row>    
        
    </Container>
  )
}

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  handleResetPassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
    handleResetPasswordSubmit: PropTypes.func.isRequired
}


