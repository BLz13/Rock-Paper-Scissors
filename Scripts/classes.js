class User {
    constructor (name,score) {
        this.name = name;
        this.score = score;
    }
    draw(){
        this.score += 1;
    }
    win(){
        this.score += 3;
    }
}

class Weapon {
    constructor (weapon,beats,img) {
        this.weapon = weapon;
        this.beats = beats;
        this.img = img;
    }
}