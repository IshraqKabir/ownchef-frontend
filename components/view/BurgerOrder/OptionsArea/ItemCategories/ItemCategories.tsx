import { MuiAccordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import { useState } from "react";
import IITemCategory from "../../../../model/IItemCategory";

import ItemCategory from "./ItemCategory/ItemCategory";

interface IProps {
    itemCategories: IITemCategory[]
}

const ItemCategories: React.FC<IProps> = ({ itemCategories }) => {
    const [expandedIC, setExpandedIC] = useState<string | false>(false);

    const handleChange = (idString: string) => {
        setExpandedIC(idString);
    }

    let ics = itemCategories.map(ic => {
        return (<ItemCategory
            key={ic.id}
            itemCategory={ic}
            expandedIC={expandedIC}
            handleChange={handleChange}
        />)
    })

    return (
        <>
            {ics}
        </>
    )
}

export default ItemCategories;