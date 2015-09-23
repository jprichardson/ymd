function ymd (date) {
  date = date || new Date()
  return date.getFullYear() + '-' + ('0' + (1 + date.getMonth())).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
}

function utc (date) {
  date = date || new Date()
  return date.getUTCFullYear() + '-' + ('0' + (1 + date.getUTCMonth())).slice(-2) + '-' + ('0' + date.getUTCDate()).slice(-2)
}

ymd.utc = utc
module.exports = ymd
