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
const oneCard=document.querySelector(".card i").className;

var count=0;
var moves=0;
var moveTxt=document.getElementById('moves');
var selectedArr=[];
var selectedMatch=[];



//functions
for(let i=0;i<CARDS.length;i++) {
    CARDS[i].addEventListener("click",function(){
       // console.log(CARDS[i].className);
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

