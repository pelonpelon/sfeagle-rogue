'use strict'
# Menu.view.coffee

Menu = require './Menu.model'

Menu.view = (ctrl) ->
  [
    m 'nav.menu-header',
      m '.icon-list'
    m '.menu-items',
      Menu.vm.items.map (item) ->
        m 'a', href: '/storm', config: m.route, item
  ]

module.exports = Menu
