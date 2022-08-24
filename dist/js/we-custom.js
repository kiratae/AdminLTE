/* eslint-disable camelcase */

(function () {
  'use strict'
  $('.sidebar-mini.sidebar-collapse .nav-sidebar[data-widget="treeview"] > .nav-item > a').on('click', function (e) {
    if (e.target !== this) {
      return
    }

    return $('.sidebar-mini.sidebar-collapse').length !== 1
  })
  $('.sidebar-mini.sidebar-open .nav-sidebar .nav-item .nav-link[data-toggle="dropdown"]').on('click', function (e) {
    console.log('test')
    if (e.target !== this) {
      return
    }

    return $('.sidebar-mini.sidebar-open').length !== 1
  })
})(jQuery)
