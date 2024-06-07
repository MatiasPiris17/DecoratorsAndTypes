
// ______________OBJETOS________________
interface MyGenericInterface<T, U> {
    MyGenericType: T | U
}

const example: MyGenericInterface<string, number | boolean > = {
    //MyGenericType: 1,
    //MyGenericType: "hola" 
    MyGenericType: false
}


// ______________FUNCIONES________________

function getValue<T>(value: T) {
    console.log(value)
    return value
}
getValue(5)
getValue("Matias")
getValue(true)
getValue(()=>{console.log("hola")})
getValue(async ()=> { return "Promesa" })


// ______________CLASES________________

class GenericClass<T>{
    protected value!: T;

    constructor(Value: { new ():T } ){
        this.value = new Value();    
    }
}

class Alumno {
    public name:string = "Matias";
    public age:number = 22;

    public get NAME(): string {
        return this.name;
    }

    public get AGE(): number {
        return this.age;
    }
}

class University extends GenericClass<Alumno>{
    constructor(){
        super(Alumno)
    }

    public Uni():void{
        console.log(`Hello: ${this.value.name}`)
    }
}

new University().Uni()