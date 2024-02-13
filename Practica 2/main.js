class Empleado{
    constructor(id, nombre, anioIngreso, salario){
        this.ID = id
        this.N = nombre
        this.A = anioIngreso 
        this.S = salario 
    }

    tiempoServicio(){
        let currentD = new Date().getFullYear()
        let anioSplit = this.A.split('-')
        return currentD - anioSplit[2]
    }

    setNombre(nombre){
        this.N = nombre
    }

    setSalario(salario){
        this.S = salario
    }

    bono(){
        if(this.tiempoServicio() == 1){
            console.log('el bono es de $' + this.S*0.05)
        }else if(this.tiempoServicio() == 2){
            console.log('el bono es de $' + this.S*0.1)
        }else if(this.tiempoServicio() == 3){
            console.log('el bono es de $' + this.S*0.15)
        }else if(this.tiempoServicio() >= 4){
            console.log('el bono es de $' + this.S*0.2)
        }
    }
}

class Departamento{
    constructor(nombre){
        this.N = nombre
        this.empleadoList = []
        this.gerente
    }

    agregarEmpleado(empleado){
        let posicion =this.empleadoList.indexOf(empleado)

        if(posicion != -1){
            console.log('Ya existe el empleao')
        } else {
            this.empleadoList.push(empleado)
            console.log('Se agrego el empleado correctamente')
        }
    }

    eliminarEmpleado(empleado){
        let posicion =this.empleadoList.indexOf(empleado)
        
        if(posicion != -1){
            this.empleadoList.splice(empleado)
            console.log('Se elimino correctamente')
        } else {
            console.log('No se pudo encontrar el empleado')
        }
    }

    calcularSalarios(){
        let total = 0
        if(this.empleadoList.length>0){
            this.empleadoList.forEach(empleado=>{
                total += empleado.S
            })
        }

        console.log(total)
    }

    setGerente(nombre){
        this.gerente = nombre
    }
}

const empleado1 = new Empleado(5, 'Abdon', '11-02-2015', 400)
const empleado2 = new Empleado(7, 'Mauricio', '03-07-2018', 390)

const departamento1 = new Departamento('Computacion')