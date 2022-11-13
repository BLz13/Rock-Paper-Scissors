class User {
    constructor (name) {
        this.name = name;
        this.score = 0;
        this.gamesWon = 0;
        this.gamesTie = 0;
    }
    draw(){
        this.score += 1;
        this.gamesTie += 1;
        gamesPlayed += 1;
    }
    win(){
        this.score += 3;
        this.gamesWon += 1;
        gamesPlayed += 1;
    }
}

class Weapon {
    constructor (weapon,beats,img) {
        this.weapon = weapon;
        this.beats = beats;
        this.img = img;
    }
}