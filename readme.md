# trim-keys [![Build Status](https://travis-ci.org/niksrc/trim-keys.svg?branch=master)](https://travis-ci.org/niksrc/trim-keys) [![Coverage Status](https://coveralls.io/repos/github/niksrc/trim-keys/badge.svg?branch=master)](https://coveralls.io/github/niksrc/trim-keys?branch=master)

> trim object keys to shave some bytes 🔪


## Install

```
$ npm install --save trim-keys
```


## Usage

```js
const trimKeys = require('trim-keys');

trimKeys({ home: 'Earth', isGlobalWarming: true });
//=> { h: 'Earth', i: true }
```


## API

### trimKeys(input)

#### input

Type: `object`

Object whose keys are trimmed

## License

MIT © [Nikhil Srivastava](http://niksrc.github.io)
