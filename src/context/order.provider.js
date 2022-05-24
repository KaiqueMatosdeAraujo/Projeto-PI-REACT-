import { createContext, useState } from "react";

const OrderContext = createContext({})

function OrderProvider(props){
    
    const [order, setOrder] = useState([])

    const getOrderStorage = () => {
        if(localStorage.getItem('order')){
            return JSON.parse(localStorage.getItem('order'))
        }

        return []
    }

    const getOrder = () => {
        let orderList = getOrderStorage()
        setOrder(orderList)
        console.log(orderList)
    }


    return (
        <OrderContext.Provider value ={{order, getOrder}}>
            {props.children}
        </OrderContext.Provider>
    )
}

export { OrderProvider }
export default OrderContext