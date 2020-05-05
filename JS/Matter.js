function sidenavclose () {
  document.getElementById('side-nav').style.display = 'none';

  document.getElementById('btn-show').style.display = 'block';

  document.getElementById('Chapter').style.width = '98%';
  document.getElementById('Chapter').style.float = 'none';
  document.getElementById('Chapter').style.margin = '0 auto';

  document.getElementById('top-nav').style.width = '103.04%';
  document.getElementById('top-nav').style.marginLeft = '-2.04%';

  document.getElementById('Footer').style.width = '100%';
  document.getElementById('Footer').style.float = 'none';
}

function sidenavshow () {
  document.getElementById('side-nav').style.display = 'block';

  document.getElementById('btn-show').style.display = 'none';

  document.getElementById('Chapter').style.width = '73%';
  document.getElementById('Chapter').style.float = 'right';
  document.getElementById('Chapter').style.margin = '0';

  document.getElementById('top-nav').style.width = '75%';
  document.getElementById('top-nav').style.marginLeft = '-2%';

  document.getElementById('Footer').style.width = '73%';
  document.getElementById('Footer').style.float = 'right';
}

function showMoreChapter() {
  if (document.getElementById('Get-Some-More').innerHTML == '<button type="button" name="more" onclick="showMoreChapter()" class="btn-more">Get Some More &nbsp;&nbsp;<i class="fas fa-chevron-circle-down" aria-hidden="true"></i></button>') {
    document.getElementById('more-chapter').style.display = 'block';
    document.getElementById('Get-Some-More').innerHTML = '<button type="button" name="less" onclick="showMoreChapter()" class="btn-more">Show Less &nbsp;&nbsp;<i class="fas fa-chevron-circle-up" aria-hidden="true"></i></button>';
  }
  else {
    document.getElementById('more-chapter').style.display = 'none';
    document.getElementById('Get-Some-More').innerHTML = '<button type="button" name="more" onclick="showMoreChapter()" class="btn-more">Get Some More &nbsp;&nbsp;<i class="fas fa-chevron-circle-down" aria-hidden="true"></i></button>';
  }
}

function loaded () {
  x = document.getElementsByClassName('side-nav');
  y = document.getElementsByClassName('right-73');
  h = y[0].offsetTop;

  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.body.scrollTop >= h || document.documentElement.scrollTop >= h) {
      x[0].style.position = "fixed";
      x[0].style.overflowY = "scroll";
      x[0].style.top = 0;

      document.getElementById('top-nav').style.display = 'block';
      document.getElementsByTagName('h1')[4].style.paddingTop = document.getElementById('top-nav').offsetHeight + 'px';
      for (var i = 0; i < document.getElementsByTagName('h2').length; i++) {
        document.getElementsByTagName('h2')[i].style.paddingTop = document.getElementById('top-nav').offsetHeight + 'px';
      }
      document.getElementById('btn-close').style.display = 'block';
    }
    else {
      x[0].style.position = "static";
      x[0].style.overflowY = "hidden";
      for (var i = 0; i < document.getElementsByTagName('h2').length; i++) {
        document.getElementsByTagName('h2')[i].style.paddingTop = '20px';
      }
      document.getElementById('top-nav').style.display = 'none';
      document.getElementsByTagName('h1')[4].style.paddingTop = '20px';
      document.getElementById('btn-close').style.display = 'none';
    }
  }

  window.scrollBy(0, 1);
}
