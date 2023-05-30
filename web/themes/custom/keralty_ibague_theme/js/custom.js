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
/*busqueda de texto en la página*/

	if (document.querySelector('.page-view-busqueda') || document.querySelector('.page-node-6')){
		
		var container;
		var search;
		if (document.querySelector('.page-view-busqueda')){
			container = document.getElementById("content");
		}
		if (document.querySelector('.page-node-6')){
			container = document.getElementById("block-views-block-articulos-de-investigacion-block-1");
		}
		
				function forEach(node, callback) {
					Array.prototype.forEach.call(node.childNodes, callback);
				}

				function searchText(container, search) {

					var total = 0;
					var reg = new RegExp("(" + search + ")", "gi");

					var cleanAllSearchSpans = function (parentNode) {
						forEach(parentNode, function (node) {
							if (node.nodeType === 1) {
								if (
									node.nodeName === "SPAN" &&
									node.dataset.search === "true"
								) {
									parentNode.replaceChild(
										document.createTextNode(node.innerText),
										node
									);
								} else {
									cleanAllSearchSpans(node);
								}
							}
						});
					};

					var highlightSearchInNode = function (parentNode, search) {
						forEach(parentNode, function (node) {
							if (node.nodeType === 1) {
								highlightSearchInNode(node, search);
							} else if (
								node.nodeType === 3 &&
								reg.test(node.nodeValue)
							) {
								var matches = node.nodeValue.match(reg);
								var span = document.createElement("span");
								span.dataset.search = "true";
								span.innerHTML = node.nodeValue.replace(reg, "<mark>$1</mark>");
								parentNode.replaceChild(span, node);
								total += matches.length;
							}
						});
					};

					cleanAllSearchSpans(container);
					container.normalize();
					highlightSearchInNode(container, search);

					return total;

				}

				if (document.querySelector('.page-view-busqueda')){
					search = document.getElementById("edit-search-api-fulltext--2").value;
				}
				if (document.querySelector('.page-node-6')){
					search = document.getElementById("edit-title").value;
				}
					
				if(search.length == 0) return;
				var finded = searchText(container, search);
	}

/*fin de búsqueda de texto en la página*/
  Drupal.behaviors.keralty_ibague_theme = {
    attach: function(context, settings) {
      init();
    }
  };

})(jQuery, Drupal);