(function(){


	var directive = function($swipe){
		
		var link = function(scope, element, attrs, ngModelCtrl){



			scope.init = function(){
				scope.disable = scope.disable ? true : false;
				scope.selectBlur();
			};
			scope.selectFocus = function () {
				if(!scope.disable && !scope.focus){
	                // scope.empty = false;
	                scope.focus = true;
	            }
            };

            scope.select = function(item){
            	if(!scope.disable){
	            	item.check = !item.check;
	            }
            };

            scope.selectBlur = function () {
                if (scope.model === '' || scope.model === undefined) {
                    scope.empty = true; 
                } else {
                    scope.empty = false;
                }
                scope.focus = false;
            };
            
            scope.init();

            ngModelCtrl = ngModelCtrl || {$render:function(){}};
			ngModelCtrl.$render = function(){
				scope.model = ngModelCtrl.$viewValue;
				scope.selectBlur();
			};
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/ng-checkbox/ng-checkbox.template.html',
	        require: '?ngModel',
	        link: link,
			scope:{
				placeholder:"@?placeHolder",
				disable:"=?disable",
				focus:"=?focus",
				options:"=options"
			}
		};

	};


	angular.module('ngCheckbox', [])
		.directive('ngCheckbox',directive);
})();