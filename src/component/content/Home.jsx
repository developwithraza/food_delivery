import { Button, Divider, Tabs } from 'antd';
import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import { Cat_Slide_Image, order_Image, popular_Slide_Image, Slide_Image } from '../../service/ServiceData';
import "../../styles/dashboard.css"
import "../../styles/home.css"
import { MdNavigateNext } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Radio, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import FoodCard from './FoodCard';

function Dashboard() {
    const navigate = useNavigate()
    const [fav, setFav] = useState(false)




    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        loop: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    
    return (
        <div className="content_section ">
            <div className="container">
                <div className="slider_section">
                    <Slider {...settings}>
                        {Slide_Image.map((imgs) => {
                            return (
                                <div className="banner_slider">
                                    <Card className="slide_imgs">
                                        <img src={imgs.ImgUrl} />
                                    </Card>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

                <div className="all_food">
                    <Tabs defaultActiveKey="1" >
                        <Tabs.TabPane tab="Relevance" key="1" >
                            <FoodCard />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab=" Rating" key="2">
                            <FoodCard />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="  Cost: Low To High" key="3">
                            <FoodCard />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Cost: High To Low" key="4">
                            <FoodCard />
                        </Tabs.TabPane>
                    </Tabs>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
