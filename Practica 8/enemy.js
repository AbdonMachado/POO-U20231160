class Enemy {
    constructor(name, health, atk_1){
        this.name = name
        this.health = health
        this.atk_1 = atk_1
    }

    getname() {
        return this.name
    }

    gethp(){
        return this.health
    }


    getatk() {
        return this.atk_1
    }
}

export default Enemy