(->
  init = ->
    initEvents()
    return

  initEvents = ->
    openbtn.addEventListener "click", toggleMenu
    closebtn.addEventListener "click", toggleMenu  if closebtn

    # close the menu element if the target it´s not the menu element or one of its descendants..
    content.addEventListener "click", (ev) ->
      target = ev.target
      toggleMenu()  if isOpen and target isnt openbtn
      return

    return

  toggleMenu = ->
    if isOpen
      classie.remove bodyEl, "show-menu"
    else
      classie.add bodyEl, "show-menu"
    isOpen = not isOpen
    return

  bodyEl = document.body
  content = document.querySelector(".content-wrap")
  openbtn = document.getElementById("open-button")
  closebtn = document.getElementById("close-button")
  isOpen = false
  init()
  return
)()
