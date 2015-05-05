'use strict';

/* Controllers */

var AppControllers = angular.module('AppControllers', []);

// Main controller 
AppControllers.controller("FriendsController", function($scope,$http) {
    	$scope.helloTo = {};
    	$scope.logo = 'bestfriendslogo.jpg';
    
    this.tab = 1;
    
    this.selectTab = function (setTab){
    	this.tab = setTab;
    };
    
    this.isSelected = function(checkTab) {
    	return this.tab === checkTab;
    	$scope.bgcolor = '#9AF07C';
    };
    
    });


AppControllers.controller('SliderController', function($scope) {
	  $scope.images = [{
		  	id:'1',
	        src: 'bhanu.jpg',
	        title: 'Bhanu'
	      }, {
	    	id:'2',
	        src: 'chaddi.jpg',
	        title: 'Chandu'
	      }, {
	    	 id:'3',
	    	 src: 'haddi.jpg',
	         title: 'Hari'
	        },{
	        id:'4',
	        src: 'peer.jpg',
	        title: 'Prasad'
	      }, {
	    	id:'5',
	        src: 'pappi.jpg',
	        title: 'Praveen'
	      },{
	    	 id:'6',
	    	 src: 'buddi.jpg',
	         title: 'Santu'
	        },
	        {
	        id:'7',
	        src: 'paddi.jpg',
	        title: 'Swarup'
	      }];
	});

AppControllers.controller("DetailsController", ['$scope','$http','$routeParams',
                                               	function($scope, $http, $routeParams)
                                               		{    
                                               			$scope.name=[];
                                               			$scope.name.push("Bowling Star");
                                               		}]
                                               );
 
