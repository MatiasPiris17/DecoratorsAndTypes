import { PaymentMethodType } from "./types";

interface IProductBase { }

interface IProductBase {
    price: number;
    paymethod: "debito" | "credito" | "efectivo";
    nameClient: string;
}

interface IProductBase2 {
    price: number;
    paymethod: PaymentMethodType;
    nameClient: string;
}

export {
    IProductBase2,
    IProductBase
}