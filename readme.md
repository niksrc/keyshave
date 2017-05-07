# keyshave [![Build Status](https://travis-ci.org/niksrc/keyshave.svg?branch=master)](https://travis-ci.org/niksrc/keyshave) [![Coverage Status](https://coveralls.io/repos/github/niksrc/keyshave/badge.svg?branch=master)](https://coveralls.io/github/niksrc/keyshave?branch=master)

> trim object keys to shave some bytes 🔪


## Install

```
$ npm install --save keyshave
```


## Usage

```js
const keyShave = require('keyshave');

keyShave({ home: 'Earth', isGlobalWarming: true });
//=> { h: 'Earth', i: true }
```


## API

### keyShave(input)

#### input

Type: `object`

Object whose keys are trimmed

## License

MIT © [Nikhil Srivastava](http://niksrc.github.io)
