import { IProductBase } from "./interfaces";
import { ProductBase } from "./types";

interface IFisico extends IProductBase{
    productName:string,
    clientAdress:string,
    quantity:number,
}

type VirtualType = ProductBase & {
    template:string;
    format: 'jpg' | 'png' | 'pdf'
}

export {
    IFisico,
    VirtualType
}