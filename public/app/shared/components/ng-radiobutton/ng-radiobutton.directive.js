(function(){


	var directive = function($swipe){
		
		var link = function(scope, element, attrs, ngModelCtrl){



			scope.init = function(){
				scope.disable = scope.disable ? true : false;
			};

            scope.select = function(item){
            	var checkTemp = item.check;
            	if(!scope.disable){
            		for(var i in scope.options){
	            		scope.options[i].check = false;
	            	}
	            	item.check = !checkTemp;
	            }
            };
            
            scope.init();

            ngModelCtrl = ngModelCtrl || {$render:function(){}};
			ngModelCtrl.$render = function(){
				scope.model = ngModelCtrl.$viewValue;
			};
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/ng-radiobutton/ng-radiobutton.template.html',
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


	angular.module('ngRadiobutton', [])
		.directive('ngRadiobutton',directive);
})();