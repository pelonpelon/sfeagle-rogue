# app.js
"use strict"
config = require("../gulp-config.js")
require "./styles/app.styl"
window.m = require("mithril")

req = (args)->
  m.request(args)

logoUrl =  config.version + '/assets/logo-trans-black-200.png'
eventsUrl = config.version + '/assets/events.json'

getEvents = ->
  req({method: 'GET', url: eventsUrl }).then (events)->
    localStorage.setItem('events', JSON.stringify(events))

getEvents()

Menu = require './components/Menu/Menu.controller'
header = require "./components/header/header.controller"

Page = (module) ->
  return {
    controller: ->
      window.document.body.classList.remove('show-menu')
      new module.controller
    view: (ctrl) ->
      [
        m '.menu-wrap', Menu.view(new Menu.controller)
        m 'button.menu-button#open-button', onclick: Menu.vm.toggleMenu
        m '.content-wrap',
          [
            m '.header', header.view(new header.controller)
            m '.content', module.view(ctrl)
          ]
      ]
  }

m.route document.getElementById("container"), "/",
  "/": new Page(require('./components/Logo/Logo.controller'))
  "/storm": new Page(require('./components/Storm/Storm.controller'))

