import { Avatar, Button, Collapse, Descriptions, Divider, List } from 'antd'
import React from 'react'
import ".././styles/account.css"
import Resturent_Food from './cardData'
import Deliver_Icon from ".././assest/login_page/deliver.png"
import OrderMoreDetail from './OrderMoreDetail'

function OrderHistory() {
  const { Panel } = Collapse;

  return (
    <div className='container'>
      <div className="order_list">
        {/* <div className="active_order">
          <p>Active Order</p>
        </div> */}
        <div className="past_order">
          <p>Past Order</p>
          <List
            itemLayout="horizontal"
            dataSource={Resturent_Food}
            renderItem={(item) => (
              <List.Item>
                <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition="end" style={{ width: "100%" }}>
                  <Panel extra={<span className='deliver_icon'>{item.status} {item.date} <img src={Deliver_Icon} /></span>} header={<p><List.Item.Meta

                    avatar={<Avatar src={item.imgdata} />}
                    title={<div className='resturent_order_info'>

                      <a style={{ fontSize: '1rem', color: 'black' }} href="https://ant.design">{item.rname}</a>
                      <p style={{ color: 'gray', fontSize: '.8rem' }}>{item.address}</p>
                      <p style={{ color: 'gray', fontSize: '.8rem' }}>Order #{item.id} {item.date}</p>
                    </div>} /> </p>} key={item.id} >
                    <Divider dashed />
                    <List.Item.Meta
                      description={
                        <>

                          <div className='order_item_info'>
                            <img src={item.imgdata} />
                            <span>{item.dis}</span>
                            <span>x {item.qnty}</span>
                            <span>₹ {item.price}</span>
                          </div>
                          <div className='order_item_info'>
                            <img src={item.imgdata} />
                            <span>{item.dis}</span>
                            <span>x {item.qnty}</span>
                            <span>₹ {item.price}</span>
                          </div>
                          <Divider />
                          <div className="total_paid_order">
                            <OrderMoreDetail />
                            <p >Total Paid : ₹ {item.price + item.price}</p>
                          </div>
                          
                        </>

                      }
                    />
                  </Panel>
                </Collapse>
              </List.Item>
            )}
          />
        </div>
      </div>

    </div>
  )
}

export default OrderHistory
