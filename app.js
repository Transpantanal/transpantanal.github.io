'use strict';

angular.module('appTranspantanal', ['ngRoute']);

angular.module('appTranspantanal').config(function($routeProvider, $locationProvider){

   $routeProvider.when('/excursoes', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl',
   }).when('/', {
      templateUrl: 'views/sobre.html',
      controller: 'SobreCtrl',
   }).when('/contato', {
      templateUrl: 'views/contato.html',
      controller: 'ContatoCtrl',
   }).otherwise ({ redirectTo: '/sobre' });
});

angular.module('appTranspantanal').controller('HomeCtrl', function($rootScope, $location){

   $rootScope.todo = [{
      name: 'Ilha do Mel',
      image: '2.jpg'
   }, {
      name: 'Ilha do Mel',
      image: '7.png'
   }, {
      name: 'Cascanéia',
      image: '5.jpeg'
   }];

});

angular.module('appTranspantanal').controller('SobreCtrl', function($rootScope, $location){

});

angular.module('appTranspantanal').controller('ContatoCtrl', function($rootScope, $location){

});