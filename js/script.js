$(function(){

  //Navegação
  var li = $(".nav__menu li");

  li.hover(function(){
    $(this).children().children().css('visibility', 'visible');
  }, function(){
    var img = $(this).children().children();
    $(this).children().children().css('visibility', 'hidden');
  })

  //Timer
  $("#countdown-timer")
    .countdown("2018/10/20", function(event) {
    $(this).html(
      event.strftime('<div><span class="numero">%D</span><span class="dias">dias</span></div> <div><span class="numero">%H</span><span class="dias">hrs</span></div> <div><span class="numero">%M</span><span class="dias">mins</span></div> <div><span class="numero">%S</span><span class="dias">seg</span></div>')
    );
  });
});