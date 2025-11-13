export type IProduct = {
    id: number;
    filter(arg0: (product: { category: string; price: number; subCategory: string; }) => boolean): unknown;
    title: string;
    price: string;
    description: string;
    category: string;
    subCategory: string;
    image: string;
    stock: number;
    color?: string[];
    feature?:string[];
    discount?:number;
    reviews?:string[];
    size?:boolean;
    _id:string;
    quantity?:number;
    selectedSize?:string;
    discountPrice:number
  };
  
  