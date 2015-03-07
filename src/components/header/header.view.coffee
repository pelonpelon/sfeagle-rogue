"use strict"
header = require("./header.model")
header.view = (ctrl) ->
  m ".page-title",
    style:
      width: "100%"
      boxSizing: "border-box"
      margin: "0 auto"
      backgroundColor: "#ddd"
      padding: "40px"
  , [
    m("h1", header.vm.title)
    m("p", header.vm.subtitle)
  ]
