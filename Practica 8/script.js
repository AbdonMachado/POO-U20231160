import Attack from './Attack.js'
import Enemy from './Enemy.js'

const atk = new Attack('Fire Breath', 80, 'fire')
console.log(atk.getatkname())

const enemy = new Enemy('dragon', 400 , atk)

console.log(enemy.getname() + ' uses ' + enemy.getatk().getatkname() + ' dealing ' + enemy.getatk().getdmg() + ' ' + enemy.getatk().gettype() + ' damage');