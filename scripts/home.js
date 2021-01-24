// timer script Here

// Set the date we're counting down to
var countDownDate = new Date("May 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.querySelector('.days').innerHTML=days
    document.querySelector('.hours').innerHTML=hours
    document.querySelector('.min').innerHTML=minutes
    document.querySelector('.sec').innerHTML=seconds

}, 1000);