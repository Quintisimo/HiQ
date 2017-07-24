(function($) {
  $(document).ready(function() {
    $('a').mouseover(function(){
      var $this = $(this),
      className = 'section.' + $this.attr('class');
      $('section.games').css('display', 'none');
      $('body').find(className).css('display', 'block');
    }).mouseout(function() {
      var $this = $(this),
      className = 'section.' + $this.attr('class');
      setTimeout(function() {
        $('body').find(className).css('display', 'none');
      }, 5000);
    });
  });
}(jQuery));
