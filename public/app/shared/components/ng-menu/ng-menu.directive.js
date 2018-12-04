(function(){


	var directive = function($window){
		
		var link = function(scope, element, attrs, ngModelCtrl){

			scope.init = function(){

			};

			scope.show = function(){
				scope.active = true;
			};
			scope.hide = function(){
				scope.active = false;
			};
			scope.select = function(item){
				if(item.url){
					$window.location = item.url;
				}
			};
			
            scope.init();
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/ng-menu/ng-menu.template.html',
	        require: '?ngModel',
	        link: link,
			scope:{
				source:"=?source"
			}
		};

	};
	var service = function(){
		return this;
	};

	angular.module('ngMenu', [])
		.directive('ngMenu',directive)
		.factory('$menu',service);
})();