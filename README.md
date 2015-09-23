ymd
===

JavaScript component to return the year, month, and day. Call `toString()` and returns `YYYY-MM-dd` from Date object.


Why?
----

It's really useful to get a date in the format of `YYYY-MM-dd`.


Install
------------------

    npm i --save ymd


Methods
-------

### ymd([date])

- returns an object using local timezone. Object contains following members:
`year`, `month`, `day`, `ymd`, and `toString()`.


### ymd.utc([date])

- returns using UTC timezone.


Example
------

```js
var ymd = require('ymd')

console.log(ymd(new Date('2013-03-05 4:43 PM').ymd))
// => '2013-03-05'

console.log(ymd().ymd)
// => date in 'YYYY-MM-dd' format
```


License
-------

(MIT License)

Copyright (c) [JP Richardson](https://github.com/jprichardson)
