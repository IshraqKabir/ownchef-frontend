import { useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import IItem from "../../../../../../../../model/Item";

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import useLocalState from "../../../../../../../../custom-hooks/useLocalState";
import { useContext } from "react";
import OrdersContext from "../../../../../../../../contexts/Orders/OrdersContext";

interface IProps {
    item: IItem;
}

const useStyle = makeStyles({
    icon: {
        cursor: 'pointer',
    }
})

const AddOrRemoveItem: React.FC<IProps> = ({ item }) => {
    const classes = useStyle();
    const [quantity, setQuantity] = useLocalState<number>(`item-${item.id}-quantity`, 0);

    const { currentOrderID, changeItemQuantity } = useContext(OrdersContext);

    const addItem = () => {
        changeItemQuantity(item, quantity + 1, currentOrderID, "");
        setQuantity(quantity + 1)
    }

    const removeItem = () => {
        if (quantity < 1) return;
        changeItemQuantity(item, quantity - 1, currentOrderID, "");
        setQuantity(quantity - 1)
    }

    return (
        <Box display="flex">
            {quantity > 0 ?
                <>

                    <RemoveIcon className={classes.icon} fontSize="small" onClick={removeItem} />
                    <Typography variant="caption">{quantity}</Typography>
                </>
                : null}
            <AddIcon className={classes.icon} fontSize="small" onClick={addItem} />
        </Box>
    )
}

export default AddOrRemoveItem;