'use strict'
# Menu.model.coffee

classie = require '../../common/classie'

Menu = {}

Menu.vm = (->
  vm = {}
  vm.isOpen = m.prop(false)
  vm.init = ->
    vm.items = [
      'calendar',
      'staff',
      'contact us',
      'about us',
      'recommended',
      'softball',
      'book an event',
      'book my band',
      'merchandise',
      ''
    ]

    bodyEl = document.body
    content = document.querySelector(".content-wrap")

    vm.toggleMenu = (ev) ->
      if ev.target is document.getElementById('open-button')
        console.log 'toggleMenu', 'isOpen: ', vm.isOpen()
        if bodyEl.classList.contains('show-menu')
          classie.remove bodyEl, "show-menu"
          vm.isOpen(false)
        else
          classie.add bodyEl, "show-menu"
          vm.isOpen(true)
        console.log 'after toggleMenu', 'isOpen: ', vm.isOpen()
      return

    content.addEventListener "click", (ev) ->
      vm.toggleMenu(ev)
      return

    vm
  vm
)()

module.exports = Menu
