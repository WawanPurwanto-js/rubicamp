class Hero{
    constructor(nama, type, movement, attack,health,mana){
        this.name = name;
        this.type = type;
        this.movement = movement;
        this.attack = attack;
        this.health = healt;
        this.mana = mana;
    }
    attack(hero){
        hero.health -= this.attack;
        console,log(this.name + "")
    }
}