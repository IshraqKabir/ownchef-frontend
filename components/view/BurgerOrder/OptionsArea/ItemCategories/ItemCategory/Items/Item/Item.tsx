import { Box, Typography, withStyles } from "@material-ui/core";
import IItem from "../../../../../../../model/Item";

import MuiDivider from '@material-ui/core/Divider';
import AddOrRemoveItem from "./AddOrRemoveItem/AddOrRemoveItem";

interface IProps {
    item: IItem;
}

const Divider = withStyles(theme => ({
    root: {
        marginTop: 10,
    }
}))(MuiDivider);

const Item: React.FC<IProps> = ({ item }) => {

    return (
        <Box display="flex" flexDirection="column" padding={1} paddingBottom={0}>
            <Typography variant="subtitle2" component="h2">{item.name}</Typography>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle2" component="h3">tk.
                <Box display="inline" fontWeight="bold">
                        {item.price}
                    </Box>
                </Typography>
                <AddOrRemoveItem item={item} />
            </Box>
            <Divider />
        </Box>
    )
}

export default Item;