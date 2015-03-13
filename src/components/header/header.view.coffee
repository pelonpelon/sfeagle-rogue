"use strict"
header = require("./header.model")
header.view = (ctrl) ->
  m ".page-title",
    [
      m("h1", header.vm.title)
      m("p", header.vm.subtitle)
    ]
