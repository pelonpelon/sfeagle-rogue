// app.js
'use strict';

var config = require('../gulp-config.js');
require('./styles/app.styl');
window.m = require('mithril');

var myapp = function() {
  return {

    controller: function() {
    },

    view: function(ctrl) {
      return m('h1', { style: {margin: '200px auto', textAlign: 'center'} }, 'Mithril.js');
    }
  };
};

var header = require('./components/header/header.controller.js');
m.module(document.getElementById('header'), header);

var footer = require('./components/footer/footer.controller.js');
m.module(document.getElementById('footer'), footer);

m.route(document.getElementById('myapp'), '/', {
  '/': myapp(),
});
