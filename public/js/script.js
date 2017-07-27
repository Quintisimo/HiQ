(function($) {
  $(document).ready(function() {
    $('a').click(function(){
      var $this = $(this),
      className = 'section.' + $this.attr('class');
      $('a').removeClass('is-selected');
      $('section').fadeOut();
      $this.addClass('is-selected');
      $('body').find(className).fadeIn();
      setTimeout(function() {
          $('section.games').fadeOut();
          $('section.qutesports').fadeIn();
          $this.removeClass('is-selected');
      }, 420000);
    });
  });
}(jQuery));
