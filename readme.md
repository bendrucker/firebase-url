# firebase-url [![Build Status](https://travis-ci.org/bendrucker/firebase-url.svg?branch=master)](https://travis-ci.org/bendrucker/firebase-url)

> Parse and format Firebase URLs


## Install

```
$ npm install --save firebase-url
```


## Usage

```js
var firebaseUrl = require('firebase-url');

firebaseUrl.parse('https://your-endpoint.firebaseio.com/foo/bar');
firebaseUrl.format({
  endpoint: 'https://your-endpoint.firebaseio.com',
  path: '/foo/bar'
})
```

## API

### `parse(url)` -> `urlObject`

Parses a URL, returning a parsed URL object with the properties:

* `endpoint` (`string`)
* `path` (`string`)
* `isRoot` (`boolean`)
* `url` (`string`) normalized `url`

#### url

*Required*  
Type: `string`

A Firebase URL, either an endpoint or an endpoint plus a path.

### `format(urlObject)` -> `string`

##### urlObject

*Required*
Type: `object`  

Formats a `urlObject` back into a `url` string. The `urlObject` must have `endpoint` and `path` properties. All others are ignored.


## License

MIT © [Ben Drucker](http://bendrucker.me)
