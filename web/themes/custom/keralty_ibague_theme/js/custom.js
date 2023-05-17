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
      if (document.querySelector('.page-node-1')){
		var slider = tns({ 
			container: '.view-slider .view-content.row',
			mode: 'carousel',
			controlsPosition: 'bottom',
			navPosition: 'bottom',
			"mouseDrag": true,
			controlsText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
		});
		var slider_news = tnn({ 
			container: '.view-noticias .news-wrap',
			mode: 'carousel',
			"mouseDrag": true,
			controlsText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
			responsive: {
                576: {
					controls:true,
                    gutter:-10,
                    items: 1
                },
			    768: {
					controls:false,
					items: 2
                },
                1024: {
                    items: 4
				}
            }
		});
	  }
	  var acc = document.querySelectorAll(".site-footer .block-menu");
	  var i;

for (i = 0; i < acc.length; i++) {
	
	acc[i].classList.toggle("inactive");
  acc[i].querySelector("h2").addEventListener("click", function() {
	  console.log(this.parentElement);
    this.parentElement.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
    }
  }

  Drupal.behaviors.keralty_ibague_theme = {
    attach: function(context, settings) {
      init();
    }
  };

})(jQuery, Drupal);