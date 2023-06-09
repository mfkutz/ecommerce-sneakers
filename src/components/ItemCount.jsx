import { useContext, useState } from 'react';
import minus from '../assets/svg/icon-minus.svg'
import plus from '../assets/svg/icon-plus.svg'
import cart2 from '../assets/svg/icon-cart-white.svg'
import { Context } from './Context';

const ItemCount = ({ stock, initial, product }) => {

    const { addToCart } = useContext(Context)
    const [qOfItem, setqOfItem] = useState(initial)

    function decrement() {
        if (qOfItem > 1) {
            setqOfItem(qOfItem - 1)
        }
    }

    function increment() {
        if (qOfItem < stock) {
            setqOfItem(qOfItem + 1)
        }
    }

    return (
        <div className='flex flex-col lg:flex-row lg:gap-4 gap-4 justify-center'>

            <div className='relative flex gap-16 bg-gray-100 lg:min-w-[154px] items-center lg:justify-center rounded-xl justify-between lg:px-0 px-3 py-[10px] lg:py-0'>
                <div className='p-3 cursor-pointer' onClick={decrement}>
                    <img src={minus} alt="minus" />
                </div>
                <div className='fontB text-gray-900 absolute left-1/2'>
                    {qOfItem}
                </div>
                <div className='p-3 cursor-pointer' onClick={increment}>
                    <img src={plus} alt="plus" />
                </div>
            </div>

            <button
                className='flex gap-4 bg-OrangeDark text-white text-[15px] fontB lg:min-w-[240px] justify-center py-4 rounded-xl hover:bg-[rgb(255,172,106)]'
                onClick={() => addToCart(product, qOfItem)}
            >
                <img src={cart2} alt="cart" />
                Add to Cart
            </button>

        </div>
    )
}

export default ItemCount