$(document).ready(function(){

    //sticky header
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 350) {
            $("#sticky").addClass("sticky-navbar");
        }else {
            $("#sticky").removeClass("sticky-navbar");
        }
    });

    //responsive menu expand
    $("#menu-click").click(function(){
        $("#for-mobile").toggleClass("show");
    });

    $(".menu ul li").click(function(){
        $("#for-mobile").removeClass("show");
    });

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

    //page scroll
    $.scrollIt({
        activeClass : 'active',
        topOffset: -95 
   });
   
   //copyright year
   let year = new Date();
   year = year.getFullYear();
   $("#year").text(year);

    //owl carousel
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            nav:true,   
            dots:false,
            navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
            margin: 35,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                767.98:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    });

    //accrodion
    $(".accordion").on("click",".accrodion-title", function () {

        $(this).next().slideDown();

        $(".accordion-body").not($(this).next()).slideUp();

    });

    $(".accordion").on("click",".item", function () {

        $(this).addClass("active").siblings().removeClass("active");

    });
   

});