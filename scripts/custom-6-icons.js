// JavaScript Document

$(document).ready(function(){
		
	$(function() {
		$("#draggable").draggable({
			revert: true, 
			refreshPositions: true,
			//containment: '.circle-navigation',
			containment: 'document',
			grid: [0.1, 0.1],
			zIndex: 9700,
			stop: function(event, ui) {
				this._originalPageX = '#draggable'.pageX;
				this._originalPageY = '#draggable'.pageY;
				this._originalPosition = this._originalPosition || ui.originalPosition;
				ui.helper.animate( this._originalPosition );
			}
		});
		$("#draggable-2").draggable({
			revert: true, 
			refreshPositions: true,
			//containment: '.circle-navigation',
			containment: 'document',
			grid: [0.1, 0.1],
			zIndex: 9700,
			stop: function(event, ui) {
				this._originalPageX = '#draggable-2'.pageX;
				this._originalPageY = '#draggable-2'.pageY;
				this._originalPosition = this._originalPosition || ui.originalPosition;
				ui.helper.animate( this._originalPosition );
			}
		});
		$("#draggable-3").draggable({
			revert: true, 
			refreshPositions: true,
			//containment: '.circle-navigation',
			containment: 'document',
			grid: [0.1, 0.1],
			zIndex: 9700,
			stop: function(event, ui) {
				this._originalPageX = '#draggable-3'.pageX;
				this._originalPageY = '#draggable-3'.pageY;
				this._originalPosition = this._originalPosition || ui.originalPosition;
				ui.helper.animate( this._originalPosition );
			}
		});
		$("#draggable-4").draggable({
			revert: true, 
			refreshPositions: true,
			//containment: '.circle-navigation',
			containment: 'document',
			grid: [0.1, 0.1],
			zIndex: 9700,
			stop: function(event, ui) {
				this._originalPageX = '#draggable-4'.pageX;
				this._originalPageY = '#draggable-4'.pageY;
				this._originalPosition = this._originalPosition || ui.originalPosition;
				ui.helper.animate( this._originalPosition );
			}
		});
		$("#draggable-5").draggable({
			revert: true, 
			refreshPositions: true,
			//containment: '.circle-navigation',
			containment: 'document',
			grid: [0.1, 0.1],
			zIndex: 9700,
			stop: function(event, ui) {
				this._originalPageX = event.pageX;
				this._originalPageY = event.pageY;
				this._originalPosition = this._originalPosition || ui.originalPosition;
				ui.helper.animate( this._originalPosition );
			}
		});
		$("#draggable-6").draggable({
			revert: true, 
			refreshPositions: true,
			//containment: '.circle-navigation',
			containment: 'document',
			grid: [0.1, 0.1],
			zIndex: 9700,
			stop: function(event, ui) {
				this._originalPageX = '#draggable6'.pageX;
				this._originalPageY = '#draggable6'.pageY;
				this._originalPosition = this._originalPosition || ui.originalPosition;
				ui.helper.animate( this._originalPosition );
			}
		});
		
		$( "#droppable" ).droppable({ 
			hoverClass: "drophover",
			drop: function( event, ui ) {
				var currentId = $(ui.draggable).attr('id');
				if(currentId == "draggable"){
					$(this) 
					window.location.href = "home.html";
				}else if(currentId =="draggable-2"){
					$(this)
					window.location.href = "about.html";
				}else if(currentId =="draggable-3"){
					$(this)
					window.location.href = "portfolio.html";
				}
				else if(currentId =="draggable-4"){
					$(this)
					window.location.href = "sms:+1234567890";
				}
				else if(currentId =="draggable-5"){
					$(this)
					window.location.href = "contact.html";
				}
				else if(currentId =="draggable-6"){
					$(this)
					window.location.href = "tel:+1234567890";
				}
			}
		}); 
	});

});