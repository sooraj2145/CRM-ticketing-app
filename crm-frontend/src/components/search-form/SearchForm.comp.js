import React from 'react'
import {Form, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'

const SearchForm = ({handleOnChange,str}) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row} controlId="formSearch">
          <Form.Label column sm={3}>Search: </Form.Label> 
            <Col sm={11}>
                <Form.Control 
                type="text" 
                placeholder="Search by subject or description" 
                name="searchQuery" 
                onChange={handleOnChange}
                value={str}
                />
            </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SearchForm

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}
