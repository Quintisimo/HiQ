// jQuery
(function($) {

  $(document).ready(function() {

    // Shows section on click and starts a timer of 5mins till fadeout
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
