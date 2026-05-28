
let h2 = document.querySelector(".head");
 let gameSeq =[];
 let userSeq =[];
 let btns = ["red","yellow","green","purple"];
 let started = false;
 let level = 0;
 let scr = 0;
let gameActive = false;

 document.addEventListener("keypress",function(){
    if(started == false){
    console.log("game started");
    started = true;
    gameActive = true;

    levelUp();
    }
 })

 function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
 }

 function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;


    let random = Math.floor(Math.random() *4); 
    let randColor = btns[random];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
 }

 function checkAns(idx){
    console.log(userSeq);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp , 1000);
        }
    }else{
        let score =maxScr();
        h2.innerHTML = `game over:your score was <b>${level-1} </b> <br> max score : ${score} <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "#1a1a2e";
        } , 1000);
        reset();
    }
 }

 function btnPress(){
    if(!gameActive) return;
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
 }

 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress);
 }

 function maxScr(){
    if(scr < level-1){
        scr = level-1;  // scr = Math.max(scr,level-1);
    }
    return scr;
 }

 function reset(){
    started = false;
    gameActive = false;
    level = 0;
    gameSeq =[];
    userSeq = [];
 }