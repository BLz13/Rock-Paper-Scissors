let gamesPlayed = 0;

const sections = [document.getElementById("menu"), document.getElementById("logIn"), document.getElementById("game")];

const arrowButtons = document.querySelectorAll(".arrow");

const user1NameInput = document.getElementById("userName1");

const user2NameInput = document.getElementById("userName2");

const player1 = document.getElementById("player1");

const player2 = document.getElementById("player2");

const player1Score = document.getElementById("player1Score");

const player2Score = document.getElementById("player2Score");

let gamemode;

const users = [];

let selectedName1 = "dksjuhfgkhdsgf";

let selectedName2 = "PC";

let user1 = new User (selectedName1);

let user2 = new User (selectedName2);

arrowButtons.forEach( arrowButton => {  
    arrowButton.onclick = () => {
        let indexActive;
        switch (arrowButton.id) {
            case "singlePlayerArrow" :
                gamemode = 1;
                player2.childNodes[0].textContent = (user2.name) + ":";
                player2Score.innerText = user2.score;
                user2NameInput.value = user2.name;
                break;
            case "multiPlayerArrow" :
                gamemode = 2;
                user2NameInput.removeAttribute("disabled");
                break;
        }
        for (let i = 0; i<sections.length; i++){
            if (sections[i].className == "active"){
                 indexActive = i;
                break
            }
        }
        switch (indexActive) {
            case 0 :
                sections[0].style.animation = "fadeOut 2s ease-in 0s 1 normal forwards";
                sections[1].style.animation = "fadeIn 2s ease-in 0s 1 normal forwards";
                sections[0].className = "inactive";
                sections[1].className = "active";
                break;
            case 1 :
                if (gamemode === 2){
                    if ((!(user1.name === "dksjuhfgkhdsgf")) && (!(user2.name === "PC"))){ 
                        sections[1].style.animation = "fadeOut 2s ease-in 0s 1 normal forwards";
                        sections[2].style.animation = "fadeIn 2s ease-in 0s 1 normal forwards";
                        sections[1].className = "inactive";
                        sections[2].className = "active";
                    }
                } else {
                    if (!(user1.name === "dksjuhfgkhdsgf")){ 
                        sections[1].style.animation = "fadeOut 2s ease-in 0s 1 normal forwards";
                        sections[2].style.animation = "fadeIn 2s ease-in 0s 1 normal forwards";
                        sections[1].className = "inactive";
                        sections[2].className = "active";
                    }
                }
                break;
        }
    }
});

user1NameInput.onchange = () => {
    selectedName1 = user1NameInput.value;
    user1.name = selectedName1;
    player1.childNodes[0].textContent = user1.name + ":";
    player1Score.innerText = user1.score;
    localStorage.setItem("user1", JSON.stringify(user1));
    //la idea es recuperar los datos del local storage en caso de reiniciar
};

user2NameInput.onchange = () => {
    selectedName2 = user2NameInput.value;
    user2.name = selectedName2;
    player2.childNodes[0].textContent = (user2.name) + ":";
    player2Score.innerText = user2.score;
    localStorage.setItem("user2", JSON.stringify(user2));
};