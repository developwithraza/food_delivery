import { Button, Card } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Resturent_Food from '../../pages/cardData'
import { ADD } from '../../redux/actions/action'
import "../../styles/home.css"

function FoodCard() {
    const navigate = useNavigate()
    
    const cartItem = useSelector((state) => state.cartreducer.carts)
    console.log("cartItem", cartItem)

    const handleCard = (data) => {
        navigate(`/resturent_details/${data.id}`)

    }

    return (
            <div className='all_food '>
                <div className="all_food_title">
                    <p>Show Food  </p>
                </div>
                <Row>
                    {Resturent_Food.map((item) => {
                        return (
                            <Col md={3} key={item.id}>
                                <Card hoverable className='product_card' >
                                    <img src={item.imgdata} onClick={(data) => handleCard(item)}/>
                                    <p id='resturent'>{item.rname}</p>
                                    <p> {item.address}</p>
                                    <div className="card_footer">
                                        <p><AiFillStar style={{marginTop:"-.2rem"}}/> {item.rating}</p>
                                        <p>{item.time}</p>
                                        <p>₹ {item.price}</p>
                                    </div>
                                    {/* <Button type='primary' block onClick={() => dispatch(ADD(item))}>Add Cart</Button> */}
                                </Card>
                            </Col>
                        )
                    })}
                </Row>

            </div>
      
    )
}

export default FoodCard
