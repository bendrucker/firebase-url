'use strict'

import test from 'tape'
import {parse, format} from '../'

test((t) => {
  t.test('parse', (t) => {
    const parsed = parse('https://host/path')
    t.deepEqual(parsed, {
      endpoint: 'https://host',
      path: '/path',
      isRoot: false,
      url: 'https://host/path'
    }, 'parses to endpoint and path')
    t.equal(parse('https://foo').path, '/', 'no path is /')
    t.equal(parse('https://foo/bar/').path, '/bar', 'strips trailing slash')
    t.equal(parse('https:///').path, '/')
    t.ok(parse('https://foo/').isRoot)
    t.notOk(parse('https://foo/bar').isRoot)
    t.end()
  })
  t.test('format', (t) => {
    t.equal(format({
      endpoint: 'https://',
      path: '/foo'
    }), 'https:///foo')
    t.equal(format({
      endpoint: 'https://',
      path: '/foo/'
    }), 'https:///foo')
    t.equal(format({
      endpoint: 'https://',
      path: 'foo'
    }), 'https:///foo')
    t.end()
  })
  t.end()
})
