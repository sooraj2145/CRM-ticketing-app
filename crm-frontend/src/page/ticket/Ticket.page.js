import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs.comp'
import tickets from '../../assets/data/dummyTicketData.json'
import MessageHistory from '../../components/message-history/MessageHistory.comp'
import UpdateTicket from '../../components/update-ticket/UpdateTicket.comp'

const ticket = tickets[0]; // Assuming you want to display the first ticket
const Ticket = () => {

  const [message, setMessage] = React.useState('');
  React.useEffect(() => {},[message]);
  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the message submission
    alert("Message submitted:", message);
    setMessage(''); // Clear the message after submission
  }

  return (
    <Container>
      <BreadCrumbs page="Ticket" />
        <Row>
            <Col className='fw-bolder text-secondary'>
              <div className="subject">Subject: {ticket.subject}</div>          
                <div className='date'>Ticket Opened: {ticket.created_at}</div>
                <div className='status'>Status: {ticket.status}</div>
            </Col>
            <Col className="text-end">
                <Button variant="outline-info">Close Ticket</Button>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col>
                <MessageHistory msg={ticket.history}/>
            </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <UpdateTicket msg={message} 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}/>
          </Col>
        </Row>
    </Container>
  )
}

export default Ticket
