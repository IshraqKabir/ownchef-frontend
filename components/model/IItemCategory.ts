import IProduct from "./IProduct";
import IItem from "./Item";

export default interface IITemCategory {
    id: number;
    name: string;
    items: IItem[];
    product: IProduct;
}