class Materia {
    constructor(nombre){
        this.nombre = nombre
    }

    horario(){
        console.log(`estoy estudiando ${this.nombre}`)
    }
}

class Manana extends Materia{
    horario(){
        console.log(`tengo ${this.nombre} en la mañana`)
    }
}

class Tarde extends Materia{
    horario(){
        console.log(`tengo ${this.nombre} en la tarde`)
    }
}

class Noche extends Materia{
    horario(){
        console.log(`tengo ${this.nombre} en la noche`)
    }
}

let poo = new Manana('Programacion orientada aobjetos')
let mate3 = new Tarde('Desarrollo del pensamiento matematico avanzado')
let fisica = new Noche('Introduccion a la mecanica')

poo.horario()
mate3.horario()
fisica.horario()