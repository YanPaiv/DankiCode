//menu
$('nav.mobile h3').click(function(){
   $('nav.mobile').find('ul').slideToggle(1000);
})

//scroll dinamic

$(function(){
   $('nav a').click(function(){
     var href = $(this).attr('href');
     var offsetTop =$(href).offset().top;
 
     $('html,body').animate({'scrollTop':offsetTop});
 
     return false;
   })
 })