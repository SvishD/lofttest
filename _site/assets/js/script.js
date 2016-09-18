$(function(){ 

var items = $('.courses__item').length;
console.log(items);

  $('.courses__link').click(function(event) {
    event.preventDefault();

    $(this).toggleClass("courses__link_checked").delay(1000);

    $(this).slideUp(700, function() {
    	$(this).remove();
    });

    items--;
    console.log(items);
    if( items == 0 ) {
    	
    	$('.courses .section__title').hide(3000, function() {
    		$('.courses .section__title').remove();
    	});

    	setTimeout( function(){
    	    $(".courses__message").css("left", "50%");
    	},2500); 	
    }
  });
});