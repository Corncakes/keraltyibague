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
	  
	  /*Slideshow de especialidades quirurgicas en detalle de especialidades quirurgicas*/
	   if (document.querySelector('.node--type-especialidad')){
	  var slider_services = tne({ 
			container: '.view-especialidades-quirurgicas .especialidades-wrap',
			mode: 'carousel',
			"mouseDrag": true,
			controlsText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
			responsive: {
                376: {
					controls:false,
                    gutter:10,
					edgePadding:40,
                    items: 2
                },
			    768: {
					controls:false,
					items: 2
                },
                1024: {
					controls:true,
                    items: 4
				}
            }
		});
		}
	   /*Slideshow de especialidades quirurgicas en detalle de especialidades quirurgicas*/
	   var pageespecialidad=document.querySelector('.node--type-especialidad');
	   var pageservicio=document.querySelector('.node--type-servicio');
	   console.log(pageespecialidad || pageservicio);
	   if ( pageespecialidad || pageservicio){
		   if(document.querySelector('.view-especialistas')){
				var slider_services = tnesp({ 
					container: '.view-especialistas .especialistas-wrap',
					mode: 'carousel',
					"mouseDrag": true,
					controlsText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
					responsive: {
					376: {
						controls:false,
						gutter:10,
						edgePadding:40,
						items: 2
						},
					768: {
						controls:false,
						items: 2,
						center:true
						},
					1024: {
						controls:true,
						items: 4,
						center:true
					}
				}
			});
		 }
		}
	  /*Slideshow de servicios en detalle de servicios*/
	    if (document.querySelector('.node--type-servicio')){
	  var slider_services = tnsv({ 
			container: '.view-servicios .servicios-wrap',
			mode: 'carousel',
			"mouseDrag": true,
			controlsText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
			responsive: {
                376: {
					controls:false,
                    gutter:10,
					edgePadding:40,
                    items: 2
                },
			    768: {
					controls:false,
					items: 2
                },
                1024: {
					controls:true,
                    items: 4
				}
            }
		});
		}
		
	  /*Slideshow de noticias en el banner del home*/
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
                376: {
					controls:false,
                    gutter:10,
					edgePadding:40,
                    items: 1,
					center:true
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