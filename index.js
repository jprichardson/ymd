function ymd (date) {
  date = date || new Date()
  return {
    year: '' + date.getFullYear().toString(),
    month: ('0' + (1 + date.getMonth())).slice(-2),
    day: ('0' + date.getDate()).slice(-2),
    toString: function () {
      return this.year + '-' + this.month + '-' + this.day
    }
  }
}

function utc (date) {
  date = date || new Date()
  return {
    year: date.getUTCFullYear().toString(),
    month: ('0' + (1 + date.getUTCMonth())).slice(-2),
    day: ('0' + date.getUTCDate()).slice(-2),
    toString: function () {
      return this.year + '-' + this.month + '-' + this.day
    }
  }
}

ymd.utc = utc
module.exports = ymd
