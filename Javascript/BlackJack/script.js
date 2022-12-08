class BlackJack {
    constructor(player1Score, player2Score) {
        this.player1Score = player1Score;
        this.player2Score = player2Score;
    }
    calculateSum() {
        console.log(this.player1Score + this.player2Score)
    }
    playerOne(player1) {
        this.player1 = player1;
        console.log(this.player1)
    }
    checkWinner() {
        if(this.player1Score > this.player2Score) {
            alert("player1 je pobednik");
        } else if(this.player1Score == this.player2Score) {
            alert("Izjednaceno je");
        } else {
            alert("Pobednik je player2");
        }
    }
}