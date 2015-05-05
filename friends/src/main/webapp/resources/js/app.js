'use strict';


// Declare app level module which depends on filters, and services
var FriendsApp = angular.module('friendsApp', ['AppControllers','flow','ngRoute','ngAnimate']);

FriendsApp.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/', {
		templateUrl : '/friends/resources/main.jsp',
		controller : 'FriendsController',
	}).
	  when('/profiles', {
		    templateUrl: '/friends/resources/profiles.jsp',
		    controller: 'FriendsController'
		  }).
		  otherwise({
		    redirectTo: '/index.jsp'
		  });
}]);


FriendsApp.directive('slider', function ($timeout) {
	  return {
	    restrict: 'AE',
		replace: true,
		scope:{
			images: '='
		},
	    link: function (scope, elem, attrs) {
		
			scope.currentIndex=0;

			scope.next=function(){
				scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
			};
			
			scope.prev=function(){
				scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
			};
			
			scope.$watch('currentIndex',function(){
				scope.images.forEach(function(image){
					image.visible=false;
				});
				scope.images[scope.currentIndex].visible=true;
			});
			
			/* Start: For Automatic slideshow*/
			
			var timer;
			
			var sliderFunc=function(){
				timer=$timeout(function(){
					scope.next();
					timer=$timeout(sliderFunc,5000);
				},5000);
			};
			
			sliderFunc();
			
			scope.$on('$destroy',function(){
				$timeout.cancel(timer);
			});
			
			/* End : For Automatic slideshow*/
			
	    },
		templateUrl:'/friends/resources/templates/templateurl.html'
	  }
	});

FriendsApp.config(['flowFactoryProvider', function (flowFactoryProvider) {
	  flowFactoryProvider.defaults = {
			    target: 'upload.php',
			    permanentErrors: [404, 500, 501],
			    maxChunkRetries: 1,
			    chunkRetryInterval: 5000,
			    simultaneousUploads: 4,
			    singleFile: true
			  };
			  flowFactoryProvider.on('catchAll', function (event) {
			    console.log('catchAll', arguments);
			  });
			  // Can be used with different implementations of Flow.js
			  // flowFactoryProvider.factory = fustyFlowFactory;
			}]);
