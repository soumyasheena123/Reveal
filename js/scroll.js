$(window).scroll(function() {    // this will work when your window scrolled.
    var height = $(window).scrollTop();  //getting the scrolling height of window
    if(height  > 100) {
        $(".main-menu").addClass('fixed');
    } else{
        $(".main-menu").removeClass('fixed');
    }
});