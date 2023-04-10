import { Button, Card, Divider } from 'antd'
import Radio, { Group } from 'antd/es/radio';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { MdOutlineLocationOn } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ".././styles/checkout.css"
import { ADD, DLT, REMOVE } from '../redux/actions/action';
import Wollet from ".././assest/login_page/wollet.svg"
import SaveAddress from './SaveAddress';

function CheckOut() {
    const dispatch = useDispatch()
    const [cartData, setCartData] = useState([])
    const { id } = useParams();
    const [price, setPrice] = useState(0);
    const [delivery, setDelivery] = useState(40)
    const [tax, setTex] = useState(30)
    const getlocationData = JSON.parse(sessionStorage.getItem('location') || "{}");

    const getdata = useSelector((state) => state.cartreducer.carts);

    console.log("getdata", getdata)

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        });
        setCartData(comparedata);
        console.log("cartData", cartData)
    }

    // add data


    const send = (e) => {
        // console.log(e);
        dispatch(ADD(e));
    }

    //     const dlt = (id)=>{
    //       dispatch(DLT(id));
    //       history("/");
    //   }

    // remove one
    const remove = (item) => {
        dispatch(REMOVE(item))
    }


    useEffect(() => {
        compare();
    }, [id])

    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };
    useEffect(() => {
        total();
    }, [total])

    const address_List = [
        {
            h_no: "23/545C",
            area: "tolichowki",

        }
    ]

    return (
        <div className="content_sections">
            <div className="container card_details">
                <Row>
                    <Col md={7}>
                        <div className="delivery_location">
                            <div className="current_Address">
                                <p>Select delivery address</p>
                                <p>You have a saved address in this location</p>


                                <div className="address_list">
                                    <Row>

                                        <Col md={6}>
                                            <div className="save_addres">
                                                <div className="location_icon">
                                                    <MdOutlineLocationOn className='loc_Icon' />
                                                </div>
                                                <div className="address_item">
                                                    {getlocationData && <p>{getlocationData.display_name}</p>}
                                                    <Button type='primary'>Deliver Here</Button>
                                                </div>
                                            </div>
                                        </Col>
                                       
                                        <Col md={6}>
                                            <div className="save_addres">
                                                <div className="location_icon">
                                                    <MdOutlineLocationOn className='loc_Icon' />
                                                </div>
                                                <div className="address_items">
                                                    <p>Add New Address Here</p>
                                                    <SaveAddress />

                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                </div>
                            </div>
                            <Divider />
                            <div className="current_location_icon">
                                <MdOutlineLocationOn />
                            </div>


                            <div className="payment_option">
                                <Button >Pay Now</Button>
                                <p> ₹ {price+delivery+tax}</p>

                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        {cartData.map((ele) => {
                            return (
                                <div className="cart_details_data">
                                    <div className="resturent_details">
                                        <div className="cart_data_img">
                                            <img src={ele.src} />
                                        </div>
                                        <div className="resturent_Info">
                                            <p>{ele.rname}</p>
                                            <p style={{ fontSize: '.8rem', color: 'gray' }}>{ele.loc}</p>
                                        </div>
                                    </div>
                                    <div className="cart_data_info">
                                        <div className="cart_data_item">
                                            <p>{ele.item} </p>

                                            <div className="cart_action_btn">
                                                <Button type="link" onClick={ele.qnty <= 1 ? () => DLT(ele.id) : () => remove(ele)}>-</Button>
                                                <Button type="link">{ele.qnty}</Button>
                                                <Button type="link" onClick={() => send(ele)}>+</Button>

                                            </div>
                                            <p> ₹  {ele.price * ele.qnty}</p>
                                        </div>
                                        <div className="cart_data_item">
                                            <p>{ele.item} </p>

                                            <div className="cart_action_btn">
                                                <Button type="link" onClick={ele.qnty <= 1 ? () => DLT(ele.id) : () => remove(ele)}>-</Button>
                                                <Button type="link">{ele.qnty}</Button>
                                                <Button type="link" onClick={() => send(ele)}>+</Button>

                                            </div>
                                            <p> ₹  {ele.price * ele.qnty}</p>
                                        </div>
                                        <div className="cart_data_item">
                                            <p>{ele.item} </p>

                                            <div className="cart_action_btn">
                                                <Button type="link" onClick={ele.qnty <= 1 ? () => DLT(ele.id) : () => remove(ele)}>-</Button>
                                                <Button type="link">{ele.qnty}</Button>
                                                <Button type="link" onClick={() => send(ele)}>+</Button>

                                            </div>
                                            <p> ₹  {ele.price * ele.qnty}</p>
                                        </div>
                                        <div className="cart_data_item">
                                            <p>{ele.item} </p>

                                            <div className="cart_action_btn">
                                                <Button type="link" onClick={ele.qnty <= 1 ? () => DLT(ele.id) : () => remove(ele)}>-</Button>
                                                <Button type="link">{ele.qnty}</Button>
                                                <Button type="link" onClick={() => send(ele)}>+</Button>

                                            </div>
                                            <p> ₹  {ele.price * ele.qnty}</p>
                                        </div>
                                        <div className="bill_details">
                                            <p style={{ fontWeight: '600', marginTop: '1rem' }}>Bill Details</p>
                                            <div className="total_items">
                                                <p>Item Total</p>

                                                <p>₹ {price}</p>
                                            </div>
                                            <Divider dashed />
                                            <div className="delivery_charge">
                                                <p>Delivery fee</p>
                                                <p>₹ {delivery}</p>
                                            </div>
                                            <Divider />
                                            <div className="tax_gov">
                                                <p>Govt Taxes & Other Charges</p>
                                                <p>₹ {tax}</p>
                                            </div>
                                            <Divider style={{ background: 'black' }} />
                                        </div>
                                    </div>
                                    <div className="pay_now">
                                        <p>To Pay</p>
                                        <p>₹ {price + delivery + tax}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Col>
                </Row>


            </div>
        </div >
    )
}

export default CheckOut
