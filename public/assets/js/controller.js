(function(){
    angular.module('app', ['ngRoute']).controller('Ctrl', ['$scope', '$routeParams', function($scope, $routeParams) {


        console.log($routeParams);
        $(document).ready(function(){
            $("header a").on('click', function(event) {
                if (this.hash !== "") {event.preventDefault();var hash = this.hash;$('html, body').animate({
                  scrollTop: $(hash).offset().top - 80
                }, 800, function(){
                });
              }
            });
          });
          
    
        this.startIndex = 1;
        this.slidesNumber = 3;
        this.baseUrl = document.location.origin + '/assets/img/';
        this.slides = [];
        for(var i = 0; i < this.slidesNumber; i++){
            var strName = 's'+(i+7)+'.jpg';
            this.slides.push( { image: this.baseUrl+strName});
        };

        $scope.equipo = {
            title: 'Dr. Juan Antonio Treviño Macías',
            position: 'Director General',
            desc: 'Especialista en Cirugía plástica. Cédula profesional No.0030031. Certificado por el Consejo Mexicano de Cirugía Plástica, Estética y Reconstructiva. Certificado No.836. Miembro de la Asociación Mexicana de Cirugía Plástica Estética y Reconstructiva (A.M.C.P.E.R.) Miembro del Colegio De Cirujanos Plásticos del Valle De México. Certificado por el Consejo Mexicano de Médicos Bariatras. Master en Cosmiatría.',
            imgs: ['foto-perfil.png'],
            type: 'equipo'
        };


        $scope.preguntasf = {
            title: 'Preguntas Frecuentes',
            imgs: ['preguntas.jpg'],
            type: 'preguntas'
        },

        $scope.search = {};
        $scope.subcategorias = [];
        $scope.descCategoria = '';
        $scope.titleCategoria = '';
        $scope.changeFilter = function(list, obj){

            console.log(obj);
            for(var i in list){
                list[i].active = false;
            }
            obj.active = true;
            $scope.search.categorias = obj.key;
            $scope.descCategoria = obj.descCategoria;
            $scope.titleCategoria = obj.name;
            if(obj.subcategorias && obj.subcategorias.length){
                for(var i in obj.subcategorias){
                    obj.subcategorias[i].active = false;
                }
                $scope.subcategorias = obj.subcategorias || []; 
            }else{
                $scope.subcategorias = []; 
            }
        };

        $scope.changeFilterSub = function(list, obj){

            console.log(obj);
            for(var i in list){
                list[i].active = false;
            }
            obj.active = true;
            $scope.search.categorias = obj.key;
        };
        $scope.menuShow = false;
        $scope.showMenu = function(){
            $scope.menuShow = true
        };
        $scope.hideMenu = function(){
            $scope.menuShow = false;
        };

        $scope.servicio = { imgs:['s1.jpg']};
        $scope.fullActive = false;
        $scope.full = function(obj){
            $scope.servicio = obj;
            $scope.fullActive = true;
        };
        $scope.min = function(){
            $scope.fullActive = false;
        };

          $('h1').parallaxContent({
            shift: -15,
            duration: 1
          });
          $('#contentInfo').parallaxContent({
            shift: -15,duration: 2
          });



          jssor_1_slider_init1 = function() {

            var jssor_1_options = {
              $AutoPlay: 0,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            var MAX_WIDTH = 1500;
            function ScaleSlider1() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;
                if (containerWidth) {
                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider1, 5);
                }
            }

            ScaleSlider1();

            $Jssor$.$AddEvent(window, "load", ScaleSlider1);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider1);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider1);
        };


        jssor_1_slider_init2 = function() {

            var jssor_1_SlideshowTransitions = [
                {$Duration:1200,$Opacity:2}
              ];
            var jssor_1_options = {
              $AutoPlay: 0,
              $Idle: 2000,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $SlideEasing: $Jease$.$InOutSine,
            //   $DragOrientation: 3,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_2", jssor_1_options);
            jssor_1_slider.$Elmt.style.margin = "";
            var MAX_WIDTH = 10000;
            var MAX_HEIGHT = 10000;
            var MAX_BLEEDING = 1;

            function ScaleSlider2() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var originalWidth = jssor_1_slider.$OriginalWidth();
                    var originalHeight = jssor_1_slider.$OriginalHeight();

                    var containerHeight = containerElement.clientHeight || originalHeight;

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
                    var expectedHeight = Math.min(MAX_HEIGHT || containerHeight, containerHeight);
                    jssor_1_slider.$ScaleSize(expectedWidth, expectedHeight, MAX_BLEEDING);
                    jssor_1_slider.$Elmt.style.top = ((containerHeight - expectedHeight) / 2) + "px";
                    jssor_1_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 2) + "px";
                }
                else {
                    window.setTimeout(ScaleSlider2, 30);
                }
            }

            function OnOrientationChange() {
                ScaleSlider2();
                window.setTimeout(ScaleSlider2, 800);
            }

            ScaleSlider2();

            $Jssor$.$AddEvent(window, "load", ScaleSlider2);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider2);
            $Jssor$.$AddEvent(window, "orientationchange", OnOrientationChange);
        }

        setTimeout(function(){
            jssor_1_slider_init1();
            jssor_1_slider_init2();
        },1000);

      }]).config(['$routeProvider',function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : ""
        })
        .when("/:page", {
            templateUrl : "",
            controller: ""
        });
    }]);
})();