const icon = document.getElementById("refresh");

const sections = [document.getElementById("menu"), document.getElementById("logIn"), document.getElementById("game")];

const arrowButtons = document.querySelectorAll(".arrow");

const player1 = document.getElementById("player1");

const player2 = document.getElementById("player2");

let users = [];

let user1;

let user2;

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

function recoverData(usersData) {
    Swal.fire({
        title:`Are you ${usersData[0].name}?`,
        icon: 'question',
        backdrop: `rgba(0,0,0)`,
        color: '#fea82f',
        background: '#0000',
        confirmButtonColor: '#ffbe33',
        iconColor: '#ffbe33',
        denyButtonColor: '#7a7d7a',
        confirmButtonText: "I am",
        denyButtonText: "I ain't",
        showDenyButton: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            users = [
                user1 = new User (usersData[0].name,usersData[0].score),
                user2 = new User (usersData[1].name,usersData[1].score)
            ]
            sections[0].className = "inactive";
            sections[1].className = "inactive";
            sections[2].style.animation = "fadeIn 2s ease-in 0s 1 normal forwards";
            sections[2].className = "active";
            player1.childNodes[0].textContent = (users[0].name) + ":";
            player2.childNodes[0].textContent = (users[1].name) + ":";
            document.getElementById("userName2").value = users[1].name;
        } else {
            user1 = new User ("dksjuhfgkhdsgf",0);
            user2 = new User ("PC",0);
            users = [user1, user2];
            player2.childNodes[0].textContent = (users[1].name) + ":";
            document.getElementById("userName2").value = users[1].name;
        };
        for (let i = 0; i < scoreArea.length; i++) {
            scoreArea[i].innerText = users[i].score;
        };
    })
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
};

icon.addEventListener("click" , () => { icon.classList.toggle("spin") });