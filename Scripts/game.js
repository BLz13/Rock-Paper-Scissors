let gamesPlayed = 0;

const weaponsButtons = document.querySelectorAll('.weapons');

const weapons = [
    
    rock = new Weapon ('rock','scissors','./Images/Rock.png'),

    paper = new Weapon ('paper','rock','./Images/Paper.png'),

    scissors = new Weapon ('scissors','paper','./Images/Scissors.png')

]

const resultsArea = document.querySelectorAll(".results");

const scoreArea = document.querySelectorAll(".score");

for (let i = 0; i < scoreArea.length; i++) {
    scoreArea[i].innerText = users[i].score;
}

weaponsButtons.forEach( weaponButton => {
    weaponButton.onclick = () => {
        const attackName = weaponButton.dataset.weapon;
        const userAttack = weapons.find( weaponSelection => attackName === weaponSelection.weapon);
        const cpuAttack = attackCPU();
        result(userAttack,cpuAttack);
        printResult(userAttack,cpuAttack,resultsArea);
        showResults();
        printScores();
    }
})

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
        scoreArea[i].innerText = users[i].score;
    }    
}