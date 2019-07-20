function openNav() {
  // if (window.matchMedia("(max-width: 450px)").matches){document.getElementById("mySidenav").style.width = "35%";}
  document.getElementById("mySidenav").style.width = "135px";
  document.getElementById("main").style.marginLeft = "2%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "auto";
  document.body.style.backgroundColor = "#ffe6e6";
}

