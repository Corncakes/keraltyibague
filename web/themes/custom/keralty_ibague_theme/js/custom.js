/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  var initialized;
  var slider1;
  var slider2;

  // Seleccionar el botón y el elemento
        var btn = document.getElementById('search-toggle');
        var btnClose = document.getElementById('search-toggle-close');
        var elemento = document.getElementById('block-formularioexpuestobusquedapage-1');
        var elementoCerrar = document.getElementById('search-toggle-container');
        // Agregar un evento de clic al botón
        btn.addEventListener('click', function() {
            // Cambiar el estilo de visualización del elemento a "block"
            elemento.style.display = 'block';
            btn.style.display = 'none';
            elementoCerrar.style.display = 'block';
        });

        // Agregar un evento de clic al botón cerrar
        btnClose.addEventListener('click', function() {
            // Cambiar el estilo de visualización del elemento a "block"
            elemento.style.display = 'none';
            btn.style.display = 'block';
            elementoCerrar.style.display = 'none';
        });

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
	   slider1 = tns1({ 
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
	  
	   if ( pageespecialidad || pageservicio){
		   if(document.querySelector('.especialistas-wrap')){
				slider2 = tns2({ 
					container: '.view-especialistas .especialistas-wrap',
					mode: 'carousel',
					"mouseDrag": true,
					controlsText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
					responsive: {
					0: {
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
						items: 5,
						center:true
					}
				}
			});
		 }
		}
	  /*Slideshow de servicios en detalle de servicios*/
	    if (document.querySelector('.node--type-servicio')){
			 
	  slider1 = tns1({ 
			container: '.view-servicios .servicios-wrap',
			mode: 'carousel',
			"mouseDrag": true,
			controlsText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
			responsive: {
                100: {
					controls:false,
					nav:false,
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
		
		if (document.querySelector('.node--type-article')){
	
		slider1 = tns1({ 
			
			mode: 'carousel',
			container: '.noticias-slide',
			"mouseDrag": true,
			controlsText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
			responsive: {
                0: {
					controls:false,
					nav:false,
                    gutter:10,
					edgePadding:40,
                    items: 1,
					center:true
                },
			    768: {
					controls:false,
					items: 2,
					center:false
                },
                1024: {
                    items: 4,
					center:false
				}
            }
		});
	}
	  /*Slideshow de noticias en el banner del home*/
      if (document.querySelector('.page-node-1')){
		slider1 = tns1({ 
			container: '.view-slider .view-content.row',
			mode: 'carousel',
			controlsPosition: 'bottom',
			navPosition: 'bottom',
			"mouseDrag": true,
			controlsText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
		});
		slider2 = tns2({ 
			container: '.view-noticias .news-wrap',
			mode: 'carousel',
			"mouseDrag": true,
			controlsText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
			responsive: {
                0: {
					controls:false,
					nav:false,
                    gutter:10,
					edgePadding:40,
                    items: 1,
					center:true
                },
			    768: {
					controls:false,
					items: 2,
					center:false
                },
                1024: {
                    items: 4,
					center:false
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