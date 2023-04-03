//네비게이션
$('.menu>ul').mouseenter(function(){
  $('.mega_menu').stop().slideDown();
});
$('.menu>ul').mouseleave(function(){
  $('.mega_menu').stop().slideUp();
});

//탑버튼
$(window).scroll(function(){
  if($(this).scrollTop() > 600){
    $('#top_btn').fadeIn();
  }else{
    $('#top_btn').fadeOut();
  }
});


  $('#top_btn').click(function(){
    $('html, body').animate({scrollTop:0},1000)
  });

  //search
  $('#search').click(function(){
    $('#search_input').fadeIn();
  });
  $('#search').dblclick(function(){
    $('#search_input').fadeOut();
  });

  //modal
  $('#login_btn').click(function(){
    $('.modal').fadeOut();
  });
  $('#login_go').click(function(){
    $('.modal').fadeIn();
  });