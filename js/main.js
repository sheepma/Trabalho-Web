/* JavaScript Task Maneger - 2017, Mateus Lins Aceto */


//chamada das funções quando o documento terminar de ser inicializado

$(document).ready(function() {
	app.materialize();	
	app.masonry();
	app.iniCards();
	app.loginTest();
	setInterval(function(){
		app.cardFilter();		
	}, 100);
		
	
});

// Funções

var app = 
    (function(self, $) {
		//Inicialização dos componetes do materialize	
		self.materialize = function(){
			$(".button-collapse").sideNav();
			$('.modal').modal();
			setTimeout(function(){
				 $('.tap-target').tapTarget('open');
			}, 1000);
			$('.chips-initial').material_chip({
				placeholder: '+Filtro',
				secondaryPlaceholder: 'Filtro Tarefas',
				data: [{
				  tag: 'Matemática',
				}, {
				  tag: 'Biologia',
				}, {
				  tag: 'Quimíca',
				}, {
				  tag: 'Física',
				},	{
				  tag: 'Informática',
				}],
				autocompleteOptions: {
				  data: {
					'Informática': null,
					'Física': null,
					'Quimíca': null,
					'Matemática': null,
					'Biologia': null
				  },
				  limit: Infinity,
				  minLength: 1
				},
				
		  });
		  $('.chips-initial').find('.chip').each(function(){
			  $(this).attr('id', $(this).text());
		  })
		   $('.parallax').parallax();
		    $('ul.tabs').tabs();
			
		}
		
		
		
		//inicializando a LIB masonry...
		
		self.masonry = function(){
			var $grid = $('.grid').masonry({
			  itemSelector: '.grid-item'
			});
			$grid.masonry();	
			
			
		}
		
		//sistema de filtros
		
		self.iniCards = function(){
			console.log('teste');
			$('#cardGrid').find('.grid-item').each(function(){
				$(this).css('display', 'none');
			});			
		}
		
		self.cardFilter = function(){			
			var $grid = $('.grid').masonry({
			  itemSelector: '.grid-item'
			});		
			$('#cardGrid').find('.grid-item').each(function(){
				$(this).css('display', 'none');
			});	
			$('.chips-initial').find('.chip').each(function(){
				$('#cardGrid').find('div[id="' + $(this).text() + '"]').each(function(){
					$(this).css('display', 'block');
				});
			});
			$grid.masonry();
		}
		
		self.loginTest = function(){
			$('#loginSubmit').click(function(){
				if($('#loginEmail').val() == "nicolas_gandalf@gmail.com" && $('#loginPass').val() == "unicornio123"){
					window.location.replace("index.html");
				}
				else{
					 Materialize.toast('Email ou senha estão incorretos!', 4000);
				}
				
			})	
			
		}
		
		
		
		
		
		
		return self;
	} (app||{}, jQuery));
