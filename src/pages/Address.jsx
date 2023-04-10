import { Button } from 'antd';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { MdOutlineLocationOn } from "react-icons/md";
import EditAddress from './EditAddress';

function Address() {
  const getlocationData = JSON.parse(sessionStorage.getItem('location') || "{}");

  return (
    <div className='container'>
      <div className="address_title">
        <p>Manage  Address</p>
      </div>
      <Row>
        <Col md={6}>
          <div className="save_Address_lists">

            <div className="addres_icons">
              <MdOutlineLocationOn />
            </div>
            <div className="save_address_list_item">
              <p>{getlocationData.display_name}</p>
              <div className="save_adderss_action">
                <EditAddress />

                <Button type='link'>Delete</Button>
              </div>
            </div>
          </div>

        </Col>
        <Col md={6}>
          <div className="save_Address_lists">

            <div className="addres_icons">
              <MdOutlineLocationOn />
            </div>
            <div className="save_address_list_item">
              <p>{getlocationData.display_name}</p>
              <div className="save_adderss_action">
                <EditAddress />
                <Button type='link'>Delete</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Address
