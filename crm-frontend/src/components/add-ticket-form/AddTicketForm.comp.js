import React from 'react'
import { Container,Form,Row,Col,Button } from 'react-bootstrap'
import  PropTypes  from 'prop-types'
import './add-ticket-form.style.css'

const AddTicketForm = ({handleOnChange,handleOnSubmit,formDt,formErrors}) => {
  return (
    <Container className="add-ticket-form-container mt-3 bg-light">
        
        <Row>
            <Col>
            <h1 className='text-info text-center'>Add New Ticket</h1>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                    <Form.Control 
                            type="text"
                             name='subject'
                             value={formDt.subject}
                             onChange={handleOnChange}

                              placeholder="Enter subject"
                               required />
                            </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={9}>
                    <Form.Control 
                        type="date" 
                        name='issueFound'
                        value={formDt.issueFound}
                        onChange={handleOnChange}
                          
                         required />
                         </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Description</Form.Label>
                    <Col sm={9}>
                    <Form.Control 
                        as="textarea" 
                        role={5}
                        name='description'
                        value={formDt.description}
                        onChange={handleOnChange}
                          
                         required />
                        <Form.Text>{formErrors.subject && 'Subject is required'}</Form.Text>     
                            </Col>

                </Form.Group>
                <Button variant="info" type="submit" className='w-100 my-5'>
                    Submit 
                </Button>
            </Form>
            <hr />
            </Col>
        </Row>
       
    </Container>
  )
}

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    frmdt: PropTypes.object,
    formErrors: PropTypes.object
}

export default AddTicketForm
