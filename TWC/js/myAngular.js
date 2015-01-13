var demoApp = angular.module('demoApp', []); 
demoApp.run(function($templateCache) {
  $templateCache.put('button.html', '<button class="surprise" id="myButton" ng-click="surpriseMePlease()">Would you like a surprise? Click Here Please</button>');
});
demoApp.service('myAbstractService', function(){
	this.getElementSize = function(testElement){
		return [testElement.offsetHeight, testElement.offsetWidth]; 
	}
	
}); 
demoApp.directive('emcSurprise', function(myAbstractService) {
	return {
		restrict: 'AE',
		replace: 'true',
		template:  
			"<div ng-include=\" 'button.html' \" ></div>",
		link: function(scope, elem, attrs) {
			scope.surpriseMePlease  = function () {
				var dimensions = myAbstractService.getElementSize(document.getElementById("myButton")); 
				confirm("Are you surprised? The height of this button is " + dimensions[0] + "pxs and the width is " + dimensions[1] + "pxs"); 
			};
		}
  };
});

var controllers = {};
controllers.WeatherController = function($scope){
	
}; 
demoApp.controller(controllers); 
angular.element(document).ready(function() {
    angular.bootstrap(document, ['demoApp']);
});