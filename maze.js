
window.onload = initialize;
var state=true;

function changeClass2() {
  document.getElementById("status").innerHTML = "You lose!";
  state=false;
  var x = document.getElementsByClassName("boundary");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].classList.add("youlose");
  }
};

function initialize(){
  document.getElementById("end").addEventListener("mouseover",youwin);
  document.getElementById("start").addEventListener("click",changeClass);
  var x = document.querySelectorAll(".boundary");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].addEventListener("mouseover", changeClass2);
  }
};

function youwin(){
  if (state==false){
  }else{
    document.getElementById("status").innerHTML = "You win!";
  }
}


function changeClass() {
  state=true;
  var x = document.querySelectorAll(".boundary");
  console.log("test")
  document.getElementById("status").innerHTML = "Move your mouse over the ''S'' to begin."; 
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("youlose");
  }

};