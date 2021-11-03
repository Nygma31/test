var myCarousel = document.querySelector('#carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 15000,
  wrap: false
})

$(function() {
  $( "#datepicker" ).datepicker();
});

let i = 0;

$('#burger').click(function() {
  if(i==0){
    $('#submenu').css({
        'display': 'block',
        
       

    });
    i++
  }
  else {
    $('#submenu').css({
      'display': 'none',
  });
  i--

  }
   
});


