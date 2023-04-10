import React, { useEffect, useState } from 'react'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { Button, Divider, Input, Menu, Select } from 'antd';
import "../../styles/navbar.css"
import NavLogo from "../../assest/login_page/logo1.png"
import { CiLocationOn } from "react-icons/ci";
import UserMenu from './UserMenu';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdLocationPin, MdMyLocation } from "react-icons/md";
import { SearchOutlined } from '@ant-design/icons';
import AddLocation from '../../pages/AddLocation';

function Navbar({ toggleCollapsed, collapsed }) {

    const [currentData, setCurrentData] = useState([])
    const [address, setAddress] = useState([])
    const [displayName, setDisplayName] = useState("")

    const navigate = useNavigate()
    const getLocationHandle = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            // setLat(position.coords.latitude)
            // setLng(position.coords.longitude)
            console.log("position", position.coords)
            getLocation(position)


        });

    }
    const getLocation = async (position) => {
        let result = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
        console.log("result", result)
        sessionStorage.setItem("location", JSON.stringify(result.data))
        const getlocationData = JSON.parse(sessionStorage.getItem('location') || "{}");
        console.log("getlocationData", getlocationData)
        setCurrentData(getlocationData)
        setAddress(getlocationData.address)
        let data = getlocationData.display_name.substr(0, 52);
        setDisplayName(data)

    }

    return (
        <div className="navbar_sections">
            <div className='navbars'>
                <div className="navbar_logo">
                    <img src={NavLogo} onClick={() => navigate('/')} />
                    <div className="search_bar">
                    <AddLocation getLocationHandle={getLocationHandle}/>
                    {/* <Button  icon={<MdMyLocation className='myLocation' />} type='link' onClick={() => getLocationHandle()}>Current Location</Button> */}

                   {currentData != [] && <p style={{ color: "white" }}> {displayName}</p>
                   
                   } 


                </div>
                </div>
                
                <div className="login_setion">
                    <SearchOutlined onClick={() => navigate('/all_search')} style={{color:'white',fontSize:'1.2rem'}}/>
                    <Button type='link' onClick={() => navigate('/login')}>Login</Button>
                    <Button type='link' onClick={() => navigate('/my_account')}>My Account</Button>
                    <UserMenu />
                </div>

            </div>
            {/* <div className="show_current_locaton">
                <p style={{ color: "white" }}>{currentData != [] && <span>{displayName}</span>}</p>
            </div> */}
        </div>
    )
}

export default Navbar
