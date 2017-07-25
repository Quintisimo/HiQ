(function($) {
  $(document).ready(function() {
    $('a').click(function(){
      var $this = $(this),
      className = 'section.' + $this.attr('class');
      $('section.games').fadeOut();
      $('a').removeClass('is-selected');
      $this.addClass('is-selected');
      $('body').find(className).fadeIn();
      setTimeout(function() {
        $('body').find(className).fadeOut();
        $this.removeClass('is-selected');
      }, 420000);
    });
  });
}(jQuery));
