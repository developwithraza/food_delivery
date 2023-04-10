import React, { useState } from 'react';
import { Button, Divider, Modal } from 'antd';
import Resturent_Food from './cardData';
import Resturent_Item from '../component/resturent/resturentData';
import { order_Data } from './OrderList';
import ".././styles/account.css"
import { AiFillStar } from 'react-icons/ai';



function OrderMoreDetail() {
    const [coupon, setCoupon] = useState(10)
    const [tax, setTax] = useState(8.50)
    const [delivery, setDelivery] = useState(30)
    const [resturentPack, setTesturentPack] = useState(10)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='view_more'>
            <Button type='link' onClick={showModal}  >
                View Details
            </Button>
            <div className='create_post'>
                <Modal title="Order Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false} >
                    <div className="order_details">
                        <div className="order_details_items">
                            {order_Data.map((item) => {
                                return (

                                    <>
                                        <div className="resturent_infos">
                                            <div className="resturent_infos_image">
                                                <img src={item.src} />
                                            </div>
                                            <div className="resturent_infos_data">
                                                <p>{item.rname}</p>
                                                <p>{item.loc}</p>
                                                <p className='rating_order_details'><AiFillStar style={{marginTop:'-.2rem',marginRight:'.2rem'}}/>{item.rate}</p>
                                            </div>
                                        </div>
                                        <Divider />
                                        <div className="order_status_details">
                                            <p>{item.status}</p>
                                        </div>
                                        <div className="your_order_items">
                                            <p>Your Order</p>
                                            <div className="your_order_list">
                                                <div className="your_item_list_info">

                                                    <p><img src={item.veg_icon} /> {item.item}</p>
                                                    <span style={{ marginLeft: '1.5rem' }}>{item.qnty} x ₹ {item.price}</span>
                                                </div>
                                                <div className="your_item_list_price">

                                                    <p>₹ {item.price}</p>
                                                </div>

                                            </div>
                                            <div className="your_order_list">
                                                <div className="your_item_list_info">

                                                    <p><img src={item.veg_icon} /> {item.item}</p>
                                                    <span style={{ marginLeft: '1.5rem' }}>{item.qnty} x ₹ {item.price}</span>
                                                </div>
                                                <div className="your_item_list_price">

                                                    <p>₹ {item.price}</p>
                                                </div>

                                            </div>
                                            <div className="order_bill_details">
                                                <div className="item_total">
                                                    <p>Item total</p>
                                                    <p>₹ {item.price}</p>
                                                </div>
                                                <div className="item_total_coupon">
                                                    <p>Coupon</p>
                                                    <p>you saved ₹ {coupon}</p>
                                                </div>
                                                <div className="item_total">
                                                    <p>Taxes</p>
                                                    <p>₹ {tax}</p>
                                                </div>
                                                <div className="item_total">
                                                    <p>Delivery Charge</p>
                                                    <p>₹ {delivery}</p>
                                                </div>
                                                <div className="item_total">
                                                    <p>Resturent Packing</p>
                                                    <p>₹ {resturentPack}</p>
                                                </div>
                                                <Divider />
                                                <div className="item_total">
                                                    <p>Grand Total</p>
                                                    <p>₹ {item.price - coupon + delivery + resturentPack}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order_details_show">
                                            <div className="order_show_titles">

                                                <p>
                                                    Order Details
                                                </p>
                                            </div>
                                            <div className="order_details_lsit_show">
                                                <p>Order ID</p><p>#1245845</p>
                                            </div>
                                            <div className="order_details_lsit_show">
                                                <p>Payment Method</p><p>Online</p>
                                            </div>
                                            <div className="order_details_lsit_show">
                                                <p>Payment Status</p><p>Success</p>
                                            </div>
                                            <div className="order_details_lsit_show">
                                                <p>Delivered </p><p>Friday 10 jun 10:30 PM</p>
                                            </div>
                                            <div className="order_details_lsit_show">
                                                <p>Contact Number</p><p>6200820423</p>
                                            </div>
                                            <div className="order_details_lsit_show">
                                                <p>Deliver To</p><p>Tolichowki hyderabad telangana 500008</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>

                    </div>
                </Modal>
            </div>
        </div >
    );
}



export default OrderMoreDetail
