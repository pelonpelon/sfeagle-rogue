'use strict';

var header = {};

header.vm = (function() {
  var vm = {};

  vm.init = function() {
    vm.title = 'Development Setup';
    vm.subtitle = 'mithril, jade, coffeescript, stylus, gulp, webpack, rsync';

    // nothing

    return vm;
  };

  return vm;
}());

module.exports = header;
