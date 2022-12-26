/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  var initialized;

  function init() {
    if (!initialized) {
      initialized = true;
      var slider = tns({ 
        container: '.view-slider .view-content.row',
        mode: 'carousel',
        controlsPosition: 'bottom',
        navPosition: 'bottom',
        "mouseDrag": true,
      });
    }
  }

  Drupal.behaviors.keralty_ibague_theme = {
    attach: function(context, settings) {
      init();
    }
  };

})(jQuery, Drupal);