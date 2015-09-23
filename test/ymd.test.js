var test = require('ava')
var ymd = require('../')

test('ymd() should return date string', function (t) {
  t.is(ymd(new Date('2013-03-05 4:43 PM')), '2013-03-05', 'ymd() returns a date string')
  t.is(ymd.utc(new Date('2013-03-05')), '2013-03-05', 'ymd.utc() returns a date string')
  t.end()
})

test('ymd() does not require a date, defaults to current date', function (t) {
  t.is(typeof ymd(), 'string', 'defaults to current date')
  t.is(typeof ymd.utc(), 'string', 'defaults to current date')
  t.end()
})
