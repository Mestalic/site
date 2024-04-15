document.onkeydown = function (v) {
    if (v.ctrlKey && (v.keyCode === 0x43 || v.keyCode === 0x56 || v.keyCode === 0x55 || v.keyCode === 0x75)) {}
    if (v.shiftKey && (event.button == 0x2 || event.button == 0x3)) {}
    return false;
  };
  function click() {
    if (event.button == 0x2 || event.button == 0x3) {
      oncontextmenu = "return false";
      function check() {
        if (document.body.addEventListener) {
          document.body.addEventListener('DOMMouseScroll', stop, false);
        }
        document.body.onmousewheel = stop;
      }
      function stop(v) {
        if (!v) {
          v = window.event;
        }
        if (v.stopPropagation) {
          v.stopPropagation();
        } else {
          v.cancelBubble = true;
        }
        if (v.preventDefault) {
          v.preventDefault();
        } else {
          v.returnValue = false;
        }
      }
      check();
    }
  }
  document.onmousedown = click;
  document.oncontextmenu = new Function("return false;");