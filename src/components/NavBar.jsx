import CartWidget from './CartWidget'
import User from './User'
import logo from '/images/logo/logo.svg'

const NavBar = () => {
  return (
    <div className='flex justify-center'>
      <header className='flex items-center border-b border-gray-200 w-[77%] justify-between '>
        <div className='flex items-center'>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <nav className='flex'>
            <ul className='flex items-center ml-12 gap-8 gray-soft'>
              <li className='btn py-11 hover:text-gray-600'>Collections</li>
              <li className='btn py-11 hover:text-gray-600'>Men</li>
              <li className='btn py-11 hover:text-gray-600'>Women</li>
              <li className='btn py-11 hover:text-gray-600'>About</li>
              <li className='btn py-11 hover:text-gray-600'>Contact</li>
            </ul>
          </nav>
        </div>
        <div className='flex items-center'>
          <div className='mr-12'><CartWidget /></div>
          <div><User /></div>
        </div>
      </header>

    </div>
  )
}

export default NavBar