import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import TicketTable from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummyTicketData.json'
import Breadcrumbs from '../../components/breadcrumbs/BreadCrumbs.comp'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
            <Breadcrumbs page='Dashboard' />
            </Col>
        </Row>    
      <Row>
        <Col className='text-center mt-5 mb-2'>       
          <Link to='/add-ticket'>
            <Button variant='info' href='/tickets' style={{fontSize:'2rem',padding:'10px 30px' }}>Add New Ticket</Button>
                    </Link> 
        </Col>
      </Row>
      <Row>
        <Col className='text-center  mb-2'>       
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 5</div>           
        </Col>
      </Row>
      <Row>
        <Col className='mt-2'>       
            Recently Added Tickets
        </Col>
      </Row>
      <Row>
        <Col className='recent-tickets-table'> 
            <TicketTable tickets={tickets}/>
        </Col>
      </Row>
      
    </Container>
  )
}

export default Dashboard
