import { useContext } from 'react'
import { Context } from './Context'
import CartItem from './CartItem'

const CartContainer = () => {

    const { cartList } = useContext(Context)

    return (
        <div className="bg-white min-w-[350px] min-h-[250px] absolute lg:top-16 lg:-right-44 top-12 -right-16 rounded-lg shadow-2xl ">
            <div className="p-5 fontB rounded-t-lg border-b border-gray-200">
                Cart
            </div>
            <div className="flex flex-col justify-center items-center pt-7 p-5">
                <>
                    {
                        cartList.length > 0 ?
                            <CartItem />
                            :
                            <div className='pt-12 fontB text-gray-500'>
                                Your cart is empty
                            </div>
                    }
                </>

            </div>
        </div>
    )
}

export default CartContainer