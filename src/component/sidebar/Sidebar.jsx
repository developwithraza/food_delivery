
import React, { useState } from 'react';
import '../../styles/sidebar.css'
import { NavLink } from 'react-router-dom';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { Button, Menu, Space } from 'antd';
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePedalBike } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";


const Sidebar = ({ collapsed }) => {


    return (
        <div className='sidebarMenuItem' >
            <Space>
                <Menu className='sidebarMenu'
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    // theme="dark"
                    inlineCollapsed={collapsed}

                >
                    <div className={`${collapsed ? "hide_menu" : "menu_titles"}`}>
                        <p>Main Menu</p>
                    </div>
                    <Menu.SubMenu  className='side_submenu' key="sub1"
                        title={
                            <span>

                                <RxDashboard className='menu_cons' /><span className={`${collapsed ? "hide_menu" : "sideItemTitle"}`}>Dashboard</span>
                            </span>
                        }
                    >
                        <Menu.Item key="1"  className='sideItem'><NavLink to='/home/dashboard' >
                            <RxDashboard className='menu_cons' /><span className={`${collapsed ? "hide_menu" : "sideItemTitle"}`}>Food Order</span></NavLink></Menu.Item>

                        <Menu.Item key="2" className='sideItem'><NavLink to='/home/order_history'><BsShopWindow className='menu_cons' /><span className={`${collapsed ? "hide_menu" : "sideItemTitle"}`}>Order History</span></NavLink></Menu.Item>

                    </Menu.SubMenu>

                    <Menu.SubMenu  className='side_submenu' key="sub2" title={
                        <span>
                            <BsShopWindow className='menu_cons' /><span className={`${collapsed ? "hide_menu" : "sideItemTitle"}`}>Resturent</span>
                        </span>
                    }>



                        <Menu.Item key="3" className='sideItem'><NavLink to='/home/menu'><BsShopWindow className='menu_cons' /><span className={`${collapsed ? "hide_menu" : "sideItemTitle"}`}>Menu</span></NavLink></Menu.Item>

                    </Menu.SubMenu>
                    <Menu.SubMenu className='side_submenu' key="sub3" title={
                        <span>

                            <MdOutlinePedalBike className='menu_cons' /><span className={`${collapsed ? "hide_menu" : "sideItemTitle"}`}>Driver</span>
                        </span>
                    }
                    >


                        <Menu.Item key="4" className='sideItem'><NavLink to='/home/driver'><MdOutlinePedalBike className='menu_cons' /><span className={`${collapsed ? "hide_menu" : "sideItemTitle"}`}>Driver</span></NavLink></Menu.Item>

                    </Menu.SubMenu>




                </Menu>
            </Space>
        </div>
    );
};


export default Sidebar



