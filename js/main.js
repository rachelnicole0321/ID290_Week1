
$(document).scroll(function(){
  console.log( $(document).scrollTop() );

  $('#box1').css('transform', 'translateY('+String($(document).scrollTop() * .10 ) + 'px');
  $('#box2').css('transform', 'translateY('+String($(document).scrollTop() * .50 ) + 'px');
  $('#box3').css('transform', 'translateY('+String($(document).scrollTop() * .90 ) + 'px');
});
