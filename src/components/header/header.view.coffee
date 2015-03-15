'use strict'
# header.view.coffee

header = require("./header.model")
header.view = (ctrl) ->
  m 'div',
    [
      m 'button.menu-button#open-button'
      m 'h1.page-title', header.vm.title
      m '.logo'
    ]
