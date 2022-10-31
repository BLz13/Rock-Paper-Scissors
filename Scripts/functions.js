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