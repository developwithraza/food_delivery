import { Card } from 'antd'
import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import ".././styles/account.css"

function ProfilePage() {
  const { Meta } = Card;
  return (
    <div className='contianer'>
      <div className="profile_details">
        <div className="profile_Info">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://i0.wp.com/4.bp.blogspot.com/-gXF6kT8-pjM/V7Hq4i9GOwI/AAAAAAAABDY/aIf2qPT4ZP8XB8TjP8sjYIHs3juUCJ3JwCLcB/s1600/smaransahu.jpg?ssl=1" />}
          >
            <Meta title="Amir Raza" description={<div>
              <p>6200820423</p>
              <p>raza1@gmail.com</p>
            </div>} />
          </Card>
        </div>
        <div className="edit_profile">
          <AiOutlineEdit />
        </div>

      </div>

    </div>
  )
}

export default ProfilePage
