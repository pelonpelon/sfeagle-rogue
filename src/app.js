// app.js
'use strict';

window.m = require('mithril');

// tab routes
var ACCORDION1 = 0;
var ACCORDION2 = 1;
var MODAL = 2;
var TODOS = 3;
var XP = 4;

var app = function(tabNumber) {
  return {

    controller: function() {},

    view: function(controller) {
      return [
        m('h2.text-center', 'Mithril.js'),
      ];
    }
  };
};

m.route(document.getElementById('app'), '/', {
  '/': app(),
  // '/todos-xp': app(XP)
  '/todos-xp/:filter': app(XP)
});
