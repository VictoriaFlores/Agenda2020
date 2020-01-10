
(function () {
    'use strict';

    angular
        .module('agenda', ['ngRoute', 'ngCookies',"compAgenda","compContacto"])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();
//var app=angular.module("agenda",["compAgenda","compContacto"]);

/*run(function($rootScope)
{
    $rootScope.idMax = "0";

    /*MVF - Defino arreglo de Actividades global para poder acceder desde el componente*
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
}); *

controller("IndexController",['$scope','$log','$http','$rootScope',function($scope,$log,$http,$rootScope) {
  //this.usuarios="Hola Mundo";
  $scope.pag="home";

  /*MVF - Defino links*
  $scope.face = "https://www.facebook.com/vickyfloress";
  $scope.linkedin = "https://www.linkedin.com/in/maría-victoria-flores-344a92198";

  /*MVF - Ruteo de paginas*
  $scope.home=function() {
    $scope.pag="home";
  }

  $scope.agenda=function() {
    $scope.pag="agenda";
  }

  $scope.contacto=function() {
    $scope.pag="contacto";
  }

}]);*/
