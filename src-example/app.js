// app.js
'use strict';

var config = require('../gulp-config.js');
require('./styles/app.styl');
window.m = require('mithril');

var model = [
  'apple',
  'tomato',
  'carrot'
];

var myapp = function(tabNumber) {
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

m.route(document.getElementById('myapp'), '/', {
  '/': myapp(),
});
