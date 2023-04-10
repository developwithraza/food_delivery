import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Login_Img from "../../assest/login_page/login_img.jpg"
import LoginForm from './LoginForm'
import "../../styles/login.css"
import Logo from "../../assest/login_page/logo.png"
import { Button, Divider } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
    return (
        <div className="login_section content_section">
            <div className='container'>
                <div className="login_page">
                    <Row>
                        <Col md={8}>
                            <div className="login_left_image">
                                <img src={Login_Img} />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="login_form_heading">
                                <img src={Logo} />
                                <p>Create Account</p>
                                <Divider >Sing Up</Divider>
                                <LoginForm />
                                <Divider>Continue With</Divider>
                                <div className="other_option">
                                    <Button type='default' icon={<FaFacebook className='facebook' />}>Facebook</Button>
                                    <Button type='default' icon={<FcGoogle className='google' />}>Goolge</Button>
                                    <Button type='default' icon={<FaLinkedin className='facebook' />}>Linkedin</Button>
                                </div>
                                <p>Dont have an account <a href='/'>Sign Up</a></p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
