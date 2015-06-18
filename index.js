'use strict'

var url = require('url')
var normalize = require('normalize-pathname')

exports.parse = function parseFirebaseUrl (uri) {
  var parsed = url.parse(uri)
  var endpoint = parsed.protocol + '//' + parsed.host
  var path = normalize(parsed.path || '') || '/'
  return {
    endpoint: endpoint,
    path: path,
    isRoot: path === '/',
    url: endpoint + path
  }
}

exports.format = function formatFirebaseUrl (uriObj) {
  return uriObj.endpoint + normalize(uriObj.path)
}
