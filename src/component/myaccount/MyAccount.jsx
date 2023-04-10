import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import "../../styles/account.css"

import PageContent from './PageContent'
import Sidebar from './SideBar'

function MyAccount() {
    return (
        <div className='content_section '>
            <div className="container account_section">
                <Card >
                    <Card.Header>
                        My Account
                    </Card.Header>
                    <Card.Body>
                        <Sidebar />
                        <PageContent />
                    </Card.Body>
                   
                </Card>
            </div>
        </div>
    )
}

export default MyAccount
