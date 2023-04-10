import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Form, Input, Select, Button, DatePicker, message } from 'antd'
import { useState } from 'react'
import { MdMyLocation } from "react-icons/md";


function AddLocationForm({ handleClose,getLocationHandle }) {

        const getlocationData = JSON.parse(sessionStorage.getItem('location') || "{}");

    const [gender, setGender] = useState("")
    const [Dob, setDob] = useState("")
    const [userInput, setUserInput] = useState({
        Name: "",
        Bio: "",

    })
    const handleChange = (propertyName) => (event) => {
        setUserInput((userInput) => ({
            ...userInput, [propertyName]: event.target.value
        }))
    }


    // const userUpdatebody = {
    //     "ApiKey": userDetails.ApiKey,
    //     "USERID": getUSerData.USERID,
    //     "SessionID": getUSerData.All_Device_Sessions[getUSerData.All_Device_Sessions.length - 1].SessionID,
    //     "Name": userInput.Name,
    //     "Bio": userInput.Bio,
    //     "Gender": gender,
    //     "DOB": Dob
    // }

    const submithandler = async () => {
        // await UpateUserInfo(userUpdatebody).then(res => {
        //     if (res.data.success) {
        //         message.success(res.data.extras.Status
        //         );
        //         handleClose()
        //     }
        // }).catch(err => {
        //     message.error(err.response.data.extras.msg);

        // })
    }

    const genderHandle = (value) => {
        setGender(value)
    }
    const cancelhandle = () => {
        handleClose()

    }
    const onChange = (date, dateString) => {
        setDob(dateString)
    };

    return (
        <div className='user_update_form'>
            <Form
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
                            rules={[
                                {
                                    required: true,
                                    message: 'Please inter name !',
                                },

                            ]}
                        >
                            <Input
                                placeholder="Search for area, streate name"
                                defaultValue={userInput.Name}
                                onChange={handleChange("Name")}
                                autoFocus
                            />
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item
                            name="Bio"

                        >
                            <Button type='default' 
                            icon={<MdMyLocation className='myLocation' />} 
                             block onClick={()=>getLocationHandle()}>Use Current Location</Button>
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item
                            name="Bio"

                        >
                           <Select placeholder="Select save Address" >
                                <Select.Option>
                                    {getlocationData.display_name}
                                </Select.Option>
                           </Select>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        </div>
    )
}



export default AddLocationForm
