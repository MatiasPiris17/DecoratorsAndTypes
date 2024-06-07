import 'reflect-metadata'

class User {
    @ValidateAge()
    public myInfo = (@TitleCase() name:string, age:number) => {
        console.log({
            name,
            age
        })
    }
}

