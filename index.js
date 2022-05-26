var elements=document.getElementsByClassName("card");

(function suffle(){
  Array.from(elements).forEach(function(elem){
      var pos=Math.floor(Math.random()*12);
      elem.style.order=pos;
  });
})();

var flipped=false;
var islock=false;
var firstCard,secondCard;
var clicks=0;

var clickCount=document.getElementById('click');

var apply=function(){

  if(islock) return;
  if(this===firstCard) return
  this.classList.add('flip');

  if(!flipped){
    clicks=clicks+1;
    clickCount.innerHTML='Clicks : '+clicks;
    firstCard=this;
    flipped=true;
  }
  else{
    clicks=clicks+1;
    clickCount.innerHTML='Clicks : '+clicks;
    flipped=false;
    secondCard=this;
    isMatching=firstCard.dataset.usergivenname===secondCard.dataset.usergivenname;

    if(isMatching){ match(); }
    else{ flipBack(); }
  }
}

function flipBack(){
  islock=true;
  setTimeout(function(){
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    reset();
  },900)
}

function match(){
  firstCard.removeEventListener('click',apply);
  firstCard.removeEventListener('click',apply);
  reset();
}

function reset(){
  flipped=false;
  islock=false;
  firstCard=null;
  secondCard=null;
}

var btn=document.getElementById('btn');
btn.addEventListener('click',function(){
  location.reload();
});

Array.from(elements).forEach(function(elem){
  elem.addEventListener('click',apply);
});
