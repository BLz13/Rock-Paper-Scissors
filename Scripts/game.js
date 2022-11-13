const weaponsButtons = document.querySelectorAll('.weapons')

const weapons = [
    
    rock = new Weapon ('rock','scissors','./Images/Rock.png'),

    paper = new Weapon ('paper','rock','./Images/Paper.png'),

    scissors = new Weapon ('scissors','paper','./Images/Scissors.png')
]

weaponsButtons.forEach( weaponButton => {
    weaponButton.onclick = () => {
        const attackName = weaponButton.dataset.weapon;
        const attack = weapons.find( weaponSelection => attackName === weaponSelection.weapon);
        const cpuAttack = attackCPU(attack);
        result(attack,cpuAttack)
    }
})

function attackCPU (attack) {
    let randomAttack = Math.floor (Math.random() * weapons.length);
    if (weapons[randomAttack] === attack) {
        randomAttack = Math.floor(Math.random () * weapons.length);
    }
    return (weapons[randomAttack]);
}

function result(attack,cpuAttack) {
    
}