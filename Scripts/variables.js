const weaponsButtons = document.querySelectorAll('.weapons');

const weapons = [
    
    rock = new Weapon ('rock','scissors','./Images/Rock.png'),

    paper = new Weapon ('paper','rock','./Images/Paper.png'),

    scissors = new Weapon ('scissors','paper','./Images/Scissors.png')

];

const resultsArea = document.querySelectorAll(".results");

const scoreArea = document.querySelectorAll(".score");

const icon = document.getElementById("refresh");

const sections = [document.getElementById("menu"), document.getElementById("logIn"), document.getElementById("game")];

const arrowButtons = document.querySelectorAll(".arrow");

const player1 = document.getElementById("player1");

const player2 = document.getElementById("player2");

const url = `https://api.thecatapi.com/v1/breeds`;

const api_key = "live_kNRz6Jpp7CifPxXuEeJhbt8Qn3eCWpfgx7m7UIkbDhXQ0fM0gY2sDypZ3PV0Qh8B"

let storedBreeds = []

let users = [];

let user1;

let user2;