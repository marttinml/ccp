(function(){


	var directive = function($swipe){
		
		var link = function(scope, element, attrs, ngModelCtrl){

			ngModelCtrl.$render = function(){
				scope.init();
			};

			scope.init = function(){
				scope.model = ngModelCtrl.$viewValue;
				scope.optional = scope.optional ? true : false;
				scope.disable = scope.disable ? true : false;
				scope.inputBlur();
			};
			scope.inputFocus = function () {
				if(!scope.disable && !scope.focus){
	                scope.empty = false
	                scope.focus = true;
	            }
            };

            scope.inputBlur = function () {
                if (scope.model === '' || scope.model === undefined) {
                    scope.empty = true; 
                } else {
                    scope.empty = false;
                }
                scope.focus = false;
            };

            scope.keyup = function(){
            	ngModelCtrl.$setViewValue(scope.model);
            };
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/ng-input/ng-input.template.html',
	        require: '?ngModel',
	        link: link,
			scope:{
				placeholder:"@?placeHolder",
				optional:"=?optional",
				disable:"=?disable",
				focus:"=?focus"
			}
		};

	};
	
	var focusMe = function() {
	  return {
	    link: function(scope, element, attrs) {
	      scope.$watch(attrs.focusMe, function(value) {
	        if(value === true) {
	            element[0].focus();
	            scope[attrs.focusMe] = false;
	        }
	      });
	    }
	  };
	};


	angular.module('ngInput', [])
		.directive('ngInput',directive)
		.directive("focusMe",focusMe);
})();