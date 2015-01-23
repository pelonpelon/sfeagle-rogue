'use strict';

var jumbotron = m.element('jumbotron', {

  view: function(ctrl, inner) {
    return m('.jumbotron', [
      m('.container', [
        inner
      ])
    ]);
  }
});

var tabset = m.element('tabset', {

  controller: function(options) {

    var currentTab = options.active;
    var count = 0;
    var tabs = this.tabs = [];
    var content = this.content = [];

    this.style = options.style || 'tabs';

    function Select() {
      currentTab = this.tabIdx;
    }

    function active(tabIdx) {
      return tabIdx === currentTab ? 'active' : '';
    }

    function display(tabIdx) {
      return {
        display: (tabIdx === currentTab ? 'block' : 'none')
      };
    }

    m.element('tab', {
      controller: function(options) {
        this.tabIdx = count++;
        this.href = function() {
          return options.href ? {
            config: m.route,
            href: options.href
          } : {
            href: '#'
          };
        };
      },

      view: function(ctrl, inner) {
        var tabName = inner[0],
          tabContent = inner[1];
        tabs[ctrl.tabIdx] = m('li.tab', {
          onclick: Select.bind(ctrl),
          class: active(ctrl.tabIdx)
        }, m('a', ctrl.href(), tabName));
        content[ctrl.tabIdx] = m('.tabcontent', {
          style: display(ctrl.tabIdx)
        }, tabContent);
      }
    });

  },

  view: function(ctrl, tabs) {
    // tabs needs to be a factory in order to compile
    // directly into ctrl (ie parent / child) context
    tabs();
    return m('.tabset', [
      m('ul.nav.nav-' + ctrl.style, ctrl.tabs),
      m('div', ctrl.content)
    ]);
  }

});

module.exports = {
  jumbotron: jumbotron,
  tabset: tabset
};
