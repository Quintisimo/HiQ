(function($) {
  $(document).ready(function() {
    $('a').click(function(){
      var $this = $(this),
      className = 'section.' + $this.attr('class');
      $('section').fadeOut();
      $('body').find(className).fadeIn();
      setTimeout(function() {
          $('section.games').fadeOut();
          $('section.qutesports').fadeIn();
      }, 420000);
    });
  });
}(jQuery));
