function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// varible
const CARDS=document.querySelectorAll(".card");
//const oneCard=document.querySelector(".card i").className;
const heart=document.getElementById("heart"); // heart item
let heartIndex=0; // var for index of heart

var moves=0;
var moveTxt=document.getElementById('moves');
var selectedArr=[]; // var for putting selected card in array
var selectedMatch=[]; // var for putting match cards in array
let time=0;
let timerId=0;
let timerOut=true;
const timerTxt=document.getElementById("timer");



//functions
//--------------SHUFLE-----------------

var cardArr=[];
var cardShuffle=[];

const oneCard=document.querySelectorAll(".card")
console.log('one card');
console.log(oneCard);//===================
console.log('one card class tt');
console.log(oneCard[0].className);


cardArr=[...oneCard]; // [div, div, ...]

cardShuffle=shuffle(cardArr);
console.log('card shffle arr');
console.log(cardShuffle);//========================
console.log('card shufle class list');
console.log(cardShuffle);//========================

console.log('one card');
console.log(oneCard);//===================

let deck=document.getElementById('deck');
for(let item of cardShuffle)
{
    deck.append(item);

}






 
//==========================================
for(let i=0;i<CARDS.length;i++) {
    CARDS[i].addEventListener("click",function(){
       if(timerOut){
        initTimer();
       }

        if(CARDS[i].className !='card open match'){
     open2cards(i);
    var timerId=setTimeout(close2cards,2000);
    }
    });
}

function hideheart(){ // hide heart func
    heart.children[heartIndex].style.display='none';
    heartIndex++;
}

function open2cards(i){
    if(selectedArr.length<2){
        selectedArr.push(CARDS[i]);
        if(selectedArr.length<=2){
        CARDS[i].classList.add("open");
        moves++;
        moveTxt.innerHTML=moves;
        if(moves>8 & moves%8==0){// calling hide heart func if moves is 16 -24 -32
            hideheart();
        }
    }}
}



 function close2cards(){
    if(selectedArr.length==2){
     //  console.log(selectedArr[0].childNodes[1].className);
      // console.log(oneCard);
      if(selectedArr[0].childNodes[1].className==selectedArr[1].childNodes[1].className)
      {
     //     console.log('it is same');
          selectedArr[0].classList.add("match");
        selectedArr[1].classList.add("match");
        selectedMatch.push(selectedArr[0]);
        selectedMatch.push(selectedArr[1]);
       // console.log(selectedMatch[0].className);
        //console.log(selectedMatch[1].className);

      }else{
       selectedArr[0].classList.remove("open");
        selectedArr[0].classList.add("card");
        selectedArr[1].classList.remove("open");
        selectedArr[1].classList.add("card");
        //console.log(selectedArr[1].className);
      }
        emptyarray();
    }
 }

 function emptyarray(){
    if(selectedArr.length==2){
        selectedArr.pop();
        selectedArr.pop();
    }
 }



 const initTimer=() =>{
   timerOut=false;
    timerId=setInterval(()=>{
        time++;
        timeCount();
    },1000);
};

 const timeCount=()=>{
    const min=Math.floor(time/60);
    const sec=time%60;
    if(sec<10){
        timerTxt.innerHTML= min+':0'+sec;
        //'$(min):0$(sec)';
    }else{
        timerTxt.innerHTML=min+':'+sec;
    }
};
