(function($) {
  $(document).ready(function() {
    $('a').click(function(){
      var $this = $(this),
      className = 'section.' + $this.attr('class');
      $('section.games').css('display', 'none');
      $this.addClass('is-selected');
      $('body').find(className).css('display', 'block');
      setTimeout(function() {
        $('body').find(className).css('display', 'none');
        $this.removeClass('is-selected');
      }, 5000);
    });
  });
}(jQuery));
