//opening new page

var pagename;

function openPage(pagename){
    window.location.assign(pagename);
}



//making draggable element (modified code from W3 schools (see production/sources.txt))

dragElement(document.getElementById("drag"));

function dragElement(elmnt) {
  var pos1 = 0, pos3 = 0;
  if (document.getElementById("draghead")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("draghead").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.Event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    // set the element's new position:
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}