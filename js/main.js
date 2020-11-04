topbtn = document.getElementById("topbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// includeHTML
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Go through all elements within the webpage */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain attribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /* Make an XMLHTTP request using the attribute value as the file name: */
        if (window.XMLHttpRequest) {
          xhttp = new XMLHttpRequest();
        } else {
          /* For older versions of Internet Explorer (EI5 or EI6) */
          xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              elmnt.innerHTML = "Page not found.";
            }
            /* Remove the attribute then recurse */
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  }
