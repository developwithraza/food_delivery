import React, { useEffect, useState } from "react";
import { Col, Row } from 'react-bootstrap'
import { Form, Input, Select, Button, DatePicker, message, Popover } from 'antd'
import { MdMyLocation } from "react-icons/md";
import ".././styles/checkout.css"
import ShowMap from './ShowMap';
import GoogleMapReact from 'google-map-react';
import ".././styles/checkout.css"
import Log_Img from ".././assest/login_page/loc.png"
import axios from "axios";



const AnyReactComponent = ({ text }) => <div className="marker">
    <img src={text} />
    <Popover content="for pick the location" style={{textAlign:'center'}}> 
        <p>Click on Map</p>
    </Popover>

</div>;

const google_map_key = "AIzaSyCJMznMwq1-AGBjUIdP4OwY1fQT8-YY_Vo"
function SaveAddressForm({ handleClose, getLocationHandle }) {

    const getlocationData = JSON.parse(sessionStorage.getItem('location') || "{}");
    const [loc, setLoc] = useState(getlocationData.display_name)
    const [Dob, setDob] = useState("")
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    // const [newLoc,setNewLoc]=useState(null)




    const defaultProps = {
        center: {
            lat: 17.402712110832585,
            lng: 78.40599067460735
        },
        zoom: 11
    };
    const handleClick = (map) => {
        setLat(map.lat)
        setLng(map.lng)
        // console.log(map)
    }

    const getLocation = async (position) => {
        let result = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
        console.log("result", result)
        sessionStorage.setItem("location", JSON.stringify(result.data))
        const getAddressData = JSON.parse(sessionStorage.getItem('location') || "{}");
        console.log("getAddressData", getAddressData)
        setLoc(getAddressData.display_name)
    }

    useEffect(() => {
        getLocation()
    }, [lat, lng])
    return (
        <div className='save_address'>
            <div className="show_google_map">
                {/* <ShowMap /> */}

                <div style={{ height: '40vh', width: '100%', zIndex: '2' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={google_map_key}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        yesIWantToUseGoogleMapApiInternals={true}
                        onClick={handleClick}
                    >
                        <AnyReactComponent
                            lat={17.402712110832585}
                            lng={78.40599067460735}
                            text={Log_Img}

                        />
                    </GoogleMapReact>
                </div>




            </div>
            <div className="show_current_data">
                <Form
                    layout='vertical'
                    name="Add_Location"
                    className="location"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Row >
                        <Col md={12}>
                            <Form.Item
                                name="Name"
                                label="Address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please inter name !',
                                    },

                                ]}
                            >
                                <Input
                                    placeholder="Search for area, streate name"
                                    initialValues={loc}
                                // onChange={handleChange("Name")}
                                />
                            </Form.Item>
                        </Col>
                        <Col md={12}>
                            <Form.Item
                                name="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please inter name !',
                                    },

                                ]}
                            >
                                <Input
                                    placeholder="Door / Flat No."
                                    // onChange={handleChange("Name")}
                                    autoFocus
                                />
                            </Form.Item>
                        </Col>

                        <Col md={12}>
                            <Form.Item
                                name="landmark"

                            >
                                <Input
                                    placeholder="Landmark"
                                // onChange={handleChange("Name")}
                                />
                            </Form.Item>
                        </Col>

                        <Form.Item>
                            <Button type='primary' block>Save Address & Proceed</Button>
                        </Form.Item>
                    </Row>

                </Form>
            </div>


        </div>
    )
}



export default SaveAddressForm
