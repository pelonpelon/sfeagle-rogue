/*
 * Mithril.Elements Starter Kit
 * Copyright (c) 2014 Phil Toms (@PhilToms3).
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

// global mithril.elements (alternatively, local require in each module)
window.m = require('mithril.elements');

// experimental - will probably be npm'd in next version
require('./components/mithril.bootstrap');

// tab routes
var ACCORDION1 = 0;
var ACCORDION2 = 1;
var MODAL = 2;
var TODOS = 3;
var XP = 4;

var app = function(tabNumber) {
  return {
    controller: function() {
      // initialize the pages as singletons
      // this.todos = require('./components/todos').module.instance();
    },

    view: function(controller) {
      return [
        m('jumbotron', [
          m('h1', 'Mithril Starter Kit'),
          m('h3', 'with Mithril.Elements v0.1.1')
        ]),
        m('h2.text-center', 'Click on any of the tab pills below'),
        m('h4.text-center', 'to reveal some custom elements in action'),
        m('tabset', {
          state: {
            active: tabNumber,
            style: 'pills'
          }
        }, function() {
            return [
              m('tab', {
                state: {
                  href: '/'
                }
              }, ['HOME', m('div', 'Welcome Home')]),
              m('tab', {
                state: {
                  href: '/todos-xp'
                }
                // }, ['Todo List', m(ctrl.todos)]];
            }, ['Todo List', 'hello'])];
          })
      ];
    }
  };
};

m.route(document.getElementById('app'), '/', {
  '/': app(),
  // '/todos-xp': app(XP)
  '/todos-xp/:filter': app(XP)
});
