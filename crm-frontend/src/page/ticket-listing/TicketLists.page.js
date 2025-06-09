import React from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs.comp'
import SearchForm from '../../components/search-form/SearchForm.comp'
import TicketTable from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummyTicketData.json'
import PropTypes from 'prop-types'

const TicketLists = () => {
    const [str, setStr] = React.useState('');
   const [filteredTickets, setFilteredTickets] = React.useState(tickets);
   
    React.useEffect(() => {
        
    }, [str,filteredTickets]);
    const handleOnChange = (e) => {
        const { value } = e.target;
        setStr(value);
        searchTickets(value);
    }


    const searchTickets = (query) => {
        
        const displayTickets = tickets.filter(ticket => 
            ticket.subject.toLowerCase().includes(query.toLowerCase()) ||
            ticket.status.toLowerCase().includes(query.toLowerCase())
        );
        
        setFilteredTickets(displayTickets);
    }

  return (
   <Container>
    <Row>
        <Col>
         <BreadCrumbs page={'Ticket Lists'} />   
        </Col>
    </Row>
    <Row className='mt-4'>
        <Col>
            <Button variant="info">Add new Ticket</Button>
        </Col>
        <Col className="text-right">
            <SearchForm handleOnChange={handleOnChange}
            str={str}/>
        </Col>
    </Row>
    <hr />
    <Row>
        <Col>
            <TicketTable tickets={filteredTickets}/>
        </Col>
    </Row>
   </Container>
  )
}

export default TicketLists

TicketLists.propTypes = {
    tickets: PropTypes.array.isRequired,
    
}