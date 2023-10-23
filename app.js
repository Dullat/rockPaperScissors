let choice = document.querySelectorAll(".choice");
choice = Array.from(choice);

let pScore = document.querySelector(".player-score");
let cScore = document.querySelector(".bot-score");

let pNum = 0;
let cNum = 0;
let rounds = 0;

let plrChoice = document.querySelector(".show-choice-plr");
let botChoice = document.querySelector(".show-choice-bot");

let tempResult = document.querySelector(".temp-result");


function comChoice() {
    let selection = ["rock", "paper", "scissor"];

    let itemNum = Math.floor(Math.random() * 3);

    return selection[itemNum];
}

let game = function (value) {
    value.addEventListener("click", () => {

        rounds += 1;
        let comSel = comChoice();
        let usrSel = value.getAttribute("value");

        console.log(usrSel);

        if (comSel === usrSel) {
            //alert("draw");
            tempResult.style.color = "gray";
            tempResult.textContent = "round: " + rounds + " = Draw";
        } else if (
            usrSel === "rock" && comSel === "scissor" ||
            usrSel === "scissor" && comSel === "paper" ||
            usrSel === "paper" && comSel === "rock"
        ) {
            //alert("you Won");
            pNum += 1;
            pScore.textContent = pNum;
            tempResult.style.color = "green";
            tempResult.textContent = "round: " + rounds + " = YoU WoN";
        } else {
            //alert("you Lose");
            cNum += 1;
            cScore.textContent = cNum;
            tempResult.style.color = "red";
            tempResult.textContent = "round: " + rounds + " = you looser";
        }

        plrChoice.textContent = usrSel;
        botChoice.textContent = comSel;

        if (pNum === 3) {
            console.log("you won");
            popUp("won");
        } else if (cNum === 3) {
            console.log("com won");
            popUp("lose");
        }

        let reset = document.querySelector(".reset-btn");

        reset.addEventListener("click", () => {
            cNum = 0;
            pNum = 0;
            rounds = 0;
            cScore.textContent = cNum;
            pScore.textContent = pNum;
            plrChoice.textContent = "ur choice";
            botChoice.textContent = "bot choice";
            tempResult.textContent = "result will be here";

            popUp("down");
        })
    })
}

choice.forEach(game);



function popUp(fresult) {
    let popup = document.querySelector(".pop-up");
    const result = document.querySelector(".final-result");

    popup.setAttribute("visible", true);
    if(fresult === "down") {
        popup.setAttribute("visible", false);
    }

    result.textContent = "you " + fresult + " in final";
}
