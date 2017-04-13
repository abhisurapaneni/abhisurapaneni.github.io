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

//Smooth scroll when clicked on navbar
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


//Look for highlight class in css
$("#summary").click(function() {
  $(this).toggleClass("highlight");
});

// Remove an object when clicked
/*
$("#summary").click(function() {
  $(this).remove();
});*/

/*
$("#summary").click(function() {
  $(this).replaceWith('<p>Damn where\'s the summary?</p>');
});
*/

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
