function ymd (date) {
  date = date || new Date()

  var year = date.getFullYear().toString()
  var month = ('0' + (1 + date.getMonth())).slice(-2)
  var day = ('0' + date.getDate()).slice(-2)

  return Object.freeze({
    year: year,
    month: month,
    day: day,
    ymd: year + '-' + month + '-' + day,
    toString: function () {
      return this.ymd
    }
  })
}

function utc (date) {
  date = date || new Date()

  var year = date.getUTCFullYear().toString()
  var month = ('0' + (1 + date.getUTCMonth())).slice(-2)
  var day = ('0' + date.getUTCDate()).slice(-2)

  return Object.freeze({
    year: year,
    month: month,
    day: day,
    ymd: year + '-' + month + '-' + day,
    toString: function () {
      return this.ymd
    }
  })
}

ymd.utc = utc
module.exports = ymd
