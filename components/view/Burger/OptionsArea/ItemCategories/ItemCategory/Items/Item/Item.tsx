import { Typography } from "@material-ui/core";
import IItem from "../../../../../../../model/Item";

interface IProps {
    item: IItem;
}

const Item: React.FC<IProps> = ({ item }) => {
    return (<Typography>{item.name}</Typography>)
}

export default Item;