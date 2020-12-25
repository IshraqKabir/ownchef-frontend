import IOrderedItem from "./IOrderedItem";

export default interface Order {
    id: number;
    items: IOrderedItem[];
}

