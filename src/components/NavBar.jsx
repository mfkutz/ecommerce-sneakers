import CartWidget from './CartWidget'
import User from './User'
import logo from '/images/logo/logo.svg'
import icomenu from '../assets/svg/icon-menu.svg'
import close from '../assets/svg/icon-close.svg'
import { useState } from 'react'

const NavBar = () => {

  const [mobileMenu, setMenuMobile] = useState(false)


  return (
    <div className='flex justify-center relative'>
      <header className='flex items-center lg:border-b border-gray-200 lg:w-[77%] w-full lg:p-0 p-4 px-5  justify-between '>
        <div className='flex items-center '>
          <div className='flex gap-4 items-center'>
            <img onClick={() => setMenuMobile(!mobileMenu)} className='desktop-disabled mobile-active' src={icomenu} alt="icon menu" />
            <img src={logo} alt="logo" />
          </div>

          {/* //////////////////DESKTOP MENU////////////////// */}
          <nav className='flex mobile-disabled '>
            <ul className='flex items-center ml-12 gap-8 gray-soft  '>
              <li className='btn py-11 hover:text-gray-600'>Collections</li>
              <li className='btn py-11 hover:text-gray-600'>Men</li>
              <li className='btn py-11 hover:text-gray-600'>Women</li>
              <li className='btn py-11 hover:text-gray-600'>About</li>
              <li className='btn py-11 hover:text-gray-600'>Contact</li>
            </ul>
          </nav>

          {/* //////////////////MOBILE MENU////////////////// */}
          <div className={`z-50 top-0 left-0 absolute bg-white ${mobileMenu ? 'mobile-active slide-in ' : ''} desktop-disabled special-background-menu min-h-screen`}>
            <img src={close} onClick={() => setMenuMobile(!mobileMenu)} className='m-7' alt="close icon" />
            <ul className=' flex flex-col w-44 ml-7 bg-white m-10 gap-5 text-lg '>
              <li className='fontB color-gray-800'>Collections</li>
              <li className='fontB color-gray-800'>Men</li>
              <li className='fontB color-gray-800'>Women</li>
              <li className='fontB color-gray-800'>About</li>
              <li className='fontB color-gray-800'>Contact</li>
            </ul>
          </div>

        </div>
        <div className='flex items-center z-10'>
          <div className='lg:mr-12 mr-5'><CartWidget /></div>
          <div><User /></div>
        </div>
      </header>

    </div>
  )
}

export default NavBar