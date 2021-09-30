function first(){
  document.getElementById("slideimage").src="image/bg-3.jfif";
}
function second(){
  document.getElementById("slideimage").src="image/bg-4.jpg";
}
function third(){
  document.getElementById("slideimage").src="image/bg-2.jpg";
}
setInterval(first,2000);
setInterval(second,4000);
setInterval(third,6000);
