//______ LOGICA DESTRAS DE UN DECORADOR ______
function SetAge(age: number) {
    return function <T extends { new(...arg: any[]): {} }>(constructor: T) {
        return class extends constructor {
            age!: number;
            constructor(...arg: any[]) {
                super();
                this.age = age
            }
        }
    }
}

@SetAge(17)
class Person {
    age!: number
}

function ValidateAge(age: number) {
    return function (target: any, prop: string) {
        let assigneAge = target[prop]
        Object.defineProperty(target, prop, {
            set: (newAge: number) => {
                if (newAge < age) throw new Error('error')
                assigneAge = newAge;
            },
            get: () => assigneAge,
        })
    }
}


class AlumnoUniversity {
    @ValidateAge(18)
    age: number = 19

    public get AGE(): number {
        return this.age;
    }

    public set AGE(value: number) {
        this.age = value;
    }


}

export {
    Person,
    AlumnoUniversity
}
