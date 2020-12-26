import React, { useEffect } from 'react';
import useLocalState from '../../custom-hooks/useLocalState';

import OrdersContext from './OrdersContext';

import IOrder from "../../model/IOrder";
import IItem from '../../model/Item';
import IOrderedItem from '../../model/IOrderedItem';

interface IChangeItemQuantity {
    item: IItem;
    quantity: number;
    orderID: number;
    description?: string;
}

const GlobalOrdersState = props => {
    const [orders, setOrders] = useLocalState<IOrder[]>("orders", [
        {
            id: 1,
            items: [
                {
                    quantity: 1,
                    description: 'asdfasdf',
                    item: {
                        id: 1,
                        name: 'asdf',
                        price: 20,
                    }
                }
            ],
        },
        {
            id: 2,
            items: [
                {
                    quantity: 1,
                    description: 'asdfasdf',
                    item: {
                        id: 1,
                        name: 'asdf',
                        price: 20,
                    }
                }
            ],
        },
    ]);

    const [currentOrderID, setCurrentOrderID] = useLocalState<number>("current-order-id", orders[orders.length - 1]["id"]);

    const changeItemQuantity = <IChangeItemQuantity,>(
        item: IItem,
        quantity: number,
        orderID: number,
        description?: string,
    ) => {
        // get the order from orderID
        const order: IOrder = orders.find((order: IOrder) => order.id === orderID);

        // check if the item exists on the order
        let itemExistsInOrder: boolean = false;

        order.items.forEach((i: IOrderedItem) => {
            if (i.item.id === item.id) {
                itemExistsInOrder = true;
            }
        })

        const orderedItem: IOrderedItem = {
            item: {
                id: item.id,
                name: item.name,
                price: item.price,
                side_view_image: item.side_view_image,
                top_view_image: item.top_view_image
            },
            quantity: quantity,
            description: description,
        }

        // if it does not then add the item to the order 
        // here item will be of type IOrderedItem
        if (!itemExistsInOrder) {
            if (order.items) {
                order.items.push(orderedItem);
            }
            // if it does then find it and change it
        } else {
            const index: number = order.items.findIndex(i => i.item.id === item.id)
            // check if quantity is zero
            // if it is remove it
            if (orderedItem.quantity === 0) {
                order.items.splice(index, 1);
            } else {
                order.items.splice(index, 1, orderedItem);
            }
        }


        // change the orders state
        setOrders((state: IOrder[]) => {
            const orders: IOrder[] = [...state];

            // find the index of the order in orders
            const index: number = orders.findIndex(o => o.id === order.id);

            orders.splice(index, 1, order);

            return orders;
        })
    }

    return (
        <OrdersContext.Provider
            value={{
                orders: orders,
                setOrders: setOrders,
                currentOrderID: currentOrderID,
                setCurrentOrderID: setCurrentOrderID,
                changeItemQuantity: changeItemQuantity,
            }}
        >
            {props.children}
        </OrdersContext.Provider>
    );
};

export default GlobalOrdersState;
