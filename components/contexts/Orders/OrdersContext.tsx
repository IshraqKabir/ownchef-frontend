import React from "react";

import IOrder from "../../model/IOrder";

export default React.createContext({
    orders: [],
    currentOrderID: null,
    setOrders: (orders: IOrder[]) => {}
});