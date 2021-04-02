$(document).ready(function(){
    $('.header').height($(window).height());

    $('.carousel').carousel({
        interval: 4000
      }).carousel(3)

      $(".navbar a").click(function(){
        $("body,html").animate({
         scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
       })

       $(".header a").click(function(){
        $("body,html").animate({
         scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
       })
   })