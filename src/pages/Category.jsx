import { Button } from 'antd';
import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Cat_Slide_Image, popular_Slide_Image } from '../service/ServiceData';
import ".././styles/home.css"
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Category() {
    const [fav, setFav] = useState(false)
    const navigate=useNavigate()

    return (
        <div className="content_section">
            <div className='container'>
                <div className="popular_dish">
                    <div className="populer_title">
                        <MdOutlineKeyboardBackspace style={{cursor:'pointer'}} onClick={()=>navigate(-1)}/>
                        <p>All Category</p>

                    </div>
                    <div className="category_slider_section">
                        <Row>

                            {Cat_Slide_Image.map((imgs) => {
                                return (
                                    <Col md={3}>
                                        <div className="caregory_all">
                                            <Card  >
                                                <img src={imgs.ImgUrl} />
                                                <p>{imgs.title}</p>
                                            </Card>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
