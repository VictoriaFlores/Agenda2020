var app=angular.module("agenda",["compAgenda","compContacto"]);

app.run(function($rootScope)
{
    $rootScope.idMax = "0";

    /*MVF - Defino arreglo de Actividades global para poder acceder desde el componente*/
    $rootScope.actividades = $rootScope.actividades=[{
        id:"0",
        nombre:"prueba",
        fecha:"01/01/2020",
        lugar:"prueba",
        categoria:"M",
        alarma:false,
        hora:""
    }];

    $rootScope.color_black={
        color: "#000000"
      }
    $rootScope.background_base={
        background: "#FF5821",
        color: "#FFFFFF"
      };
    $rootScope.css_form={
          display: "block",
          width: "80%",
          height: "34px",
          color: "#555",
          border: "1px solid #ccc"
        };
}); 

app.controller("IndexController",['$scope','$log','$http','$rootScope',function($scope,$log,$http,$rootScope) {
  //this.usuarios="Hola Mundo";
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

}]);
