'use strict';

var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/\.spec\.js$/.test(file));
});

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base',

  paths: {
    'component': 'app/js/component',
    'page': 'app/js/page',
    'flight': 'app/bower_components/flight',
    'bower': 'app/bower_components'
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});

jasmine.getFixtures().fixturesPath = 'base/test/fixtures';
