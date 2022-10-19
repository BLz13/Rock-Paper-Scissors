const adding =(a,b) => {

    return a+b;

}

const substracting = (a,b) => {

    return a-b;
    
}

const divide = (a,b) => {
    if (b === 0){
        return console.log("u can't divide by 0")
    }else{
        return a/b;
    }
}

const exponent = (a,b) => {
    if ((a === 0) && (b === 0)){
        return console.log("the result is indeterminate");
    }else{
        if (b === 0){
            return 1;
        }else{
            a*(exponent(a,(b-1)))
        }
    }
}

const percentage3Variables = (a,b) => {
    if ((b) === 0){
        return console.log("u haven't play any game yet")
    }else{
        return Math.round((divide(a,b)*100));
    }
}

function Compare(objet1,objet2){
    if (objet1.gamesWon<objet2.gamesWon){
        console.log("The highest score was: " + objet2.score + " and the winner is: "+objet2.userName);
        return false;
    }else{
        console.log("The highest score was: " + objet1.score + " and the winner is: "+objet1.userName);
        return true;
    }
}

function LogIn(){
    while ((selectedName == undefined) || (selectedName == "")){
        selectedName = prompt("Enter your username, do not use any number or symbols");
        if ((selectedName == undefined) || (selectedName == "")){
            alert("wrong username, enter it again");
        }else{
            alert("welcome " + selectedName);
        }
    }
}
class User {

    constructor (name) {
        this.userName = name;
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

let gamesPlayed = 0;
let selectedName = undefined;
LogIn();
const users = [];
let user1 = new User (selectedName);
let userPC = new User ("PC");
/* por el momento no se tienen datos del juego asi que se va a simular 
un ipotetico caso en el que el jugador jugo 10 paritdas, de las cuales:
gano 2, empato 3 y perdio el resto, para testear las funciones hechas*/
// ganar suma 3, empatar 1 y perder ninguno
user1.win();
user1.draw();
userPC.draw();
userPC.win();
userPC.win();
user1.draw()
userPC.draw()
user1.draw()
userPC.draw()
userPC.win();
user1.win();
userPC.win();
userPC.win();
console.log(user1);
console.log(userPC);
if (Compare(user1,userPC)){
    console.log("U won: " + percentage3Variables(user1.gamesWon,gamesPlayed) + "% of the games played.");
}else{
    console.log("U lost: " + percentage3Variables(userPC.gamesWon,gamesPlayed) + "% of the games played.");
}