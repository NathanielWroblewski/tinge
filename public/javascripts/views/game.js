namespace('Tinge.Views')

Tinge.Views.Game = function() {
  this.initialize = function(options) {
    this.gameOver = false
    this.score = 0
    this.level = 0
    this.colors = options.colors
    this.levelSizes = options.levelSizes
    this.tingeDeltas = options.tingeDeltas
    this.board = this.newBoard()
    this.board.render()
    this.setListeners()
  },

  this.newBoard = function() {
    this.board = new Tinge.Views.Board
    this.board.initialize({
      el: '#tinge',
      tileCount: this.levelSizes[this.level].count,
      tileSize:  this.levelSizes[this.level].size,
      color: _.sample(this.colors),
      tingeDelta: this.tingeDeltas[this.level]
    })
    return this.board
  },

  this.setListeners = function() {
    this.board.$el.on('click', $.proxy(this.verify, this))
  },

  this.verify = function(e) {
    if (this.gameOver) return false
    if (this.level === 25) return this.winGame()
    var clickedIndex = _.indexOf(this.board.collection(), e.target)
    if (clickedIndex === this.board.tingeIndex) {
      this.incrementScore()
      this.incrementLevel()
      this.newBoard()
      this.board.render()
    } else {
      this.endGame()
    }
  },

  this.incrementScore = function() {
    this.score += 100
    $('.score').html(this.score)
  },

  this.incrementLevel = function() {
    this.level += 1
  },

  this.endGame = function() {
    this.gameOver = true
    this.board.gameOver()
    $('.gameover').show()
  },

  this.winGame = function() {
    this.gameOver = true
    this.board.gameOver()
    $('.youwin').show()
  }
}
