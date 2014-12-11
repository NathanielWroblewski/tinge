$(document).ready(function() {
  var COLORS = {
    turquoise: {
      r: 26,
      g: 188,
      b: 156
    },
    emerald: {
      r: 46,
      g: 204,
      b: 113
    },
    blue: {
      r: 52,
      g: 152,
      b: 219
    },
    purple: {
      r: 155,
      g: 89,
      b: 182
    },
    yellow: {
      r: 241,
      g: 196,
      b: 15
    },
    orange: {
      r: 230,
      g: 126,
      b: 34
    },
    red: {
      r: 231,
      g: 76,
      b: 60
    },
    darkBlue: {
      r: 52,
      g: 73,
      b: 94
    }
  }

  var LEVEL_SIZES = [
    {count: 25, size: 118},
    {count: 36, size: 98},
    {count: 49, size: 83},
    {count: 64, size: 72},
    {count: 81, size: 63},
    {count: 100, size: 58},
    {count: 121, size: 52},
    {count: 144, size: 47}
  ]

  var TINGE_DELTAS = [
    50, 40, 30, 20, 15, 10, 5, 1
  ]

  var game = new Tinge.Views.Game
  game.initialize({
    colors: COLORS,
    levelSizes: LEVEL_SIZES,
    tingeDeltas: TINGE_DELTAS
  })
})
