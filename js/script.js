$(document).ready(function() {

  'use strict';

  // =================
  // Responsive videos
  // =================

  $('.post-content').fitVids();

  // ===============
  // Off Canvas menu
  // ===============

  $('.off-canvas-toggle').click(function(event) {
    event.preventDefault();
    $('.off-canvas-container').toggleClass('is-active');
  });

});
