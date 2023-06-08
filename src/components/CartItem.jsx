import itemImg from '/images/products/image-product-1-thumbnail.jpg'
import icoDelete from '../assets/svg/icon-delete.svg'
import React, { useContext } from 'react'
import { Context } from './Context'

const CartItem = () => {
    const { cartList, removeProduct } = useContext(Context)
    return (
        <>
            {cartList.map((item) => (
                <div key={item.product.id} className='flex items-center gap-4'>
                    <div className='flex'>
                        <img src={itemImg} alt="" className='max-w-[50px] rounded-md' />
                    </div>
                    <div>
                        <div className='text-gray-400'>{item.product.description}</div>
                        <div className='text-gray-400'>
                            ${item.product.price} X {item.qOfItem}{' '}
                            <span className='fontB text-gray-900'>
                                ${item.product.price * item.qOfItem}
                            </span></div>
                    </div>
                    <div className='cursor-pointer' onClick={() => removeProduct(item.product.id)}>
                        <img src={icoDelete} alt="icon delete" />
                    </div>
                </div>

            ))}

            <button className='mt-6 flex bg-OrangeDark text-white text-[15px] fontB min-w-full justify-center py-4 rounded-xl'>
                Checkout
            </button>
        </>
    )
}

export default CartItem