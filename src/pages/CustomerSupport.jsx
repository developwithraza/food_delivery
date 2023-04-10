import React from 'react'
import ".././styles/account.css"
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from 'react-icons/ai'

function CustomerSupport() {
  return (
    <div className='container'>
      <div className="customer_support">
        <p>Contact Support </p>
        <div className="type_support">
            <div className="support_item">
              <p><FiPhoneCall className='support_icons'/> </p>
              <p>+916200820423</p>
            </div>
            <div className="support_item">
              <p><AiOutlineMail className='support_icons'/> </p>
              <p>vixspace@gmail.com</p>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default CustomerSupport
