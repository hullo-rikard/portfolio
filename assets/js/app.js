$("document").ready(function () {

  $('body').fadeIn('500');

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -65
    }, 500);
});

  $(window).scroll( function(){
    $('.fade-in-section').each( function(i){
        var top_of_object = $(this).position().top + 50;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > top_of_object ){
            $(this).addClass('is-visible')
        }
    }); 
  });

});