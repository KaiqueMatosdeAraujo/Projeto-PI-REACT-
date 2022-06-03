import React, { useState, createContext } from 'react'
const OrderContext = createContext({})
function OrderProvider(props){
    const [orderPlus, setOrderPlus] = useState([])
 
    
    const getOrderStorage = () => {
        if(localStorage.getItem('order')) {
            return JSON.parse(localStorage.getItem('order'))
        }
    
        return []
    }
    const getOrder = () => {
        let orderList = getOrderStorage()
        setOrderPlus(orderList)
    }
    const addOrder = () => {
        let orderList = localStorage.getItem('order')
        ? JSON.parse(localStorage.getItem('order'))
        : []



        localStorage.setItem("order", JSON.stringify(orderList))
        setOrderPlus(orderList)
    }

    
          
            
    

          
    
    
  
    return (
        <OrderContext.Provider value={{orderPlus, addOrder, getOrder}} >
            {props.children}
        </OrderContext.Provider>
    )
}
export { OrderProvider }
export default OrderContext