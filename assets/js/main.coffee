# Event date
countDownDate = new Date("Oct 17, 2017 10:00:00").getTime()

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

    #Countdown to event
    x = setInterval((->
      now = new Date().getTime();
      distance = countDownDate - now
      days = Math.floor(distance / (1000 * 60 * 60 * 24))
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      seconds = Math.floor((distance % (1000 * 60)) / 1000)
      $('#timer').text("#{days}d #{hours}h #{minutes}m #{seconds}s")

      if distance < 0
        clearInterval(x)
        $('#timer').text('Expired')
      return
    ), 1000)

    return
  return
) jQuery
