import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom' 

const TicketTable= ({tickets}) => {
 
  return (
    
    <Table striped bordered hover responsive>
        <thead>
            <tr>
                <th>Ticket ID</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Created At</th>
                </tr>
        </thead>
        <tbody>
           {
           tickets.length && tickets.map((ticket, index) => (
            <tr key={index}>
                <td>{ticket.id}</td>
               <td> <Link to={`/ticket/${ticket.id}`}>{ticket.subject}</Link></td>
                <td>{ticket.status}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.created_at}</td> 
            </tr>
           ))
}
            </tbody>
    </Table>
  )

}

export default TicketTable
