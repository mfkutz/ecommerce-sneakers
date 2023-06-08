import React from 'react'
import userImage from '/images/avatar/image-avatar.png'

const User = () => {
    return (
        <div className='flex rounded-full'>
            <img className='hover:bg-[#ff7d1b] rounded-full p-[2px] w-[52px]' src={userImage} alt="user avatar" />
        </div>
    )
}

export default User