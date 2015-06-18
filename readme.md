# firebase-url [![Build Status](https://travis-ci.org/bendrucker/firebase-url.svg?branch=master)](https://travis-ci.org/bendrucker/firebase-url)

> Parse and format Firebase URLs


## Install

```
$ npm install --save firebase-url
```


## Usage

```js
var firebaseUrl = require('firebase-url')
// inverses
firebaseUrl.parse('https://your-endpoint.firebaseio.com/foo/bar')
firebaseUrl.format({
  endpoint: 'https://your-endpoint.firebaseio.com',
  path: '/foo/bar'
})
```

## API

#### `parse(uri)` -> `uriObject`

Parses a URL, returning a parsed URL object with the properties:

* `endpoint` (`string`)
* `path` (`string`)
* `isRoot` (`boolean`)
* `uri` (`string`) normalized `uri`

##### uri

*Required*  
Type: `string`

A Firebase URL, either an endpoint alone or an endpoint plus a path.

#### `format(urlObject)` -> `string`

##### uriObject

*Required*  
Type: `object`

Formats a `uriObject` back into a `uri` string. The `uriObject` must have `endpoint` and `path` properties. All others are ignored.


## License

MIT © [Ben Drucker](http://bendrucker.me)
