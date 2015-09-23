var test = require('ava')
var ymd = require('../')

test('ymd() should return date string', function (t) {
  t.is(ymd(new Date('2013-03-05 4:43 PM')), '2013-03-05', 'ymd() returns a date string')
  t.is(ymd.utc(new Date('2013-03-05')), '2013-03-05', 'ymd.utc() returns a date string')
  t.end()
})

  it('should return the date string', function() {
    assert.strictEqual(ymd(new Date('2013-03-05 4:43 PM')), '2013-03-05')
  })
})
