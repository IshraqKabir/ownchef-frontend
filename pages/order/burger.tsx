import { GetStaticProps } from "next";
import IITemCategory from "../../components/model/IItemCategory";
import BurgerView from "../../components/view/Burger/Burger";

import url from "../../components/utils/url";

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`${url}/api/item-category/all`)
    const itemCategories: IITemCategory[] = await res.json();

    return {
        props: {
            itemCategories: itemCategories
        },
        revalidate: 10000,
    }
}

interface IProps {
    itemCategories: IITemCategory[],
};

const Burger: React.FC<IProps> = ({ itemCategories }) => {

    return (
        <BurgerView itemCategories={itemCategories} />
    )
}

export default Burger;
