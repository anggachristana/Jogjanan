//script navigasi jogjanan

var jogjanan = new function(){
	
	this.programmer = "Angga Christana";
	this.getInfo = function () {
    	return this.programmer 
		};

	this.init = function () {
		
		document.addEventListener("deviceready",jogjanan.onDeviceReady,false);
		
		$( "#mainmenu" ).bind( "click", function( event, data ){
         //class utk button utama tidak hilang
         $( "#mainmenu" ).addClass('ui-btn-active');
         
      });
		
		$("#halamandepan").bind("pageshow", function(){
			berandaxml.init("http://www.jogjanan.com/service/spotrandom.php");
			});
		
		         //class utk button utama tidak hilang
         $("#search").on("pageshow", function(){			 
			var param = jogjanan.searchpage('kata_kunci');
			document.getElementById("searchparam").innerHTML="hasil pencarian untuk " +param+ ":";
			var url ='http://jogjanan.com/service/spot_search.php/'+param;
			searchpage.init(url);
			 });         
      		
		$("#search").on("pageshow", function(){			 
			var param = jogjanan.searchpage('spot_id');
			document.getElementById("searchparam").innerHTML="hasil pencarian untuk " +param+ ":";
			var url ='http://jogjanan.com/service/spot.php/'+param;
			//searchpage.init(url);
		});         
      
	}
	
	this.onDeviceReady = function (){
 
   
		}
		
	this.searchpage = function (name){
		
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    	var regexS = "[\\?&]"+name+"=([^&#]*)";
    	var regex = new RegExp( regexS );
    	var results = regex.exec (window.location.href);
    	if (results == null)
        	return "";
	        else
    	    return results[1];
			}
			
	this.detail = function(url){
		var xml = 'data.xml?' + Math.random(0,1);
		$.ajax({
				type:"GET",
				dataType:"application/xml",
				url:url,
				success: parseXML
			
			});
		function parseXML(xml){
			var item = $('spot', xml).get();
			
			var spot_id = item.find('spot_id').text();
            var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
			var spot_latitude = item.find('spot_latitude').text();
			var spot_longitude = item.find('spot_longitude').text();
			var spot_facilities = item.find('spot_facilities').text();
            var html;
			
			}
		}

	
	}
	
	