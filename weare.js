
function toggleSection(id){
  //get dom element specified by name
  // if the element is shown, hide it {
  var elt= document.getElementById(id);
  if (elt.style.visibility === 'hidden') {
    elt.style.visibility = 'visible';
  } else {
    elt.style.visibility = 'hidden';
  }
}

function forParagraph(id){
var elt= document.getElementById(id).style.visibility = "visible";
}
  //if the element is hidden, show it
function ifOut(id){
  var jlt = document.getElementById(id).style.visibility = "hidden";
}

function on(id) {
  var klt= document.getElementById(id).style.display = "block";
}

function off(id) {
  var hlt= document.getElementById(id).style.display = "none";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
