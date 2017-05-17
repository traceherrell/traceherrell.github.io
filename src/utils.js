
export default {
  $: function (selector) {
    return document.querySelector(selector)
  },
  on: function (element, events, handler) {
    if (!(events instanceof Array)) {
      events = [events]
    }
    for (var i = 0; i < events.length; i++) {
      element.addEventListener(events[i], handler)
    }
  },
  off: function (element, events, handler) {
    if (!(events instanceof Array)) {
      events = [events]
    }
    for (var i = 0; i < events.length; i++) {
      element.removeEventListener(events[i], handler)
    }
  }
}
