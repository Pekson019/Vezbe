let player1 = document.querySelector("#player1");
let player2Btn = document.querySelector("#player2");
let player1_score = 0;
let player2_score = 0;
player1.addEventListener("click" , () => {
    let score = document.querySelector("#score1");
    let randomNumber = Math.floor((Math.random() * 6)+ 1);
    player1_score += randomNumber;
    score.innerText = player1_score;

})



player2Btn.addEventListener("click" , () => {
    
    let score = document.querySelector("#score2")
    let randomNumber = Math.floor((Math.random() * 6)+ 1);
    player2_score += randomNumber;
    score.innerText = player2_score;
    })

let uzmiPrviScore = 0;

let playerHold = document.querySelectorAll(".hold");
console.log(playerHold);

playerHold.forEach(player => {
    player.addEventListener("click", () => {
        let score1 = document.querySelector("#score1");
        let score2 = document.querySelector("#score2");
        console.log(score1.innerText)
    })
})


   
