	
		function getDocHeight() {
		    var D = document;
		    return Math.max(
		        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
		        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
		        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
		    );
		}
	
	    function cambia() {
	  	
	    	alto_logo= 163;
	    	alto_pie= 181;
	    	alto_slalom= 55;
	    	ancho_slalom= 53;
	    	ancho_menu= 150;
	
	        $("#slalom", parent.document).css('height', '10px');  
	        $("#contenido", parent.document).css('height', '10px');  
	        $("#menu", parent.parent.document).css('height', '10px');  
	        $("#index_dyn", parent.parent.document).css('height', '10px');  
	
	    	alto = $(document).height();
	    	alto = ( parseInt(alto/alto_slalom) +1) *alto_slalom; 
	        
	        $("#slalom", parent.document).css('height', alto+'px');  
	        $("#contenido", parent.document).css('height', alto+'px');  

	    	alto_menu= $("#menu", parent.parent.document).height();
	    	alto_menu= 351;
	    	if (alto_menu <= (alto+alto_pie)) {
		    	alto_menu= alto+alto_pie;
	    	}
	        
	        $("#menu", parent.parent.document).css('height', alto_menu+'px');  
	        $("#index_dyn", parent.parent.document).css('height', alto_menu+'px');  
	

    		$("#menu", parent.parent.document).css('width', ancho_menu+'px');  
	        $("#montana", parent.parent.document).css('width', ancho_menu+'px');  
	
	    } 
	    
	    //Ejemplo de función que llama a cambia()
		function amp (visible, name_class) {
			if (visible == 1) {
				$('.'+name_class).show();
			}	
			else {
				$('.'+name_class).hide();
			}	
			cambia();
		}