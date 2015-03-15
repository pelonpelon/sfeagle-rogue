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

myapp = ->
  controller: ->

  view: (ctrl) ->
    m "a[href=\"http://sf-eagle.com\"]", title: "SF-Eagle.com",
      m ".logo"
        # m "img", src: logoUrl, width: '200', height: '200'

header = require("./components/header/header.controller")
m.module document.getElementById("header"), header

# footer = require("./components/footer/footer.controller")
# m.module document.getElementById("footer"), footer

m.route document.getElementById("main"), "/",
  "/": myapp()

