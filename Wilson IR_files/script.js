//Increase the size of object when hovered
$(document).ready(function() {
   $('#a1, #a2, #a3').mouseenter(function() {
       $(this).animate({
           height: '+=40px'
       });
   });
   $('#a1, #a2, #a3').mouseleave(function() {
       $(this).animate({
           height: '-=40px'
       });
   });
});


// Fade an object when hovered and vice versa
/*
$(document).ready(function() {
    $('div').mouseenter(function(){
        $('div').fadeTo('fast', 1);
        });

    $('div').mouseleave(function() {
        $('div').fadeTo('fast', 0.5);
        });
    });
*/

// slideToggle
/*
$(document).ready(function(){
    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow')
    })
});
*/
/* Hide and show a div with click
$(document).ready(function(){
    $("#hide-btn").click(function(){
        $("p").hide();
    });
    $("#show-btn").click(function(){
        $("p").show();
    });
});
*/