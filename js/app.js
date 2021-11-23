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
//const oneCard=document.querySelector(".card i");

//for(let item of CARDS.childNodes){
    
//console.log((CARDS[0]));
/*
console.log('------');
//console.log(oneCard);
shuffle(CARDS);
var cardArr=[];
cardArr=shuffle(CARDS);
var x=cardArr.length;
console.log(x);
*/
var cardArr=[];
var cardShuffle=[];

const oneCard=document.querySelectorAll(".card i")
console.log('one card');
console.log(oneCard);//===================
console.log('one card class tt');
console.log(oneCard[0].className);
console.log('after replace');
oldClass=CARDS[0].childNodes[1].classList[1];
for(let i of oneCard)
cardArr.push(i);
cardShuffle=shuffle(cardArr);
console.log('card shffle arr');
console.log(cardShuffle);//========================
var f = cardShuffle[0].classList[3];
console.log('f');
console.log(f);
for(let x=0;x<15;x++){
    let shArr=cardShuffle[x];
var fabClass = shArr.classList[0];
var newClass = shArr.classList[1];
//result='fab fa-php';
let result1=fabClass.concat(' ');
let result=result1.concat(newClass);
//console.log('result');
//console.log(result);
oneCard[x].className=result;// here should change 
}
console.log('result yy');
//console.log(result);

console.log('one card class');

//var cardArr=[];

//console.log(cardArr);
cardShuffle=shuffle(cardArr);
console.log(cardShuffle[0].classList[1]); //cardShuffle is class names after random

//CARDS.childNodes=cardShuffle;
console.log(CARDS[0].childNodes[1].className);

   // CARDS[0].childNodes[k].className=cardShuffle[k];
   console.log('array Amal');
   // CARDS[0].childNodes[1].classList.add(cardShuffle[0]);
    console.log(CARDS[0].childNodes[1].classList[1]);
    CARDS[0].childNodes[1].classList[1]=cardShuffle[0].classList[1];
    console.log(CARDS[0].childNodes[1].classList[1]);

var oldClass=CARDS[0].childNodes[1].classList[1];
console.log('new Class');

var newClass = cardShuffle[0].classList[1];
console.log('old Class');
console.log(oldClass);
console.log('new class');
console.log(newClass);
console.log('first card class');
//console.log(CARDS[0].childNodes[1].classList[1]);
//console.log('first card class after remove');
//pop(CARDS[0].childNodes[1].classList[1]);
//console.log(CARDS[0].childNodes[1].classList);//return all class



    //CARDS[0].classList.remove();
  //  CARDS[0].classList.add();


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

function hideheart(){ // hide heart func
        heart.children[heartIndex].style.display='none';
        heartIndex++;
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
