import React, { useContext, useState } from 'react'
import cartIcon from '../assets/svg/icon-cart.svg'
import CartContainer from './CartContainer'
import { Context } from './Context'

const CartWidget = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const { cartList } = useContext(Context)

    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div className='relative'>
            <div className=' cursor-pointer' onClick={handleCartClick}>
                <img src={cartIcon} alt="cart icon" />
            </div>
            <div className='absolute -top-[5px] left-4  bg-OrangeDark text-white font-bold text-[9px] px-[7px] rounded-xl'>
                {cartList.length === 0 ? '' : cartList[0].qOfItem}
            </div>
            <div>
                {isCartOpen && <CartContainer />}

            </div>
        </div>
    )
}

export default CartWidget