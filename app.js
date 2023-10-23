function comChoice(){
    let selection = ["rock", "paper", "scissor"];

    let itemNum = Math.floor(Math.random() * 3);

    return selection[itemNum];
}

function game(comSel, usrSel) {
    if(comSel === usrSel){
        alert("draw");
    }else if(
        usrSel === "rock" && comSel === "scissor" ||
        usrSel === "scissor" && comSel === "paper" ||
        usrSel === "paper" && comSel === "rock"
    ){ 
        alert("you Won" );
    }else alert("you Lose" );
}

function play() {
    let comSel = comChoice();
    let usrSelRaw = prompt("Enter ur Choice: ROCK, PAPER, SCISSOR");
    let usrSel = usrSelRaw.toLowerCase();

    if((usrSel.match("rock") || usrSel.match("paper") || usrSel.match("scissor")) && (usrSel.length < 7)){
        console.log("correct-input");
        game(comSel, usrSel);
    }else {
        alert("wrong input: try again");
        play();
    }
}

play();