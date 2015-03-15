'use strict'
# Menu.controller.coffee

Menu = require './Menu.model.coffee'

Menu.controller = ->
  @menuItems = Menu.items

module.exports = Menu
