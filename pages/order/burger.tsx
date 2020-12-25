import { GetStaticProps } from "next";
import IITemCategory from "../../components/model/IItemCategory";
import BurgerOrder from "../../components/view/BurgerOrder/BurgerOrder";

import url from "../../components/utils/url";

const ONE_DAY = 24 * 60 * 60;

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`${url}/api/1/item-category/all`)
    const itemCategories: IITemCategory[] = await res.json();

    return {
        props: {
            itemCategories: itemCategories
        },
        revalidate: ONE_DAY,
    }
}

interface IProps {
    itemCategories: IITemCategory[],
};

const Burger: React.FC<IProps> = ({ itemCategories }) => {

    return (
        <BurgerOrder itemCategories={itemCategories} />
    )
}

export default Burger;
