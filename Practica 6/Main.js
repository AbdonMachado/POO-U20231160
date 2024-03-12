const cuboImg = document.getElementById("cuboImg")

class Cubo{
    constructor(nombre, textura, nombreImg, dimension){
        this.dimension = dimension
        this.nombre = nombre
        this.textura = textura
        this.img = nombreImg
    }
}

class Pasto extends Cubo {
    ejecutar(){
        cuboImg.setAttribute('src',"https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/Grass_Block_JE4.png")
        document.getElementById("out").innerText = "El bloque de pasto da uno de tierra"
    }
}


class Diamante extends Cubo {
    ejecutar(){
        cuboImg.setAttribute('src',"https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Block_of_Diamond_JE5_BE3.png")
        document.getElementById("out").innerText = "El bloque de diamante da 9 diamantes"
    }
}

class Carbon extends Cubo {
    ejecutar(){
        cuboImg.setAttribute('src',"https://minecraft.wiki/images/Block_of_Coal_JE3_BE2.png")
        document.getElementById("out").innerText = "El bloque de carbon da 9 de carbon"
    }
}

class Madera extends Cubo {
    ejecutar(){
        cuboImg.setAttribute('src',"https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Oak_Planks.png")
        document.getElementById("out").innerText = "El bloque de madera da uno de madera"
    }
}

function descripcion(tipo){
    let cubo = new tipo
    cubo.ejecutar()
}
