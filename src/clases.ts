import { IFisico, VirtualType } from "./herencia";

class ProductVirtual implements VirtualType {
    price: number = 500;
    paymethod: "debito" | "credito" | "efectivo" = "efectivo";
    nameClient: string = "Mati";
    template: string = "template";
    format: "jpg" | "png" | "pdf" = "jpg";
}

class ProductoFisico implements IFisico {
    productName: string;
    clientAdress: string;
    quantity: number;
    price: number;
    paymethod: "debito" | "credito" | "efectivo";
    nameClient: string;

    constructor(){
        this.productName = "laptop";
        this.clientAdress = "Calle falsa 123";
        this.quantity = 10;
        this.price = 500;
        this.paymethod = "efectivo";
        this.nameClient = "Mati";
    }
}