//the menu
// to change direction use width or height
//import common divs
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        } 
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  }
  includeHTML();
window.onload = function () {
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.position = "";
    document.getElementById("mySidenav").style.visibility = "visible";
    document.getElementById("mainContent").style.marginLeft = "200px"
}
function openNav() {
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.position = "";
    document.getElementById("mySidenav").style.visibility = "visible";
    document.getElementById("mainContent").style.marginLeft = "200px"
}

function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("mySidenav").style.position = "none";
    document.getElementById("mySidenav").style.visibility = "hidden";
    document.getElementById("mainContent").style.marginLeft = ""
}
function toggleNav() {
    var curstatus = document.getElementById("mySidenav").style.visibility;
    console.log("height," + curstatus)
    if (curstatus == "hidden") {
        openNav();
    }
    else {
        closeNav();
    }
}