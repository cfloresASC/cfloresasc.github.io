function setup(){
  createCanvas(1350, 600);
}
// window.addEventListener("load", function(){
//   var load_screen = document.getElementById("load_screen"); S
// })
$('body').toggleClass('loaded');
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});
var audio = $("#mySoundClip")[0];
$("nav a").mouseenter(function() {
  audio.play();
});