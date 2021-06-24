$(document).ready(function(){
    
   //  //header-menu active
   // $(".header-menu").on("click","li", function () {

   //      $(this).addClass("active").siblings().removeClass("active");

   //  });

    //progress bar
    var wind = $(window);
    wind.on('scroll', function () {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });

    //portfolio filtering
    var mixer = mixitup('.category-item');
   //portfolio active
   $(".category-btn").on("click","li", function () {

        $(this).addClass("active").siblings().removeClass("active");

    });

   //sticky header
   $(window).scroll(function(){
        var scrollShowTime = $(window).scrollTop();

        if ( scrollShowTime > 300 ) {
            $(".navbar").addClass("sticky");
        }
        else {
            $(".navbar").removeClass("sticky");
        }
    });

   //nav to page scroll
   $.scrollIt({
        'activeClass' : 'active'
   });

   //section animate
   new WOW().init();

   // toggle navbar-collapse when clicked
    $(".navbar button").click(function(){
        $(".navbar .header-menu").toggleClass("responsive-menu");
    });

    // menu bar close when click menu item
    $(".header-menu ul li a").click(function(){
        $(".navbar .header-menu").removeClass("responsive-menu");
    });


});