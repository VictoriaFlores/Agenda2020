var app=angular.module("agenda",[]);
  
app.controller("IndexController",['$scope','$log','$http',function($scope,$log,$http) {
  $scope.mensaje="Hola Mundo";
  $scope.pag="home";

  /*MVF - Defino links*/
  $scope.face = "https://www.facebook.com/vickyfloress";
  $scope.linkedin = "https://www.linkedin.com/in/maría-victoria-flores-344a92198";

  /*MVF - Ruteo de paginas*/
  $scope.home=function() {
    $scope.pag="home";
  }

  $scope.agenda=function() {
    $scope.pag="agenda";
  }

  $scope.contacto=function() {
    $scope.pag="contacto";
  }

  /*MVF - Modifico CSS*/
  $scope.color_black={
  		color: "#000000"
  	}
  $scope.background_base={
  		background: "#FF5821",
  		color: "#FFFFFF"
  	}

  $scope.css_form={
	  	display: "block",
	    width: "80%",
	    height: "34px",
	    color: "#555",
	    border: "1px solid #ccc"
  }

  /*MVF - Defino arreglo de Actividades*/
  $scope.actividades=[{
  	nombre:"",
  	//fecha:"01/01/2020",
  	fecha: "",
  	lugar:"",
  	categoria:"M",
  	alarma:false
  }
  	//fecha: new Date(),
  ]

  /*MVF - Defino funcion para agregar una nueva Actividad*/
  $scope.addActividad=function(){
    var nombre = $scope.actividades.nombre;
    var fecha = $scope.actividades.fecha;
    var lugar = $scope.actividades.lugar;
    var categoria = $scope.actividades.categoria;
    var alarma = $scope.actividades.alarma;

    //if (nombre != "" && fecha != ""){
    if (nombre != ""){
    	$scope.actividades.push({
    		nombre: nombre,
    		fecha: fecha,
    		lugar: lugar,
    		categoria: categoria,
    		alarma: alarma
    		});
    	$scope.nombre = "";
    	$scope.fecha = "";
    	$scope.lugar = "";
    	$scope.categoria = "";
    	$scope.alarma = false;
    }
    $scope.resetForm;

  }

   /*MVF - Creo una directiva para limpiar Form*/
  app.directive('resetForm', ['$parse',  function($parse) {
      return function(scope, element, attr) {
	      var form = $parse(attr.resetForm);
	      var datos= angular.copy(form(scope));
      }

      element.bind('reset', function(event) {
        scope.$apply(function() {
          form.assign(scope, angular.copy(datos));
          scope.form.$setPristine();
        });

        if (event.preventDefault) {
          return event.preventDefault();
        } else {
          return false;
        }

      });
    }
  
  ]);

  /*MVF - Defino estructura de Mensaje*/
  $scope.msj={
  	nombre:"",
  	email: "",
  	asunto:"",
  	mensaje:""
  }

   /*MVF - Defino funcion para enviar Mensaje*/
  $scope.enviarMsj = function(){
  	$scope.success = false;
  	$scope.error = false;

  	var nombre = $scope.msj.nombre;
  	$log.debug("nombre " + nombre);
  	var email = $scope.msj.email;
  	var asunto = $scope.msj.asunto;
  	var mensaje = $scope.msj.mensaje;

	$http({
	       method: 'POST',
	       url: 'enviaMsj.php',
	       data: 'nombre='+ nombre + '&email='+email+'&asunto='+asunto + '&mensaje='+ mensaje
	}).then(function successCallback(response) {
		 $log.debug("success"+ response.data);
	     $scope.resultado = response.data;
	     $scope.success = true;
	     $scope.msj.nombre = "";
	     $scope.msj.email = "";
	     $scope.msj.asunto = "";
	     $scope.msj.mensaje = "";
	}, function errorCallback(response) {
		 $scope.error = true;
	     $scope.data = response.data || "Falló el envio";
	     $scope.status = response.status;
	});

	}


}]);
