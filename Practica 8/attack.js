class Attack {
    constructor(atkname, damage, atktype){
        this.atkname = atkname
        this.damage = damage
        this.atktype = atktype
    }

    getatkname() {
        return this.atkname
    }

    getdmg(){
        let dmg
        let value = Math.random().toFixed(1) * 10
        let modifier = Math.random().toFixed(2) / 5
        if (value % 2 == 0){
          dmg = this.damage + this.damage * modifier
        } else {
          dmg = this.damage - this.damage * modifier
        }
        return Math.floor(dmg)
    }


    gettype() {
        return this.atktype
    }
}

export default Attack