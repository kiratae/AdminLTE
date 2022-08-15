/* eslint-disable camelcase */

(function () {
  'use strict'
  $('.sidebar-mini.sidebar-collapse .nav-sidebar[data-widget="treeview"] > .nav-item > a').on('click', function (e) {
    if (e.target !== this) {
      return
    }

    return $('.sidebar-mini.sidebar-collapse').length !== 1
  })
})(jQuery)
