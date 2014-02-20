    // GA code 
	var gaPlugin;

	function initialize() {
		document.addEventListener("deviceready", onDeviceReady, true);
	}

	function onDeviceReady() {
		gaPlugin = window.plugins.gaPlugin;

		// Note: A request for permission is REQUIRED by google. You probably want to do this just once, though, and remember the answer for subsequent runs.
		navigator.notification.confirm('Artist colony would like your permission to collect usage data. No personal or user identifiable data will be collected.', permissionCallback, 'Attention', 'Allow,Deny');
	}

	function permissionCallback (button) {
		if (button === 1)
			gaPlugin.init(nativePluginResultHandler, nativePluginErrorHandler, "UA-108603-3", 10);
	}

	function nativePluginResultHandler (result) {
		//alert('nativePluginResultHandler - '+result);
		console.log('nativePluginResultHandler: '+result);

	}

	function nativePluginErrorHandler (error) {
		//alert('nativePluginErrorHandler - '+error);
		console.log('nativePluginErrorHandler: '+error);
	}

	function TrackButtonClicked() {
		gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Button", "Click", "event only", 1);
	}

	function VariableButtonClicked() {
		// Set a dimension based on index and value. Make sure you have added a dimension in the GA dashboard to the
		// default property for the passed in index, and your desired scope. GA allows up to 20 dimensions for a free account
		gaPlugin.setVariable( nativePluginResultHandler, nativePluginErrorHandler, 1, "Purple");

		// dimensions are are passed to the next event sent to GA. go ahead and fire off an event with the label (key) of your choice
		// In this example, the label for custom dimension 1 will show up in the dashboard as "favoriteColor". This is much more efficent
		// than the old custom variable method introduced in V1, (plus you get 20 free dimensions vs 5 free custom variables)
		gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "event with variable", "set variable", "favoriteColor", 1);
	}

	function PageButtonClicked() {
		gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "some.url.com");
	}

	function goingAway() {
		gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);
	}
	
	
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
						captionEl.style.cssText = 'font-weight: bold; padding: 5px;';
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