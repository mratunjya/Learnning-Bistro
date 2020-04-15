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

      if (window.innerWidth <= 720) {
        a = document.getElementsByClassName('left');
        a[0].style.display = "none";

        a = document.getElementsByClassName('right');
        a[0].style.width = "97%";
        a[0].style.margin = "0 auto"

        y[0].style.width = "100%";
      }
      else {
        a = document.getElementsByClassName('left');
        a[0].style.display = "block";

        a = document.getElementsByClassName('right');
        a[0].style.width = "73%";
        a[0].style.margin = "0"

        y[0].style.width = "77%";
      }
    }
    window.scrollBy(0, 1);
  }
}
