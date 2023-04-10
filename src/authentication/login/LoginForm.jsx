import React, { useState, useEffect } from 'react'

import { Button, Form, Input, message, DatePicker, Divider } from 'antd';
import { Row, Col, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import "../../styles/login.css"

function LoginForm() {
    const [form] = Form.useForm();
    const [ApiKey, setApiKey] = useState("")
    const [userToken, setUserToken] = useState('')
    const [userId, setUserId] = useState('')
    const [error, setError] = useState('')

    const [userInput, setUserInput] = useState({
        Email: '',
        Password: '',
    })
    const handleChange = (propertyName) => (event) => {
        setUserInput((userInput) => ({
            ...userInput, [propertyName]: event.target.value
        }))
    }


    const onFinish = async (e) => {
        // await login(userInput.Email, userInput.Password).then(res => {

        //     setUserToken(res.user.accessToken)
        //     setUserId(res.user.uid)
        // }).catch(err => {
        //     setError(err.message);
        //     // console.log(err.message);
        // })

    }

    const onFinishFailed = () => {

    }
    return (
        <div className='anastomosys_login'>
            <div className="loginSection">
                <div className="login_fields">
                    <div className="login_Info">
                        <Form
                            form={form}
                            layout="vertical"
                            name="login_user"
                            className="login_form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Row>
                                <Col md={12}>

                                    <Form.Item
                                        name="Email"
                                        label="Email Address"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please inter Email !',
                                            },

                                        ]}
                                    >
                                        <Input
                                            placeholder="EmailId"
                                            value={userInput.Number}
                                            onChange={handleChange("Email")}

                                        />

                                    </Form.Item>
                                </Col>
                                <Col md={12}>

                                    <Form.Item
                                        name="pasword"
                                        label="Pasword"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Enter password !',
                                            },

                                        ]}
                                    >
                                        <Input.Password
                                            placeholder="Password"
                                            value={userInput.Password}
                                            onChange={handleChange("Password")}

                                        />


                                    </Form.Item>
                                </Col>

                            </Row>
                            <div className="login_btn">
                                <Form.Item>
                                    <Button type="primary"
                                        htmlType='submit'
                                        block
                                        // onClick={submithandler}

                                        className="login_form_button"
                                    >
                                       Sign Me In
                                    </Button>
                                </Form.Item>

                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
