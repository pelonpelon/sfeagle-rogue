"use strict"

footer = {}

footer.controller = ->

footer.view = (ctrl) ->
  vm = footer.vm
  m "div",
    style:
      width: "100%"
      height: "40px"
      lineHeight: "40px"
      color: "#999"
  , "©sf-eagle, inc."

module.exports = footer
