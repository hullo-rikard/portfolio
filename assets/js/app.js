$("document").ready(function () {

  $('body').fadeIn('1000');

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




var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
  $("#video").attr('src',$videoSrc + "?autoplay=1" ); 
})
// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
  $("#video").attr('src',$videoSrc); 
}) 









});