(function(){


	var directive = function($swipe){
		
		var link = function(scope, element, attrs, ngModelCtrl){
			scope.hide = function(){
				scope.show = false;
			};
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/ng-alert/ng-alert.template.html',
	        transclude: true,
	        link: link,
			scope:{
				show:"=show",
				title:"@title"
			}
		};

	};
	

	angular.module('ngAlert', [])
		.directive('ngAlert',directive);
})();