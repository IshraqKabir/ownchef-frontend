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
                    items: [],
                }
            ]);
            setCurrentOrderID(1);
        }
    }, [])

    return (
        <OrdersContext.Provider
            value={{
                orders: orders,
                currentOrderID: currentOrderID,
                setOrders: setOrders,
            }}
        >
            {props.children}
        </OrdersContext.Provider>
    );
};

export default GlobalOrdersState;