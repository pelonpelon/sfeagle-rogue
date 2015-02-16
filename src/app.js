// app.js
'use strict';

var config = require('../gulp-config.js');
require('./styles/' + config.version + '.styl');
window.m = require('mithril');

// tab routes
var XP = 1;

var model = [
  'apple',
  'tomato',
  'carrot'
];

var app = function(tabNumber) {
  return {

    controller: function() {
      this.items = model;
    },

    view: function(ctrl) {
      return [
        m('h2.text-center', 'Mithril'),
        m('.list', {
          style: 'color:blue;'
        }, 'List'),
        m('ul', {  }, [
          ctrl.items.map(function(item, idx) {
            return m('li', {
              style: 'margin: 5px 20px'
            }, item);
          })
        ]),
        m('footer', 'Footer')
      ];
    }
  };
};

m.route(document.getElementById('app'), '/', {
  '/': app(),
  // '/todos-xp': app(XP)
  '/todos-xp/:filter': app(XP)
});
