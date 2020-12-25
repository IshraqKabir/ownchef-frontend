import { Box } from "@material-ui/core";
import IItem from "../../../../../../model/Item";
import Item from "./Item/Item";

interface IProps {
    items: IItem[];
}

const Items: React.FC<IProps> = ({ items }) => {

    const itemsList = items.map(item => {
        return (
            <Item key={item.id} item={item} />
        )
    })

    return <Box display="flex" flexDirection="column" minWidth="300px">
        {itemsList}
    </Box>
}

export default Items;