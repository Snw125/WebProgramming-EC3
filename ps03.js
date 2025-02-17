// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.7.1.min.js'; 
// document.getElementsByTagName('head')[0].appendChild(script);


$(document).ready(function() {
    const imageUrls = [
      "images/spotlight1.jpg",
      "images/spotlight2.jpg",
      "images/spotlight3.jpg",
      "images/spotlight4.jpg",
      "images/spotlight5.jpg"
    ];
    let currentImageIndex = 0;
    let slideshowInterval;
  
    $("#startButton").click(function() {
        console.log("yippee");
        startSlideshow();
    });
  
    $("#stopButton").click(function() {
      stopSlideshow();
    });
  
    function startSlideshow() {
      if (!slideshowInterval) { // Prevent multiple intervals from starting
        slideshowInterval = setInterval(function() {
          $("#slideshowImage").fadeOut(1000, function() { // Fade out current image
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length; // Cycle through images
            $(this).attr("src", imageUrls[currentImageIndex]).fadeIn(1000); // Fade in next image
          });
        }, 2000); // Adjust interval as needed (fade time + pause time)
      }
    }
  
    function stopSlideshow() {
      clearInterval(slideshowInterval);
      slideshowInterval = null; // Reset the interval variable
    }
  });