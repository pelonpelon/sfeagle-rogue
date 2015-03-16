'use strict'
# Logo.view.coffee


Logo = {}

Logo.controller = ->

Logo.view = (ctrl) ->
  m "a[href=\"http://sf-eagle.com\"]", title: "SF-Eagle.com",
    m ".logo"

module.exports = Logo
