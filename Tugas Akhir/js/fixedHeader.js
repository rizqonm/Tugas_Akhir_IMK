window.onscroll = function() {myFunction()};

let header = document.getElementById("header");
let sticky = header.offsetTop;
let ma = document.getElementById("mainAtas")

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    ma.classList.add("mt-10v");
  } else {
    header.classList.remove("sticky");
    ma.classList.remove("mt-10v");
  }
}

// $(document).ready(function(){
//   var bg=[0,1,2,3,4];
//   var index=0;
//   setInterval(function(){
//   index=(index + 1) % bg.length;
//   $('body').css('background-image','url("images/bg'+index+'.jpg")');
//   },5000);
// });