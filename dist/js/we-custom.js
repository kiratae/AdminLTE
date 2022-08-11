/* eslint-disable camelcase */

(function () {
  'use strict'
  $('.sidebar-mini .nav-sidebar[data-widget="treeview"] .nav-item').on('click', function () {
    return $('.sidebar-mini.sidebar-collapse').length !== 1
  })
})(jQuery)
