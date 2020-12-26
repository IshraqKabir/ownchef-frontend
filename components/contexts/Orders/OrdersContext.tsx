import React from "react";

import IOrder from "../../model/IOrder";
import IItem from "../../model/Item";

export default React.createContext({
    orders: [],
    setOrders: (orders: IOrder[]) => { },
    currentOrderID: 1,
    setCurrentOrderID: (orderID: number) => { },
    changeItemQuantity: (
        item: IItem,
        quantity: number,
        orderID: number,
        description?: string,
    ) => { },
});