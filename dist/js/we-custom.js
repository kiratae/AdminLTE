/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */

/* eslint-disable camelcase */

(function () {
  'use strict'
  $('.sidebar-mini .nav-sidebar[data-widget="treeview"] .nav-item').off('click').on('click', function (e) {
    e.preventDefault()
    console.log('test')
    return false
  })
})(jQuery)
