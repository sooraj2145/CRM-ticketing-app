import React from 'react'
import { Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'


const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
  return (
   <Form onSubmit={handleOnSubmit}> 
    <Form.Label>Reply</Form.Label>
    <br />
    <Form.Text className='mt-3'>Please reply your message here or update the ticket</Form.Text>
    <Form.Control
        as="textarea"
        row="5"
        name="detail"
        value={msg}
        onChange={handleOnChange}
        />
    <div className="text-end mt-4">
        <Button 
        variant="info"
        type="submit">Reply</Button>
        </div>    
        
   </Form>
  )
}

export default UpdateTicket

UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired
}