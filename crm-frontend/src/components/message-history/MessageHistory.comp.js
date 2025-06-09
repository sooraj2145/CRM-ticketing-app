import React from 'react'
import PropTypes from 'prop-types'
import './message-history.style.css'
 const MessageHistory = ({msg}) => {
    if (!msg) return null;
  return msg.map((row,i)=>
(
    <div key={i} className="message-history mt-3">
        <div className='send fw-bold text-secondary'>
            <div className="sender">{row.messageBy}</div>
            <div className='date'>{row.date}</div> 
        </div>
        <div className='message'>
            <div className="msg-content">{row.message}</div>
        </div>
    </div>
  )) 
}

export default MessageHistory

MessageHistory.propTypes = {
    msg: PropTypes.array.isRequired
}
