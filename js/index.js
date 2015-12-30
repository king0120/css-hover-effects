$('.text').hide();

$('.hover').hover(function(){
  $('.text').fadeIn(500);
},function(){
  $('.text').fadeOut(250);
})