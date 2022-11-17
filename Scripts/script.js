if (!(JSON.parse(localStorage.getItem("users")) === null)) {
    const usersData = JSON.parse(localStorage.getItem("users"));
    recoverData(usersData);
} else {
    user1 = new User ("dksjuhfgkhdsgf",0);
    user2 = new User ("PC",0);
    users = [user1, user2]
    player2.childNodes[0].textContent = (users[1].name) + ":";
    document.getElementById("userName2").value = users[1].name;
}

arrowButtons.forEach( arrowButton => {
    arrowButton.onclick = () => {
        let indexActive;
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
                if (!(users[0].name === "dksjuhfgkhdsgf")){ 
                    sections[1].style.animation = "fadeOut 2s ease-in 0s 1 normal forwards";
                    sections[2].style.animation = "fadeIn 2s ease-in 0s 1 normal forwards";
                    sections[1].className = "inactive";
                    sections[2].className = "active";
                }
            break;
        }
    }
});

document.getElementById("userName1").onchange = () => {
    users[0].name = document.getElementById("userName1").value;
    player1.childNodes[0].textContent = (users[0].name) + ":";
    localStorage.setItem("users", JSON.stringify(users));
    serchUserImg ();
};

icon.addEventListener("click" , () => { icon.classList.toggle("spin") });