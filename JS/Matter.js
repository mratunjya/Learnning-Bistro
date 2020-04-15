document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    x = document.getElementsByClassName('side-nav');
    y = document.getElementsByClassName('top-nav');
    c = document.getElementById("Introduction-to-Python");
    h2 = document.getElementsByTagName("h2");
    console.log(x[0].offsetTop);
    h = x[0].offsetTop;
    window.onscroll = function() {myFunction()};

    function myFunction() {
      if (document.body.scrollTop >= h || document.documentElement.scrollTop >= h) {
        x[0].style.position = "fixed";
        x[0].style.top = 0;

        y[0].style.display = "block";
        y[0].style.position = "fixed";
        y[0].style.top = 0;

        h1 = y[0].offsetHeight;
        c.style.paddingTop = h1+"px";

        h1 = h1 + 20;
        for (var i = 0; i < h2.length; i++) {
          h2[i].style.paddingTop = h1+"px"
        }
      }
      else {
        x[0].style.position = "static";
        y[0].style.display = "none";

        c.style.paddingTop = "0px";
        for (var i = 0; i < h2.length; i++) {
          h2[i].style.paddingTop = "20px"
        }
      }
    }
    window.scrollBy(0, 1);
  }
}
