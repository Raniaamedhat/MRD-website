// Get the video element
const video = document.getElementById('myVideo');

// Play the video
function playVideo() {
  video.play();
}

// Pause the video
function pauseVideo() {
  video.pause();
}

// Stop the video (and reset to the beginning)
function stopVideo() {
  video.pause();
  video.currentTime = 0;
}
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////OWL-CARSOUL-seaction-1 page////////////////////////////////////
$(document).ready(function(){
  $('[data-carousel-id="1"]').owlCarousel({
      
      items:1 ,//3dad sowar altzhar fal screen
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
  });
});
////////////////////////////////////////////////////////OWL-CARSOUL-seaction-1 page////////////////////////////////////
$(document).ready(function(){
  $('[data-carousel-id="ar"]').owlCarousel({
      rtl:true,
      items:1 ,//3dad sowar altzhar fal screen
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
  });
});