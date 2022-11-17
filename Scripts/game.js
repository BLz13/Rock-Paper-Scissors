weaponsButtons.forEach( weaponButton => {
    weaponButton.onclick = () => {
        const attackName = weaponButton.dataset.weapon;
        const userAttack = weapons.find( weaponSelection => attackName === weaponSelection.weapon);
        const cpuAttack = attackCPU();
        result(userAttack,cpuAttack);
        printResult(userAttack,cpuAttack,resultsArea);
        showResults();
        printScores();
        localStorage.setItem("users", JSON.stringify(users));
    }
})
