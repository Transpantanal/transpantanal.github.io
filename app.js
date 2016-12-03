'use strict';

var v = 1;

angular.module('appTranspantanal', ['ngRoute']);

angular.module('appTranspantanal').config(function($routeProvider, $locationProvider){

   $routeProvider.when('/excursoes', {
      templateUrl: 'views/home.html?v=' + v,
      controller: 'HomeCtrl',
   }).when('/', {
      templateUrl: 'views/sobre.html?v=' + v,
      controller: 'SobreCtrl',
   }).when('/contato', {
      templateUrl: 'views/contato.html?v=' + v,
      controller: 'ContatoCtrl',
   }).otherwise ({ redirectTo: '/sobre' });
});

angular.module('appTranspantanal').controller('HomeCtrl', function($rootScope, $location){

   $rootScope.todo = [{
      name: 'Cascanéia',
      image: '5.jpeg'
   }, {
      name: 'Ilha do Mel',
      image: '7.png'
   }, {
      name: 'Piratuba',
      image: '8.png'
   }];

});

angular.module('appTranspantanal').controller('SobreCtrl', function($rootScope, $location){

});

angular.module('appTranspantanal').controller('ContatoCtrl', function($rootScope, $location){

});