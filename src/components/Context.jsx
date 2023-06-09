import { createContext, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Context = createContext()

export const ContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (product, qOfItem) => {
        const existingItem = cartList.find(item => item.product.id === product.id);
        if (existingItem) {
            const updatedCart = cartList.map(item => {
                if (item.product.id === product.id) {
                    return {
                        ...item,
                        qOfItem: item.qOfItem + qOfItem
                    }
                }
                return item
            })
            setCartList(updatedCart)

            toast.success('Product added!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                className: 'toast-custom',
            })

        } else {
            const newItem = {
                product,
                qOfItem
            }
            setCartList([...cartList, newItem])
            toast.success('Product added!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }

    }

    const removeProduct = (productId) => {
        const updatedCart = cartList.filter((item) => item.product.id !== productId);
        setCartList(updatedCart);
    }

    return (
        <Context.Provider value={{
            cartList,
            addToCart,
            removeProduct
        }}>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </Context.Provider>
    )
}