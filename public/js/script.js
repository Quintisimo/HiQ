(function($) {
  $(document).ready(function() {
    $('img').click(function(){
      var $this = $(this),
      className = 'section.' + $this.attr('class');
      $('section.games').fadeOut();
      $('body').find(className).fadeIn();
      setTimeout(function() {
        $('body').find(className).fadeOut();
      }, 420000);
    });
  });
}(jQuery));
