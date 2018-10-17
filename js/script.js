$(function(){
  var li = $(".nav__menu li");
  
  li.hover(function(){
    $(this).children().children().css('visibility', 'visible');
  }, function(){
    var img = $(this).children().children();
    $(this).children().children().css('visibility', 'hidden');
  })
});