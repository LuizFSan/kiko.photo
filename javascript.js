
function setbackground(){
  window.setTimeout( "setbackground()", 5000);
  newImage = rotate ? 'url(/images/_LFS8221.jpg)' : 'url(/images/_LFS8170.jpg)';
  rotate = !rotate;
  document.getElementById('body').style.backgroundImage = newImage;
} 