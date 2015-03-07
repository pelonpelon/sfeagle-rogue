# app.js
"use strict"
insert = require("insert-css")
config = require("../gulp-config.js")
require "./styles/app.styl"
window.m = require("mithril")

myapp = ->
  controller: ->

  view: (ctrl) ->
    m ".logo",
      m "a[href=\"http://sf-eagle.com\"]", title: "SF-Eagle.com",
        m "img", src: "http://sf-eagle.com/storm/images/logo-trans-black-240.png"

header = require("./components/header/header.controller")
m.module document.getElementById("header"), header

footer = require("./components/footer/footer.controller")
m.module document.getElementById("footer"), footer

m.route document.getElementById("rogue"), "/",
  "/": myapp()

css = ".logo { margin: 10% auto; text-align: center; } .logo img { margin: auto; }"
insert css,
  prepend: true

