// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
<<<<<<< HEAD
    document.getElementById("header_img_left").style.width = "5%";
  } else {
    document.getElementById("header_img_left").style.width = "10%";
=======
    document.getElementById("header").style.fontSize = "20px";
  } else {
    document.getElementById("header").style.fontSize = "60px";
>>>>>>> 5714ba9d591fbdad08f37462e63fc050eeab87e1
  }
}