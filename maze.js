
window.onload = initialize;


/*
function changeClass() {
    document.getElementById("boundary1").classList.add("youlose")

};
*/

function changeClass2() {
  var x = document.getElementsByClassName("boundary");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].classList.add("youlose");
  }
};

function initialize(){
  //document.getElementById("boundary1").addEventListener("mouseover", changeClass);

  var x = document.querySelectorAll(".boundary");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].addEventListener("mouseover", changeClass2);
  }
}