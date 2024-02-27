class Producto{
    constructor(nombre, precio, cantidad){
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


class Electronico extends Producto{
    constructor(nombre, precio, cantidad, tipo){
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

    stockUpdate(){
        document.getElementById(this.tipo + '_Stock').innerText = parseFloat(document.getElementById(this.tipo + '_Stock').innerText) - this.cantidad
    }

    checkStock(){
        if (parseFloat(document.getElementById(this.tipo + '_Stock').innerText) >= this.cantidad) {
            return 1
        } else {
            return 0
        }
    }
} 


function evaluar(){
    let totalFinal = 0

    let table = document.createElement('table')

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

    for (let i = 1; i <= 4; i++) {

        orden = new Electronico

        let current = i.toString()
    
        orden.nombre = document.getElementById(current + '_Nombre').innerText
        orden.precio = parseFloat(document.getElementById(current + '_Precio').innerText)
        orden.cantidad = document.getElementById(current + '_Comprados').value
        orden.tipo = current

        if (orden.checkStock() == 1){
            let row = document.createElement('tr')
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
    
            orden.stockUpdate()
    
            totalFinal += orden.total()
        } else {
            let row = document.createElement('tr')
            let data = document.createElement('td')
            data.innerHTML = 'No hay suficiente ' + orden.nombre + ' en stock'
            row.appendChild(data)
            table.appendChild(row)
        }
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
}
