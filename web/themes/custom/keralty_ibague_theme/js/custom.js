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

      $(".boton-buscar").click(function(){
        $(".form-buscar").show();
      });

      $(document).keyup(function(e) {
        if (e.which == 27) {
          $(".form-buscar").hide(); 
        }
      });
      
      var slider = tns({ 
        container: '.view-slider .view-content.row',
        mode: 'carousel',
        controlsPosition: 'bottom',
        navPosition: 'bottom',
        "mouseDrag": true,
        controlsText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
      });
    }
  }

  Drupal.behaviors.keralty_ibague_theme = {
    attach: function(context, settings) {
      init();
    }
  };

})(jQuery, Drupal);