$('nav.desktop a').hover(function(){
   $('nav li').removeClass('selected');
   $(this).parent().addClass('selected');
})

//slidetoggle

$('nav.mobile h3').click(function(){
   $('ul.nav-desktop').slideToggle();
})

//scroll

$(function(){
   $('nav a').click(function(){
      var href = $(this).attr('href');
      var offsetTop = $(href).offset().top;

      $('html,body').animate({'scrollTop':offsetTop});

      return false;
   })
})