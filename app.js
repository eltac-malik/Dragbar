var handler = document.querySelector('.handler');
var wrapper = handler.closest('.wrapper');
var boxA = wrapper.querySelector('.box');
var isHandlerDragging = false;

document.addEventListener('mousedown', function(e) {
  if (e.target === handler) {
    isHandlerDragging = true;
  }
});

document.addEventListener('mousemove', function(e) {
  if (!isHandlerDragging) {
    return false;
  }

  var containerOffsetLeft = wrapper.offsetLeft;

  var pointerRelativeXpos = e.clientX - containerOffsetLeft;
  
  var boxAminWidth = 60;

  boxA.style.width = (Math.max(boxAminWidth, pointerRelativeXpos - 8)) + 'px';
  boxA.style.flexGrow = 0;
});

document.addEventListener('mouseup', function(e) {
  isHandlerDragging = false;
});