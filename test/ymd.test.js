var test = require('ava')
var ymd = require('../')

test('ymd().toString() should return date string', function (t) {
  t.is(ymd(new Date('2013-03-05 4:43 PM')).toString(), '2013-03-05')
  t.is(ymd.utc(new Date('2013-03-05')).toString(), '2013-03-05')
  t.end()
})

test('ymd() does not require a date, defaults to current date', function (t) {
  t.is(typeof ymd(), 'object')
  t.is(typeof ymd.utc(), 'object')
  t.end()
})

test('ymd() should return year, month, and day', function (t) {
  t.is(ymd(new Date('2013-03-05 4:43 PM')).year, '2013')
  t.is(ymd(new Date('2013-03-05 4:43 PM')).month, '03')
  t.is(ymd(new Date('2013-03-05 4:43 PM')).day, '05')

  t.is(ymd.utc(new Date('2013-03-05 4:43 PM')).year, '2013')
  t.is(ymd.utc(new Date('2013-03-05 4:43 PM')).month, '03')
  t.is(ymd.utc(new Date('2013-03-05 4:43 PM')).day, '05')
  t.end()
})
