import { useEffect, useState } from "react";
import IITemCategory from "../../../../../model/IItemCategory";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

import { withStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

import Items from "./Items/Items";

interface IProps {
    itemCategory: IITemCategory;
    expandedIC: string | false;
    handleChange: Function;
}

const Accordion = withStyles({
    root: {
        border: "1px solid rgba(0, 0, 0, .125)",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0
        },
        "&:before": {
            display: "none"
        },
        "&$expanded": {
            marginTop: -5
        }
    },
    expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: "rgba(0, 0, 0, .03)",
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        minHeight: 56,
        textTransform: 'capitalize',
        "&$expanded": {
            minHeight: 56
        }
    },
    content: {
        "&$expanded": {
            margin: "12px 0"
        }
    },
    expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiAccordionDetails);

const ItemCategories: React.FC<IProps> = ({ itemCategory, expandedIC, handleChange }) => {

    const checkExpanded = (): boolean => {
        console.log('checking')
        return expandedIC === `${itemCategory.id}`
    }

    return (
        <Accordion
            square
            expanded={checkExpanded()}
            onChange={() => handleChange(`${itemCategory.id}`)}
        >
            <AccordionSummary
                aria-controls={`panel${itemCategory.id}d-content`}
                id={`panel${itemCategory.id}d-header`}
            >
                <Typography>{itemCategory.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Items items={itemCategory.items} />
            </AccordionDetails>
        </Accordion>
    )
}

export default ItemCategories;