import { Input } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import ".././styles/home.css"
import { Cat_Slide_Image } from '../service/ServiceData';
function SearchAll() {
    return (
        <div className='content_section'>
            <div className="container search_all">
                <div className="search_input">
                    <Input placeholder='Search for resturent and food' suffix={<SearchOutlined />} autoFocus />
                </div>
                <div className="popular_dishes">
                    <p>Popular Cuisines</p>
                    <div className="popular_dish_list">
                        {Cat_Slide_Image.map((item) => {
                            return (
                                <div className="popular_item" key={item.id}>
                                    <img src={item.ImgUrl} />
                                    <p>{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchAll
