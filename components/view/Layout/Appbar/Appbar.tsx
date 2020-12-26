import { useState, useEffect, useContext } from "react";
import { Badge, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import OrdersContext from '../../../contexts/Orders/OrdersContext';
import { useIsMounted } from "../../../custom-hooks/useIsMounted";

const useStyles = makeStyles({
    ShoppingCartIcon: {
        marginLeft: 'auto',
    }
});

export default function AppbarView() {
    const classes = useStyles();

    const [ordersLength, setOrdersLength] = useState<number>(0);

    const { orders, setOrders } = useContext(OrdersContext);

    useEffect(() => {
        if (orders && orders.length > 0) {
            setOrdersLength(orders.length);
        }

        if (orders.length == 0) {
            setOrders([
                {
                    id: 1,
                    items: [],
                }
            ])
            setOrdersLength(1)
        }

    }, []);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Badge className={classes.ShoppingCartIcon} badgeContent={ordersLength} color="secondary" aria-label="yooo">
                        <ShoppingCartIcon />
                    </Badge>
                </Toolbar>
            </AppBar>
        </div>
    );
}
