namespace('Tinge.Views')

Tinge.Views.Board = function() {
  this.initialize = function(options) {
    this.el  = options.el
    this.$el = $(this.el)
    this.tileCount = options.tileCount
    this.tileSize = options.tileSize
    this.color = options.color
    this.tingeIndex = _.random(this.tileCount - 1)
    this.tingeDelta = options.tingeDelta
    // this.setListeners()
  },

  this.collection = function() {
    return $(this.el + ' div')
  },

  this.template = function() {
    var template = ''
    _.times(this.tileCount, function() {
      template += '<div></div>'
    })
    return template
  },

  this.render = function() {
    this.$el.html(this.template())
    this.setSize()
    this.setColor()
    this.setTinge()
    return this
  },

  this.setSize = function() {
    this.collection().css({
      height: this.tileSize + 'px',
      width:  this.tileSize + 'px'
    })
  },

  this.setColor = function() {
    this.collection().css('background-color',
      'rgb(' +
        this.color.r + ',' +
        this.color.g + ',' +
        this.color.b +
      ')'
    )
  },

  this.setTinge = function() {
    $(this.collection()[this.tingeIndex]).css('background-color',
      'rgb(' +
        (this.color.r + this.tingeDelta) + ',' +
        (this.color.g + this.tingeDelta) + ',' +
        (this.color.b + this.tingeDelta) +
      ')'
    )
  },

  this.incrementColor = function(integer) {
    var summation = integer + this.tingeDelta
    return (summation > 255 ? 255 : summation)
  }

  this.gameOver = function() {
    this.collection().css({
      backgroundColor: '#444',
      border: '1px solid #dedede'
    })
  }
}
