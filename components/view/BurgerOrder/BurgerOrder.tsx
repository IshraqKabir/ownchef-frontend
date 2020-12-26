import { useState, useContext, useEffect } from "react";
import IITemCategory from "../../model/IItemCategory"
import AppbarView from "../Layout/Appbar/Appbar"
import OptionsArea from "./OptionsArea/OptionsArea"

import GlobalOrdersState from "../../contexts/Orders/GlobalOrdersState";
import { useIsMounted } from "../../custom-hooks/useIsMounted";
import OrdersContext from "../../contexts/Orders/OrdersContext";

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