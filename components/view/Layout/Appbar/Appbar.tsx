import { useContext, useEffect } from "react";
import { Badge, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import OrdersContext from '../../../contexts/Orders/OrdersContext';

const useStyles = makeStyles({
    ShoppingCartIcon: {
        marginLeft: 'auto',
    }
});

export default function AppbarView() {
    const classes = useStyles();

    const { orders } = useContext(OrdersContext);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Badge className={classes.ShoppingCartIcon} badgeContent={orders.length} color="secondary" aria-label="yooo">
                        <ShoppingCartIcon />
                    </Badge>
                </Toolbar>
            </AppBar>
        </div>
    );
}
