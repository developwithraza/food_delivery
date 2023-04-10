import React from 'react'
import { Outlet } from 'react-router-dom'
import "../../styles/account.css"

function PageContent() {
    return (
        <div className='page_content'>
            <Outlet />
        </div>
    )
}

export default PageContent
