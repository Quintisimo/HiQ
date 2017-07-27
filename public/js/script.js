(function($) {
  $(document).ready(function() {
    $('img').click(function(){
      var $this = $(this),
      className = 'section.' + $this.attr('class');
      $('section').fadeOut();
      $('body').find(className).fadeIn();
      setTimeout(function() {
          $('section.games').fadeOut();
          $('section.qutesports').fadeIn();
      }, 5000);
    });
  });
}(jQuery));
