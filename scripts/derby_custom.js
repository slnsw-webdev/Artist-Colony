    // photoswipe lib call
	(function(window, PhotoSwipe){
		document.addEventListener('DOMContentLoaded', function(){
			var
				options = {
					getImageCaption: function(el){
						var captionText, captionEl;
						
						// Get the caption from the alt tag
						if (el.nodeName === "IMG"){
							captionText = el.getAttribute('alt'); 
						}
						var i, j, childEl;
						for (i=0, j=el.childNodes.length; i<j; i++){
							childEl = el.childNodes[i];
							if (el.childNodes[i].nodeName === 'IMG'){
								captionText = childEl.getAttribute('alt'); 
							}
						}
						
						// Return a DOM element with custom styling
						captionEl = document.createElement('div');
						captionEl.style.cssText = 'background: white; font-weight: bold; padding: 5px;';
						captionEl.appendChild(document.createTextNode(captionText));
						return captionEl;
	
					}
				},
				instance = PhotoSwipe.attach( window.document.querySelectorAll('#gallery a'), options );
		}, false);
	}(window, window.Code.PhotoSwipe));
	
	// init
	$(document).ready(function(){
	
		(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
				
			var slider = new Swipe(document.getElementById('slider'));
		
		
			$('.next-but-swipe').click(function(){
				slider.next();
				return false;
			});
			
			$('.prev-but-swipe').click(function(){
				slider.prev();
				return false;
			});
					
			
			$('.toggle-plus').click(function(){
				$(this).toggleClass('toggle-plus-selected');
				$(this).parent().find('.toggle-content').toggle(100);
				return false;
			});
			
			$('.toggle-arrow').click(function(){
				$(this).toggleClass('toggle-arrow-selected');
				$(this).parent().find('.toggle-content').toggle(100);
				return false;
			});
			
			$('.checkbox-1').click(function(){
				$(this).toggleClass('checkbox-1-selected')
				return false;
			});
			
			$('.checkbox-2').click(function(){
				$(this).toggleClass('checkbox-2-selected')
				return false;
			});
			
			$('.radio-1').click(function(){
				$(this).toggleClass('radio-1-selected')
				return false;
			});
			
			$('.radio-2').click(function(){
				$(this).toggleClass('radio-2-selected')
				return false;
			});
			
			$('#one').click(function(){
				$('#one').addClass('selected-page-nav');
				$('#two, #three').removeClass('selected-page-nav');
				$('.two, .three').hide();
				$('.one').fadeIn();
				return false;
			});
			
			$('#two').click(function(){
				$('#two').addClass('selected-page-nav');
				$('#one, #three').removeClass('selected-page-nav');
				$('.one, .three').hide();
				$('.two').fadeIn();
				return false;
			});
			
			$('#three').click(function(){
				$('#three').addClass('selected-page-nav');
				$('#two, #one').removeClass('selected-page-nav');
				$('.two, .one').hide();
				$('.three').fadeIn();
				return false;
			});
				
			$('.navigation').animate({height:'toggle'},0);
			$('.navigation-strip').click(function(){
				$('.navigation').animate({height:'toggle'});
				$('.navigation-strip').toggleClass('selected-navigation-strip');
				return false;
			});
		
			$('#no').click(function(){
				$('.click-interface').show();
				$('.drag-interface').hide();
				$('.no').hide();
				$('.yes').show();
				return false;
			});	
			
			$('#yes').click(function(){
				$('.click-interface').hide();
				$('.drag-interface').show();
				$('.no').show();
				$('.yes').hide();
				return false;
			});
		
		
			$(".notification-quit-red").click(function(){
			  $(".notification-box-red").hide("slow");
			  return false;
			});
			
			$(".notification-quit-green").click(function(){
			  $(".notification-box-green").hide("slow");
			  return false;
			});
			
			$(".notification-quit-yellow").click(function(){
			  $(".notification-box-yellow").hide("slow");
			  return false;
			});
			
			$(".notification-quit-blue").click(function(){
			  $(".notification-box-blue").hide("slow");
			  return false;
			});
			
			$('.dissmiss-notification-box').click(function(){
				$('.hide-body').fadeOut();
				$('.notification-main-box').fadeOut();
				return false;
			});
		
			$('a.back-up').click(function(){
				 $('html, body').animate({scrollTop: '0px'}, 300);
				 return false;
			});
			
		
		});