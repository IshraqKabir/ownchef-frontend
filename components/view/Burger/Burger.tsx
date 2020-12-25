import { Typography } from "@material-ui/core"
import IITemCategory from "../../model/IItemCategory"
import AppbarView from "../Layout/Appbar/Appbar"
import OptionsArea from "./OptionsArea/OptionsArea"


interface IProps {
    itemCategories: IITemCategory[],
};


const Burger: React.FC<IProps> = ({ itemCategories }) => {

    return (
        <>
            <AppbarView />

            <OptionsArea itemCategories={itemCategories} />

        </>
    )
}

export default Burger