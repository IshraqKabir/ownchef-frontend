import { Typography } from "@material-ui/core"
import IITemCategory from "../../model/IItemCategory"
import AppbarView from "../Layout/Appbar/Appbar"


interface IProps {
    itemCategories: IITemCategory[],
};


const Burger: React.FC<IProps> = ({ itemCategories }) => {
    return (
        <>
            <AppbarView />

            {itemCategories.map(ic => {
                return (<Typography key={ic.id}>{ic.name}</Typography>)
            })}
        </>
    )
}

export default Burger