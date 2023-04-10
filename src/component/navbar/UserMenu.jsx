import { Avatar, Badge, Button, Divider, message } from 'antd';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/navbar.css"
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { cartreducer } from '../../redux/reducers/reducer';
import { MdOutlineClose } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { DLT } from '../../redux/actions/action';
import Empty_Cart from '../../assest/login_page/empty_cart.png'



function UserMenu() {
    const getdata = useSelector((state) => state.cartreducer.carts);
    const [price, setPrice] = useState(0);
    const navigate = useNavigate()

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
    console.log("getdata", getdata)


    // const logouthanle = async () => {
    //     await logout().then(res => {
    //         // console.log(res);
    //         dispatch(LOGOUT())
    //         navigate('/login_page')
    //         sessionStorage.clear()
    //     }).catch(err => {
    //         message.error(err.message);

    //     })
    // }

    const cartItem = useSelector((state) => state.cartreducer.carts)
    const dispatch = useDispatch()
    const dltHandle = (id) => {
        dispatch(DLT(id))
    }

    return (
        <div className="userMenu_bar">
            <Dropdown align="start">
                <Dropdown.Toggle id="dropdown-basic" >
                    <div className="user_menu">
                        <Badge count={cartItem.length} showZero style={{
                            backgroundColor: 'green',
                        }}>
                            <BsCart className='cart' />
                        </Badge>
                        <span className='cart_item'>Cart</span>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <div className="dropDown_options">
                        {cartItem.length == 0 ? <div className="empty_cart"><img src={Empty_Cart} /></div> : cartItem.map((data) => {
                            return (
                                <>
                                    <Dropdown.Item >
                                        <div className="item_lists">
                                            {/* <Link to={`/cart_details/${data.id}`} key={data.id}> */}
                                            <div className="add_cart_data">

                                                <div className="add_cart_img">
                                                    <img src={data.src} />
                                                    <div className="resturent_infi">
                                                        <p>{data.rname}</p>
                                                        <p style={{color:'gray', fontSize:'.8rem'}}>{data.loc}</p>
                                                    </div>
                                                </div>
                                                <Divider />
                                                <div className="add_cart_title">
                                                    <img src={data.veg_icon} />
                                                    <p>{data.item}</p>
                                                    <p>x {data.qnty}</p>
                                                    <p>₹ {data.price}</p>

                                                </div>

                                            </div>
                                            {/* </Link> */}
                                            {/* <div className="add_cart_remove">
                                                <MdOutlineClose className='removeItem' onClick={() => dltHandle(data.id)} />
                                            </div> */}
                                        </div>

                                    </Dropdown.Item>
                                </>
                            )
                        })}
                        <Divider style={{ margin: '.5rem 0' }} dashed />

                        {cartItem.length != 0 && <div className="totalAmounts">
                            <p>Sub-Total </p>
                            <p>₹ {price}</p>
                        </div>}
                        {cartItem.length != 0 && <div className="checkout_bnt">
                            <Dropdown.Item>
                                <Button type='primary' block onClick={() => navigate('/checkout/1')}>Checkout</Button>
                            </Dropdown.Item>
                        </div>}
                    </div>

                </Dropdown.Menu>
            </Dropdown>
        </div >
    );
}


export default UserMenu
