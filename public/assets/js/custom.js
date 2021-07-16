

/* Portfolio */
$(document).ready(function(){
  $(".lightbox").click(function(){
    $(".backdrop").animate({"opacity": ".70"}, 500);
    $(".box").animate({"opacity": "1.0"}, 500);
    $(".backdrop, .box").css("display", "block");
  });
  
  $(".thumb").click(function(){
    var largeImage = $(this).attr("src");
    $(".largeImage").attr({src: largeImage});
  });
  
  $(".close").click(function(){
    closeBox();
  });
  
  $(".backdrop").click(function(){
    closeBox();
  });
});

function closeBox(){
  $(".backdrop, .box").animate({"opacity": "0"}, 500, function(){
  $(".backdrop, .box").css("display", "none");
  });
}
/* Portfolio */
/*Testomial*/
$( document ).ready(function($) {
$('#testimonials').slick({
dots: false,
arrows: false,
infinite: true,
speed: 1000,
slidesToShow: 1,
loop: true,
autoplay: true,
speed:2000,
//rows: 2,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1200,
settings: {
//slidesPerRow: 1,
slidesToScroll: 1,
slidesToShow: 1,
//rows: 2,
dots: false
}
},
{
breakpoint: 480,
settings: {
//slidesPerRow: 1,
slidesToScroll: 1,
slidesToShow: 1,
//rows: 1,
dots: false
}
}
]
});
});
/*Testomial*/

/*Menu*/
$(".menu-bottom").on("click",function(){$("html").toggleClass("menu-open")});
$(".menu-bottom").click(function(){$(this).toggleClass("click")});
/*Menu*/

/*Video popup*/
    
  // When the button is clicked make the lightbox fade in in the span of 1 second, hide itself and start the video
  $("#button").on("click", function() {
    $("#lightbox").fadeIn(1000);
    $(this).hide();
    var videoURL = $('#video').prop('src');
    videoURL += "?autoplay=1";
    $('#video').prop('src',videoURL);
  });
  
  // When the close button is clicked make the lightbox fade out in the span of 0.5 seconds and show the play button
  $("#close-btn").on("click", function() {
    $("#lightbox").fadeOut(500);
    $("#button").show(250);
  });
/*Video popup*/

   $('.preloader').fadeOut('slow');
