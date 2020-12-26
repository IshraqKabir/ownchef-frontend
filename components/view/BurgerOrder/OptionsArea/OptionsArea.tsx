import { useContext, useState, useEffect } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { makeStyles, Typography } from '@material-ui/core';
import ItemCategories from './ItemCategories/ItemCategories';
import IITemCategory from '../../../model/IItemCategory';
import OrdersContext from '../../../contexts/Orders/OrdersContext';

interface IProps {
    itemCategories: IITemCategory[];
};


const useStyles = makeStyles({
    root: {
        fontSize: 48,
        color: 'green',
        float: 'right',
        margin: 10,
    },
    hover: {
        fontSize: 52,
        color: 'red',
        float: 'right',
        margin: 10,
    }
});

const OptionsArea: React.FC<IProps> = ({ itemCategories }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const classes = useStyles();

    const { orders, currentOrderID, setCurrentOrderID } = useContext(OrdersContext)

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setIsDrawerOpen(open)
    };

    const [isHovering, setIsHovering] = useState<boolean>(false);

    return (
        <div>
            <AddCircleOutlinedIcon
                className={!isHovering ? classes.root : classes.hover}
                onClick={toggleDrawer(true)}
                onMouseEnter={() => { setIsHovering(true) }}
                onMouseLeave={() => { setIsHovering(false) }}
            />
            <SwipeableDrawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <ItemCategories itemCategories={itemCategories} />
            </SwipeableDrawer>
            <Typography variant="h6">
                {JSON.stringify(orders, null, 6)}
            </Typography>
        </div>
    );
}

export default OptionsArea;