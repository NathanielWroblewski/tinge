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
    },
    salmon: {
      r: 242,
      g: 120,
      b: 75
    },
    jungleGreen: {
      r: 38,
      g: 194,
      b: 129
    },
    salem: {
      r: 30,
      g: 130,
      b: 76
    },
    jade: {
      r: 0,
      g: 177,
      b: 106
    },
    observatory: {
      r: 4,
      g: 147,
      b: 114
    },
    cream: {
      r: 200,
      g: 247,
      b: 197
    },
    pink: {
      r: 224,
      g: 130,
      b: 131
    },
    sunsetOrange: {
      r: 146,
      g: 71,
      b: 71
    },
    razzmatazz: {
      r: 219,
      g: 10,
      b: 91
    },
    radicalRed: {
      r: 246,
      g: 36,
      b: 89
    },
    plum: {
      r: 145,
      g: 61,
      b: 136
    },
    dodgerBlue: {
      r: 25,
      g: 181,
      b: 254
    },
    fountainBlue: {
      r: 92,
      g: 151,
      b: 191
    },
    eucalyptus: {
      r: 38,
      g: 166,
      b: 91
    }
  }

  var LEVEL_SIZES = [
    {count: 25, size: 118},
    {count: 25, size: 118},
    {count: 25, size: 118},
    {count: 36, size: 98},
    {count: 36, size: 98},
    {count: 36, size: 98},
    {count: 49, size: 83},
    {count: 49, size: 83},
    {count: 49, size: 83},
    {count: 64, size: 72},
    {count: 64, size: 72},
    {count: 64, size: 72},
    {count: 81, size: 63},
    {count: 81, size: 63},
    {count: 81, size: 63},
    {count: 100, size: 58},
    {count: 100, size: 58},
    {count: 100, size: 58},
    {count: 121, size: 52},
    {count: 121, size: 52},
    {count: 121, size: 52},
    {count: 144, size: 47},
    {count: 144, size: 47},
    {count: 144, size: 47}
  ]

  var TINGE_DELTAS = [
    50,
    50,
    45,
    40,
    40,
    35,
    30,
    30,
    25,
    20,
    20,
    20,
    15,
    15,
    15,
    10,
    10,
    10,
    5,
    5,
    5,
    1,
    1,
    1
  ]

  var game = new Tinge.Views.Game
  game.initialize({
    colors: COLORS,
    levelSizes: LEVEL_SIZES,
    tingeDeltas: TINGE_DELTAS
  })
})
