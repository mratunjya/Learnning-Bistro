x = document.getElementsByClassName('side-nav');
console.log(x[0].offsetTop);
h = x[0].offsetTop;
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop >= h || document.documentElement.scrollTop >= h) {
    x[0].style.position = "fixed";
    x[0].style.top = 0;
  }
  else {
    x[0].style.position = "static";
  }
}
