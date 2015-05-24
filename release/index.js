'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.parse = parse;
exports.format = format;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _url = require('url');

var _normalizePathname = require('normalize-pathname');

var _normalizePathname2 = _interopRequireDefault(_normalizePathname);

'use strict';

function parse(url) {
  var parsed = _url.parse(url);
  var endpoint = '' + parsed.protocol + '//' + parsed.host;
  var path = _normalizePathname2['default'](parsed.path || '') || '/';
  return {
    endpoint: endpoint,
    path: path,
    isRoot: path === '/',
    url: endpoint + path
  };
}

function format(_ref) {
  var endpoint = _ref.endpoint;
  var path = _ref.path;

  return endpoint + _normalizePathname2['default'](path);
}