angular.module("compAgenda", [])
	.controller("compAgenda",["$log","$rootScope", function($log,$rootScope){
	  	var ag = this;
	 
	  	/*MVF - Modifico CSS*/
	    ag.addActividad= function(){
	    	$rootScope.idMax ++;
		    var nombre = ag.actividades.nombre;
		    var fecha = ag.actividades.fecha ;
		    var lugar = ag.actividades.lugar;
		    var categoria = ag.actividades.categoria;
		    var alarma = ag.actividades.alarma;
		    var hora = ag.actividades.hora;

		    if (nombre != "" && fecha != ""){
		    	$rootScope.actividades.push({
		    		id: $rootScope.idMax,
		    		nombre: nombre,
		    		fecha: fecha,
		    		lugar: lugar,
		    		categoria: categoria,
		    		alarma: alarma,
		    		hora: hora
		    		});
		    	ag.actividades.nombre = "";
		    	ag.actividades.fecha = "";
		    	ag.actividades.lugar = "";
		    	ag.actividades.categoria = "";
		    	ag.actividades.alarma = false;
		    	ag.actividades.hora = "";
		    }
		}

		/*MVF - Elimino actividad seleccionada*/	
		ag.elim= function(id){
    		$rootScope.actividades.splice(id,1);
		}
	
	}])

	.component("agenda", {
	templateUrl: "comp/agenda.html",
	controller:"compAgenda" ,
	bindings: {
		  valor: '='
		}
		
	});



















































