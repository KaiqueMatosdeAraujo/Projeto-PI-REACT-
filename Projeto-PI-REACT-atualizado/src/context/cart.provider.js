import React, { useState, createContext } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext({})

function CartProvider(props) {

    const [cart, setCart] = useState([])
    const [cartQty, setCartQty] = useState(0) 
 

    const getCartStorage = () => {
        if(localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'))
        }

        return []
    }


    const addToCart = (item) => {


        let cartList = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []

        

        let isInCart = false

        cartList.forEach(element => {
            if(element.codProduto == item.codProduto){
                element.quantidade++
                element.total = element.preco * element.quantidade
                isInCart = true
            }
        });

        if (isInCart == false){
            item.quantidade = 1
            item.total = item.preco * item.quantidade
            cartList.push(item)
        }

        
        
        localStorage.setItem("cart", JSON.stringify(cartList))
        localStorage.setItem("qtyCart", JSON.stringify(cartList.length))
        setCart(cartList)
        setCartQty(cartList.length)
    }

    const getCart = () => {
        let cartList = getCartStorage()
        setCart(cartList)
        console.log(cartList)
    }

  

    const deleteCart = (id) => {
        let cartList = getCartStorage()
        for(let i = 0; i < cartList.length; i++){
            if(cartList[i].codProduto == id){
                cartList.splice(i, 1)
             
            }
        }
        setCart(cartList)
        setCartQty(cartList.length)
        localStorage.setItem("cart", JSON.stringify(cartList))
        localStorage.setItem("qtyCart", JSON.stringify(cartList.length))
       
    }


    const getCartQty = () => {
        let cartList = getCartStorage()
        setCartQty(cartList.length)
    }

   
    
    const alterarQuantidade = (operacao, codProduto) => {
        let cartList = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []
        
        cartList.forEach(element => {
            
            if(element.codProduto == codProduto){

                if(operacao == "-" && element.quantidade > 1) {
                   element.quantidade--
                }
                
                if(operacao == "+") element.quantidade++

                

                element.total = element.preco * element.quantidade

                
           
            }
        });


        localStorage.setItem("cart", JSON.stringify(cartList))
        setCart(cartList)
    }
    

    return (
        <CartContext.Provider value={{cart, cartQty, addToCart, getCartQty, getCart, deleteCart, alterarQuantidade}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
