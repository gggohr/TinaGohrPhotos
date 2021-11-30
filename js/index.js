$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage'], #weddingText a").on('click', function(event) {
  
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
  
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
  
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
      } // End if 
    });

    $('#wedding img, #food img, #family img').on('click', function() {
      $('#zoomImageModal #modelImage').prop('src', this.alt);
      $('#zoomImageModal').modal('show');
    });

    var hideDiscountBar = function() {
      $('#discountBar').css('display', 'none');
    };

    var setDiscountMessage = function() {
      var message = '';
      var d = new Date();
      var n = d.getMonth();
      var y = d.getFullYear();
      switch(n) {
        case 3:
            message = "**SPECIAL** Family Portraits $100 for 40 photos/One or two person half-hour session $50 for 5 photos. Appointment must be made during April-May. Photo session can be held in " + y.toString() + ".";
        break;    
        case 4:
            message = "**SPECIAL** Family Portraits $100 for 40 photos/One or two person half-hour session $50 for 5 photos. Appointment must be made during April-May. Photo session can be held in " + y.toString() + ".";
        break;
        case 5:
            message = "June Special! Kicking off summer with Best Friends Month — human friends or pet friends. Five images for $50";
        break;
        case 6:
            message = "July-August: " + (year + 1).toString() + " Senior Grad Special  ---  2 hours of photos for $100";
        break;
        case 7:
            message = "July-August: " + (year + 1).toString() + " Senior Grad Special  ---  2 hours of photos for $100";
        break;
        case 8:
            message = "September Special! Christmas Card Special. Unlimited family photos for one hour — $100.";
        break;
        case 9:
            message = "October Special! Christmas Card Special. Unlimited family photos for one hour — $100.";
        break;
      }

      if(message != '') {
        $('#discountMessageX').on('click', hideDiscountBar);
        $('#discountMessage').text(message);
      }
      else {
        hideDiscountBar();
      }
    };
    setDiscountMessage();

    
  })