let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    if (!btn) {
        console.error("Button not found!");
        return;
    }
    // console.log("Flashing:", btn.classList);
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300); 
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`#${randomColor}`);

    // console.log(randomIdx, randomColor, randomBtn);

    gameSeq.push(randomColor)
    console.log(gameSeq)

    if (randomBtn) {
        btnFlash(randomBtn);
    } else {
        console.error("Button not found for color:", randomColor);
    }
}

function checkBtn (idx){
  
    if(userSeq[idx] ===gameSeq[idx]){
     if(userSeq.length ==gameSeq.length){
       setTimeout(levelUp,300);
     }
        
    }else{
       
        h2.innerHTML = `Game over !your score was <b>${level}</b> <br>press  any key to start`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        resate();
    }
}
function btnPress(){
    console.log(this);
    
    let btn = this;
btnFlash(btn);

userColor = btn.getAttribute('id')
userSeq.push(userColor);

checkBtn(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function resate(){
    started =false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}