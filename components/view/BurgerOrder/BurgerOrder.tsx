import { Typography } from "@material-ui/core"
import IITemCategory from "../../model/IItemCategory"
import AppbarView from "../Layout/Appbar/Appbar"
import OptionsArea from "./OptionsArea/OptionsArea"

import GlobalOrdersState from "../../contexts/Orders/GlobalOrdersState";

interface IProps {
    itemCategories: IITemCategory[],
};


const Burger: React.FC<IProps> = ({ itemCategories }) => {

    return (
        <GlobalOrdersState>
            <AppbarView />

            <OptionsArea itemCategories={itemCategories} />

        </GlobalOrdersState>
    )
}

export default Burger