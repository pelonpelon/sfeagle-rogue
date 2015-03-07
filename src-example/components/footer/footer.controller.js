'use strict';

var footer = {};

footer.controller = function() {
  // nada
};

footer.view = function(ctrl) {
  var vm = footer.vm;

  return m('div', { style: {
      width: '100%',
      height: '40px',
      backgroundColor: '#ccc',
      lineHeight: '40px',
      textAlign: 'center'
    }}, 'footer'
  );
};

module.exports = footer;
