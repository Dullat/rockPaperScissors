//computr choice
function computerSel() {
    const choices = ["rock", "paper", "scissor"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

// play 

function play(playerSel,computerSel) {
    if(playerSel === computerSel){
        console.log("draw");
        return "draw";
    }else if (
        playerSel === "rock" && computerSel === "scissor" ||
        playerSel === "scissor" && computerSel === "paper" ||
        playerSel === "paper" && computerSel === "rock"
    ){
        console.log("you won");
        return "win";
    }else {
        console.log("u lose");
        return "lose";
    }
}

function game(){
    let wins = 0;
    let draws = 0;
    for(let i = 0; i < 5; i++){
        let playerSel = prompt("enter ur choice : rock, paper, scissor");
        splayerSel = playerSel.toLowerCase();
        let computer = computerSel();

        let result = play(playerSel,computer);
        
        if (result === "win")
            wins++;
        else if (result === "draw")
            draws++;
    }

    if (wins + draws > 2)
        console.log(" congrats you won");
        else console.log("sry u lose");
}
game();