class Producto{
    constructor(nombre, precio, cantidad){          //constructor base
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    get Nombre(){
        return this.nombre
    }

    
    set Nombre(nombre){
        this.nombre = nombre
    }

    get Precio(){
        return this.precio
    }

    
     set Precio(precio){
        this.precio = precio
    }

    get Cantidad(){
        return this.cantidad
    }

    
     set Cantidad(cantidad){
        this.cantidad = cantidad
    }
}


class Ordenar extends Producto{
    constructor(nombre, precio, cantidad, tipo){        //clase heredara
        super(nombre, precio, cantidad)
        this.tipo = tipo
    }

    get Tipo(){
        return this.tipo
    }

    
     set Tipo(tipo){
        this.tipo = tipo
    }

    total(){
        return this.precio*this.cantidad
    }
} 


function evaluar(){
    let totalFinal = 0

    let table = document.createElement('table')                 //crea una tabla en html

    document.getElementById('orden').appendChild(table)

    let row_1 = document.createElement('tr')
    let header_1 = document.createElement('th')
    header_1.innerHTML = 'Producto'
    let header_2 = document.createElement('th')
    header_2.innerHTML = 'Cantidad'
    let header_3 = document.createElement('th')
    header_3.innerHTML = 'Total'

    row_1.appendChild(header_1)
    row_1.appendChild(header_2)
    row_1.appendChild(header_3)
    table.appendChild(row_1)

    for (let i = 1; i <= 4; i++) {          //El codigo se repite gracias a la forma en la que manda a llamar a las ID 

        let orden = new Ordenar

        let current = i.toString()          //gracias al 'for' se puede editar la ID mas adelante
    
        orden.nombre = document.getElementById(current + '_Nombre').innerText
        orden.precio = parseFloat(document.getElementById(current + '_Precio').innerText)
        orden.cantidad = document.getElementById(current + '_Comprados').value
        orden.tipo = current

        let row = document.createElement('tr')                                                  //Crea una table row nueva por cada producto
        let data_1 = document.createElement('td')
        let data_2 = document.createElement('td')
        let data_3 = document.createElement('td')
        data_1.innerHTML = orden.nombre
        data_2.innerHTML = orden.cantidad
        data_3.innerHTML = '$' + orden.total().toFixed(2)
        row.appendChild(data_1)
        row.appendChild(data_2)
        row.appendChild(data_3)
        table.appendChild(row)
    
        totalFinal += orden.total()                                                             //trackea el total a pagar
    }

    let Bottomrow = document.createElement('tr')
    let bottom_1 = document.createElement('th')
    let bottom_2 = document.createElement('th')
    let bottom_3 = document.createElement('th')
    bottom_1.innerHTML = 'Total'
    bottom_2.innerHTML = '      '
    bottom_3.innerHTML = '$' + totalFinal.toFixed(2)
    Bottomrow.appendChild(bottom_1)
    Bottomrow.appendChild(bottom_2)
    Bottomrow.appendChild(bottom_3)
    table.appendChild(Bottomrow)

    let Checkrow = document.createElement('tr')
    let check_1 = document.createElement('th')
    let check_2 = document.createElement("INPUT")                                       //La tabla tiene un checkbox que sirve para indicar el estado de la orden
    check_1.innerHTML = 'Listo para entregar'
    check_2.setAttribute("type", "checkbox")
    Bottomrow.appendChild(check_1)
    Bottomrow.appendChild(check_2)
    table.appendChild(Checkrow)
}