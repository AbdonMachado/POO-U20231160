class Espada{
  constructor(dmg){
    this.dmg = dmg
  }

  get Dmg(){
    return this.dmg
  }

  set Dmg(dmg){
    this.dmg = dmg
  }

  crit(){
    let value = Math.random().toFixed(2)
    if (value > 0.1){
      return this.dmg
    } else {
      return Math.floor(this.dmg * 1.5)
    }
  }
}

class Mob{
  constructor(hp, name){
  this.hp = hp
  this.name = name
  }

  get Hp(){
    return this.hp
  }

  set Hp(hp){
    this.hp = hp
  }

  get Name(){
    return this.name
  }

  set Name(name){
    this.name = name
  }

  hit(swordDmg){
    this.hp = this.hp - swordDmg
    if (this.hp > 0){
      this.write()
    } else {
      document.getElementById('health').innerText = `el ${this.name} ha sido derrotado`
      document.querySelector('.zombie').style.transform = 'rotate(90deg)'
    }

    document.getElementById('dmgTaken').innerText = swordDmg 
  }

  write(){
    document.getElementById('health').innerText = this.hp
  }
}


zombie = new Mob
zombie.Hp = 200
zombie.name = "zombi"
zombie.write()

piedra = new Espada
piedra.Dmg = 4

hierro = new Espada
hierro.Dmg = 5

diamante = new Espada
diamante.Dmg = 7


document.getElementById('attackButton').addEventListener('click', function() {
  document.querySelector('.sword').style.transform = 'rotate(45deg)';
  zombie.hit(diamante.crit())
  setTimeout(function() {
    document.querySelector('.sword').style.transform = 'rotate(0deg)';
  }, 500);
});