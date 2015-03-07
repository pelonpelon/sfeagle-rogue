// app.js
'use strict';

var config = require('../gulp-config.js');
require('./styles/app.styl');
window.m = require('../mithril-palantir.js');

var app = {};

app.controller = function() {};
app.view = function(ctrl) {

  return m('h1', 'Welcome to Rogue');
};

var home = {

  controller: function() {

  },
  view: function(ctrl) {

    return m('.home', 'Welcome Home');
  }

};

m.route.mode = 'search';
m.route(document.getElementById('rogue'), '/', {
  '/': 'app',
  '/home': 'home'
}, false);
