let finalPrice = parseFloat(document.getElementById('Precio').innerText)

const iva = finalPrice*0.13
const costoVoleteria = finalPrice*0.05

document.getElementById('Precio').innerText = (finalPrice + iva + costoVoleteria).toFixed(2)

class Transporte{
    constructor(voleto, precio, estado){
        this.voleto = voleto
        this.precio = precio
        this.estado = estado
    }

    get Voleto(){
        return this.voleto
    }

    
    set Voleto(voleto){
        this.nombre = voleto
    }

    get Precio(){
        return this.precio
    }

    
    set Precio(precio){
        this.precio = precio
    }

    get Estado(){
        return this.estado
    }

    
    set Estado(estado){
        this.cantidad = estado
    }
}


class Cliente extends Transporte{
    constructor(voleto, precio, estado, nombre, dui, telefono, edad){
        super(voleto, precio, estado)
        this.nombre = nombre
        this.dui = dui
        this.telefono = telefono
        this.edad = edad
    }

    get Nombre(){
        return this.nombre
    }

    
    set Nombre(nombre){
        this.tipo = nombre
    }

    get Dui(){
        return this.dui
    }

    
    set Dui(dui){
        this.tipo = dui
    }
    
    get Telefono(){
        return this.telefono
    }

    
    set Telefono(telefono){
        this.tipo = telefono
    }

    get Edad(){
        return this.edad
    }

    
    set Edad(edad){
        this.tipo = edad
    }

    mensaje(mensaje){
        if (this.edad < 18){
        mensaje = 'TIENE QUE SER MAYOR DE EDAD PARA PODER COMPRAR UN TICKET'
        } else {
            if (this.estado !== 'Disponible') {
                mensaje = 'ESTE TICKET NO SE ENCUENTRA DISPONIBLE' 
            } else {
                document.getElementById(this.voleto + '_Disponibilidad').innerText = 'Reservado'
                mensaje = `El cliente ${this.nombre}, compro el voleto A${this.voleto} por un precio de $${this.precio} SU ESPACIO ESTA RESERVADO`
            }
        }
        return mensaje
    } 
} 


function evaluar(){
    orden = new Cliente
    
    orden.voleto = document.getElementById('id_Voleto').value
    orden.precio = parseFloat(document.getElementById('Precio').innerText)
    orden.estado = document.getElementById(orden.voleto + '_Disponibilidad').innerText
    orden.nombre = document.getElementById('name').value
    orden.dui = document.getElementById('dui').value
    orden.telefono = document.getElementById('phone').value
    orden.edad = document.getElementById('age').value

    document.getElementById('info').innerText = orden.mensaje()
}
