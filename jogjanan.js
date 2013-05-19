//script navigasi jogjanan

var jogjanan = new function(){
	
	this.programmer = "Angga Christana";
	this.getInfo = function () {
    	return this.programmer 
		};

	this.init = function () {
		
		document.addEventListener("deviceready",jogjanan.onDeviceReady,false);
		
	$("#mainmenu" ).live( "click", function( event, data ){
         //class utk button utama tidak hilang
	    $( "#mainmenu" ).addClass('ui-btn-active');
         
      });
		
		}
	
	this.onDeviceReady = function (){
 
   
		}

	
	}