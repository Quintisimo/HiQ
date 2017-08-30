# jQuery
(($) ->

  $(document).ready ->

    # Shows section on click and starts a timer of 5mins till fadeout
    $('a').click ->
      $this = $(this)
      if !($this.hasClass('is-selected'))
        className = 'section.' + $this.attr('class')
        $('a').removeClass('is-selected')
        $('section').fadeOut()
        $this.addClass('is-selected')
        $('body').find(className).fadeIn()
        setTimeout ->
          $('section.games').fadeOut()
          $('section.qutesports').fadeIn()
          $this.removeClass('is-selected')
          return
        , 420000
        return
    return
  return
) jQuery
