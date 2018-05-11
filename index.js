var menuOpen = false;

var node_bodymenu   = document.getElementById("bodymenu"  );
var node_headbutton = document.getElementById("headbutton");
var node_headlogo   = document.getElementById("headlogo"  );

function toggleMenu() {
  if(!menuOpen) {
    node_bodymenu.classList.remove  ("bodymenu-closed"  );
    node_headbutton.classList.remove("headbutton-closed");
    node_headlogo.classList.remove  ("headlogo-closed"  );
    menuOpen = true;
  } else {
    node_bodymenu.classList.add  ("bodymenu-closed"  );
    node_headbutton.classList.add("headbutton-closed");
    node_headlogo.classList.add  ("headlogo-closed"  );
    menuOpen = false;
  }
}