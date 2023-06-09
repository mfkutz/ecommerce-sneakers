import CartWidget from './CartWidget'
import User from './User'
import logo from '/images/logo/logo.svg'
import icomenu from '../assets/svg/icon-menu.svg'

const NavBar = () => {
  return (
    <div className='flex justify-center'>
      <header className='flex items-center lg:border-b border-gray-200 lg:w-[77%] w-full lg:p-0 p-4 px-5  justify-between '>
        <div className='flex items-center '>
          <div className='flex gap-4 items-center'>
            <img className='desktop-disabled mobile-active' src={icomenu} alt="icon menu" />
            <img src={logo} alt="logo" />
          </div>
          <nav className='flex '>
            <ul className='flex items-center ml-12 gap-8 gray-soft mobile-disabled'>
              <li className='btn py-11 hover:text-gray-600'>Collections</li>
              <li className='btn py-11 hover:text-gray-600'>Men</li>
              <li className='btn py-11 hover:text-gray-600'>Women</li>
              <li className='btn py-11 hover:text-gray-600'>About</li>
              <li className='btn py-11 hover:text-gray-600'>Contact</li>
            </ul>
          </nav>
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