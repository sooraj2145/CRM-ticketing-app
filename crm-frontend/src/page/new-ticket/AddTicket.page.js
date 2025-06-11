import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import Breadcrumbs from '../../components/breadcrumbs/BreadCrumbs.comp'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.comp'
import { shortText } from '../../utils/validation'

const AddTicket = () => {

    const [formData, setFormData] = React.useState({
        subsject: '',
        issueFound: '',

        description: ''
    });
    const [formErrors, setFormErrors] = React.useState({
        subject: false,
        issueFound: false,
        description: false
    });

    React.useEffect(() => {
        
    }, [formData]);

   const handleOnChange = async (e) => {
    const { name, value } = e.target;
   
    setFormData({
        ...formData,
        [name]: value
    });
    console.log(`Field changed: ${name}, New value: ${value}`); 
   }
   const handleOnSubmit = async (e) => {  
    e.preventDefault();

    setFormErrors({
        subject: false,
        issueFound: false,
        description: false
    });
    const isSubjectValid = await shortText(formData.subject); 
    setFormErrors({
            ...formErrors,
            subject:!isSubjectValid 
        });
    setFormData({});    
   }

  return (
    <Container>
        <Row>
            <Col> 
                <Breadcrumbs page='New Ticket' />  
            </Col>
        </Row>
        <Row>
            <Col>
                <AddTicketForm
                     handleOnChange={handleOnChange} 
                     handleOnSubmit={handleOnSubmit}
                     formDt ={formData}
                     formErrors={formErrors} />
            </Col>
        </Row>
      </Container>
  )
}

export default AddTicket
