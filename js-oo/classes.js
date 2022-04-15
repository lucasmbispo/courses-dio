class Animal {

    constructor(type = 'animal'){
        this.type = type
    }

    get type(){
        return this._type
    }

    set type(val){

        return this._type = val.toUpperCase()
    }

    makeSound(){
        console.log('Making Animal Sound')
    }

}

let a = new Animal()
console.log(a.type) // Animal

class Cat extends Animal {

    constructor(){
        super('cat')
    }

    makeSound(){

        console.log('Making Animal Sound')
        super.makeSound()
        console.log('Meow!')
    }
}

let b = new Cat()
console.log(b.type) //CAT
