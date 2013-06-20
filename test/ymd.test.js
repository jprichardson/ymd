var testutil = require('testutil')
  , ymd = require('../lib/ymd')

describe('+ ymd', function() {
  it('should return the UTC date string', function() {
    EQ (ymd.utc(new Date('2013-03-05')), '2013-03-05') //JS parses this input to Date() as utc, midnight
  })

  it('should return the date string', function() {
    EQ (ymd(new Date('2013-03-05 4:43 PM')), '2013-03-05')
  })
})