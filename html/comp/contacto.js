angular.module("compContacto", [])
	.controller("compContacto",["$log","$http", function($log,$http){
	  	var co = this;

	  	co.msj={
		  	nombre:"",
		  	email: "",
		  	asunto:"",
		  	mensaje:""
		  };

	  	co.enviarMsj = function(){
	  		
		  	co.success = false;
		  	co.error = false;
		  	var nombre = co.msj.nombre;
		  	var email = co.msj.email;
		  	var asunto = co.msj.asunto;
		  	var mensaje = co.msj.mensaje;

			$http({
			       method: 'POST',
			       url: 'enviaMsj.php',
			       data: 'nombre='+ nombre + '&email='+email+'&asunto='+asunto + '&mensaje='+ mensaje
			}).then(function successCallback(response) {
				 $log.debug("success"+ response.data);
			     co.resultado = response.data;
			     co.success = true;
			     co.msj.nombre = "";
			     co.msj.email = "";
			     co.msj.asunto = "";
			     co.msj.mensaje = "";
			}, function errorCallback(response) {
				 co.error = true;
			     co.data = response.data || "Falló el envio";
			     co.status = response.status;
			});

			}
	
	}])

	.component("contacto", {
	templateUrl: "comp/contacto.html",
	controller:"compContacto"		
	});