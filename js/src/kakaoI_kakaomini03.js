// // kakaoI_kakaomini03.js
(function($){


var tb01 = $('.tb01');
var tb02 = $('.tb02');

var textP1 = tb01.children('p');
var textP2 = tb02.children('p');


textP1.hide();
textP2.hide();

$(window).on('load', function(){
  var timed = 500;

  console.log(textP1.length);
  for(var i = 0; i<textP1.length; i++){
    // var j = parseInt(i/2);
    textP1.eq(i).delay(timed*(i*2)).fadeIn(timed,function(){
      $(this).delay(timed).fadeOut(timed);
    });
  }
  // textP1.eq(0).fadeIn(timed);
  // textP1.eq(0).delay(timed*1).fadeOut(timed);
  // textP1.eq(1).delay(timed*2).fadeIn(timed);
  // textP1.eq(1).delay(timed*3).fadeOut(timed);
  // textP1.eq(2).delay(timed*4).fadeIn(timed);
  // textP1.eq(2).delay(timed*5).fadeOut(timed);
  // textP1.eq(3).delay(timed*6).fadeIn(timed);
  // textP1.eq(3).delay(timed*7).fadeOut(timed);
  // textP1.eq(4).delay(timed*8).fadeIn(timed);
  // textP1.eq(4).delay(timed*9).fadeOut(timed);
  textP2.eq(0).delay(timed*10).fadeIn(timed);
});


var tabLi = $('.category').children('li');
var tabText = $('.tab_text').children('div');

tabLi.on('click', function(e){

e.preventDefault();

var i = $(this).index();

tabLi.eq(i).addClass('select');
tabLi.eq(i).siblings().removeClass('select');

tabText.eq(i).addClass('select');
tabText.eq(i).siblings().removeClass('select');


});


// 명령어 버튼 클릭


var modalBG = $('#modalBg');
var modalBox = $('.modalBox');
var voice = $('.voice');
var windWidth = $(window).outerWidth();

modalBG.hide();

if(windWidth > 480) {

  voice.on('click', function(e){
    e.preventDefault();
    modalBG.show();

    modalBox.prepend('<div class="close"><button type="button"><span class="hidden"></span></button></div>');
    var close = $('.close');
    close.parent().css({position:'relative'});
    close.css({width:'35px', height: '35px', position:'absolute', top:'1rem', right:'1rem', zIndex:1000});
    close.children('button').css({width:'100%', height:'100%', backgroundImage: 'url("../../img/kakaomini03/close.png")', backgroundSize:'contain'});

    close.on('click', function(e){
      e.preventDefault();
      modalBG.hide();
    });
  });
}

})(jQuery);