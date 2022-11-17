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
            serchUserImg ();
        } else {
            user1 = new User ("dksjuhfgkhdsgf",0);
            user2 = new User ("PC",0);
            users = [user1, user2];
            player2.childNodes[0].textContent = (users[1].name) + ":";
            document.getElementById("userName2").value = users[1].name;
            localStorage.setItem("users", null);
        };
        for (let i = 0; i < scoreArea.length; i++) {
            scoreArea[i].innerHTML = `<p>${users[i].score}</p>`;
        };
    })
}

function attackCPU () {
    let randomAttack = Math.floor (Math.random() * weapons.length);
    return (weapons[randomAttack]);
}

function result(userAttack,cpuAttack) {
    if (userAttack.weapon === cpuAttack.weapon) { //cheks for a draw
        users[0].draw();
        users[1].draw();
    } else {
        if (userAttack.beats === cpuAttack.weapon) { // cheks if user1 won
            users[0].win();
        } else { 
            users[1].win();
        }
    }
}

function printResult(userAttack,cpuAttack,resultsArea) {
    resultsArea.forEach( eachArea => {
        const divBox = document.createElement("div");
        const divImg = document.createElement("img");
        divBox.setAttribute("class", "resultsBox hidden");
        divBox.appendChild(divImg);
        eachArea.insertAdjacentElement("afterbegin", divBox)
    })
    resultsArea[0].firstChild.firstChild.setAttribute("src", userAttack.img);
    resultsArea[2].firstChild.firstChild.setAttribute("src", cpuAttack.img);
    if (userAttack.weapon === cpuAttack.weapon) { //cheks for a draw
        resultsArea[1].firstChild.innerText = "draw"
        resultsArea[0].firstChild.firstChild.classList.add("draw");
        resultsArea[2].firstChild.firstChild.classList.add("draw");
    } else {
        if (userAttack.beats === cpuAttack.weapon) { // cheks if user1 won
            resultsArea[1].firstChild.innerText = ` ${user1.name} wins `
            resultsArea[0].firstChild.firstChild.classList.toggle("winner");
            resultsArea[2].firstChild.firstChild.classList.toggle("looser");
        } else {
            resultsArea[1].firstChild.innerText = ` ${user2.name} wins `
            resultsArea[0].firstChild.firstChild.classList.toggle("looser");
            resultsArea[2].firstChild.firstChild.classList.toggle("winner");
        }
    }
    resultsArea[1].firstChild.classList.toggle("resultsText")
}

function showResults() {
    document.querySelectorAll(".hidden").forEach( result => {
        result.style.animationDirection = "normal";
    })
}

function printScores() {
    for (let i = 0; i < scoreArea.length; i++) {
        scoreArea[i].innerHTML = `<p>${users[i].score}</p>`;
    }    
}