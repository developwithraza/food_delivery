import { Button, Collapse, Divider, Switch } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/actions/action'
import "../../styles/resturent.css"
import Resturent_Item from './resturentData'
import { AiFillStar } from 'react-icons/ai'
import { MdOutlineAccessTime } from 'react-icons/md'
import { GiPathDistance } from 'react-icons/gi'

import Veg_leaf from '../../assest/login_page/veg_leaf.png'

function ResturentDetails() {
    const [checked, setChecked] = useState(false)
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setChecked(checked)
    };
    const dispatch = useDispatch()
    const { Panel } = Collapse;
    return (
        <div className='content_section'>
            <div className="container ">
                <div className="resturent_section">
                    <div className="resturent_info">
                        <div className="resturent_title">
                            <div className="resturent_name">
                                <p>Shah Gouse Resturnet </p>
                                <p>South indian , north indian ,chaines</p>
                                <p>tolichoki hyderabad</p>

                            </div>
                            <div className="resturentRating">
                                <p><AiFillStar style={{ marginTop: "-.2rem" }} /> 4.5</p>
                            </div>
                        </div>
                        <Divider dashed={true}
                        />
                        <div className="time_duration">
                            <p><GiPathDistance /> 2.5 K.M</p>
                            <p><MdOutlineAccessTime /> 16 Min</p>
                        </div>

                        <div className="switch_veg">
                            <Switch onChange={onChange} /> {checked == true ? <>
                                <img src={Veg_leaf} className="veg_item" /> <span>Veg</span>
                            </>
                                : "non-veg"}
                        </div>
                        <div className="list_fo_menu">
                            {Resturent_Item.map((item) => {
                                return (
                                    <div className="item_list">
                                        <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition="end" style={{ width: "100%" }}>
                                            <Panel header={<p>{item.title} <span style={{ marginLeft: '.5rem' }}>({item.items.length})</span></p>} key={item.id} >
                                                {item.items.map((data) => {
                                                    return (
                                                        <>
                                                            <div className="food_list">

                                                                <div className="food_info">
                                                                    <img src={data.veg_icon} />
                                                                    <p>{data.item}</p>
                                                                    <p>₹ {data.price}</p>
                                                                    <p className='food_rate'><AiFillStar style={{ marginTop: "-.2rem", marginRight: '.5rem' }} />{data.rate}</p>
                                                                    <p style={{ marginTop: '2rem' }}>
                                                                        {data.desc}
                                                                    </p>
                                                                </div>
                                                                <div className="add_btn">
                                                                    <img src={item.src} />
                                                                    <Button type='primary' onClick={() => dispatch(ADD(data))}>Add</Button>
                                                                </div>
                                                            </div>
                                                            <Divider />
                                                        </>

                                                    )
                                                })}
                                            </Panel>
                                        </Collapse>
                                        <Divider style={{ margin: '.5rem 0', height: ".5rem", background: "lightGray" }} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResturentDetails
