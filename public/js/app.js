$('.ui.pointing.menu').on('click','a', function(){
  $(this).addClass('active').siblings().removeClass('active');
});