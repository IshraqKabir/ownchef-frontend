import IItem from "./Item";

export default interface IOrderedItem {
    item: IItem;
    description?: string;
    quantity: number;
}