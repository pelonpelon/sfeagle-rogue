'use strict'
# Storm.controller.coffee

Storm = {}

Storm.controller = ->
  window.document.location.href = 'http://sf-eagle.com/storm/index.php'

Storm.view = (ctrl) ->
  return m '.logo', style: {backgroundColor: 'black'},
    [
      m 'h4', 'This area of the site is under construction'
      m 'h5', 'You are being redirected to the original'
    ]

module.exports = Storm
