import React, { useState, createContext } from 'react'

const CartContext = createContext({})

function CartProvider(props) {

    const [cart, setCart] = useState([])
    const [cartQty, setCartQty] = useState(0)


    const getCartStorage = () => {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'))
        }

        return []
    }

    const addToCart = (item) => {
        let cartList = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []

        cartList.push(item)
        localStorage.setItem("cart", JSON.stringify(cartList))
        localStorage.setItem("qtyCart", JSON.stringify(cartList.length))
        setCart(cartList)
        setCartQty(cartList.length)
    }

    const getCart = () => {
        let cartList = getCartStorage()
        setCart(cartList)
    }

    const getCartQty = () => {
        let cartList = getCartStorage()
        setCartQty(cartList.length)
    }

    // const removeFromCart = (productId) => {
    //     setCart(old => {
    //         const newCart = {}
    //         Object.keys(old).forEach(id => {
    //             if (id !== productId) {
    //                 newCart[id] = old[id]
    //             }
    //         })
    //         return newCart
    //     })
    // }

    // const deleteCart = (id) => {
    //     for (let i = 0; i < cart.length; i++) {
    //         if (cart[i].id == id) {
    //             cart.splice(i, 1)
    //         }
    //     }
    // }

    // const deleteCart = (id) => {
    //     setCart(cart.filter((item) => item.id !== id))
    // }

    const deleteCart = (id) => {
        let cartList = getCartStorage()
        for(let i = 0; i < cartList.length; i++){
            if(cartList[i].id == id){
                cartList.splice(i, 1)
                setCart(cartList)
            }
        }
    }



    return (
        <CartContext.Provider value={{ cart, cartQty, addToCart, getCartQty, getCart, deleteCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
