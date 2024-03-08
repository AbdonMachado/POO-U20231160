class Chucho {
    constructor(nombre){
        this.nombre = nombre
    }

    descripcion(){
        console.log(`${this.nombre} es un perro`)
    }
}

class Rottweiler extends Chucho{
    descripcion(){
        console.log(`${this.nombre} es un perro de raza rottweiler`)
    }
}

class Golden extends Chucho{
    descripcion(){
        console.log(`${this.nombre} es un perro de raza golden retriever`)
    }
}

let lester = new Rottweiler('Lester')
let whiskey = new Golden('Whiskey')

lester.descripcion()
whiskey.descripcion()