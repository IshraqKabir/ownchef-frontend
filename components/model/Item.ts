import IImage from "./IImage";

export default interface IItem {
   id: number;
   name: string;
   stock?: number;
   price: number;
   top_view_image?: IImage; 
   side_view_image?: IImage;
}