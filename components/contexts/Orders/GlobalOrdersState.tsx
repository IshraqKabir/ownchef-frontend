import React, { useState, useReducer, useEffect } from 'react';
import useLocalState from '../../custom-hooks/useLocalState';

import OrdersContext from './OrdersContext';

import IOrder from "../../model/IOrder";
import { useIsMounted } from '../../custom-hooks/useIsMounted';

const GlobalOrdersState = props => {
    const [orders, setOrders] = useLocalState<IOrder[]>("orders", []);
    const [currentOrderID, setCurrentOrderID] = useLocalState<number>("current-order", null);

    const isMounted = useIsMounted();

    useEffect(() => {
        if (orders.length == 0 && isMounted) {
            setOrders([
                {
                    id: 1,
                    items: {}
                }
            ]);
            setCurrentOrderID(1);
        }

    }, [])

    //   const products = [
    //     { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    //     { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    //     { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    //     { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    //   ];
    //   // const [cart, setCart] = useState([]);
    //   const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

    //   const addProductToCart = product => {
    //     setTimeout(() => {
    //       // setCart(updatedCart);
    //       dispatch({ type: ADD_PRODUCT, product: product });
    //     }, 700);
    //   };

    //   const removeProductFromCart = productId => {
    //     setTimeout(() => {
    //       // setCart(updatedCart);
    //       dispatch({ type: REMOVE_PRODUCT, productId: productId });
    //     }, 700);
    //   };

    return (
        <OrdersContext.Provider
            value={{
                orders: orders,
                currentOrderID: currentOrderID,
                // products: products,
                // cart: cartState.cart,
                // addProductToCart: addProductToCart,
                // removeProductFromCart: removeProductFromCart
            }}
        >
            {props.children}
        </OrdersContext.Provider>
    );
};

export default GlobalOrdersState;