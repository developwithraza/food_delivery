
import React, { useState } from 'react';
import '../../styles/sidebar.css'
import { NavLink } from 'react-router-dom';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { Button, Divider, Menu, Space } from 'antd';
import { RxDashboard } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { BsShopWindow } from "react-icons/bs";
import { AiOutlineGift, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineSupportAgent } from 'react-icons/md';


const Sidebar = () => {


    return (
        <div className='sidebarMenuItem' >
            <Space>
                <Menu className='sidebarMenu'
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    // theme="dar"
                    style={{ borderInlineEnd: 'none', background: 'lightGray' }}

                >

                    <Menu.Item key="1" className='sideItem'><NavLink to='/my_account/' >
                        <FaRegUserCircle className='menu_cons' /><span className="sideItemTitle">Profile</span></NavLink></Menu.Item>
                    <Menu.Item key="2" className='sideItem'><NavLink to='/my_account/orders' >
                        <AiOutlineGift className='menu_cons' /><span className="sideItemTitle">Order</span></NavLink></Menu.Item>
                    <Menu.Item key="4" className='sideItem'><NavLink to='/my_account/address'><AiOutlineHome className='menu_cons' /><span className="sideItemTitle">Address</span></NavLink></Menu.Item>
                    <Menu.Item key="3" className='sideItem'><NavLink to='/my_account/customers'><MdOutlineSupportAgent className='menu_cons' /><span className="sideItemTitle">customers Support</span></NavLink></Menu.Item>
                    <Divider style={{margin:'.5rem 0'}}/>
                    <div className="logout_btn">
                        <Button type='primary' >Logout</Button>
                    </div>
                </Menu>
            </Space>
        </div>
    );
};


export default Sidebar



