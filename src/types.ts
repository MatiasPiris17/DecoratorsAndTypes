type ProductBase = {
    price: number;
    paymethod: "debito" | "credito" | "efectivo";
    nameClient: string;
};

type PaymentMethodType = "debito" | "credito" | "efectivo";

type ProductBaseType = {
    price: number;
    paymethod: PaymentMethodType;
    nameClient: string;
};

export {
    ProductBase,
    PaymentMethodType,
    ProductBaseType
}

type Perro = {
    nombre: string;
    raza: string;
    edad: number;
    ladrar: string;
}

type Gato = {
    nombre: string;
    raza: string;
    edad: number;
    maullar: string;
}

type SeleccionarAnimalT<T extends "perro" | "gato"> = T extends "perro" ? Perro : Gato 

function SeleccionarAnimal<T extends "perro" | "gato">  
    (animal: SeleccionarAnimalT<T>) {
        console.log(animal)
}


SeleccionarAnimal<"perro">()