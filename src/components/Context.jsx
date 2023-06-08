import { createContext, useState } from "react"

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
        } else {
            const newItem = {
                product,
                qOfItem
            }
            setCartList([...cartList, newItem])
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
        </Context.Provider>
    )
}