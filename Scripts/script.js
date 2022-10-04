
function logIn(){
    while (user == undefined){
        user = prompt("Enter your username, do not use any number or symbols");
        if (user == undefined){
            alert("wrong username, enter it again");
        }else{
            alert("welcome " + user);
        }
    }
}

let user = undefined;
logIn();