(function(){
    angular.module('app', ['ui.carousel']).controller('Ctrl', function($scope) {


        $(document).ready(function(){
            $("header a").on('click', function(event) {
                if (this.hash !== "") {event.preventDefault();var hash = this.hash;$('html, body').animate({
                  scrollTop: $(hash).offset().top - 80
                }, 800, function(){
                    //window.location.hash = hash;
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
      
        $scope.categorias = [
            {key: 'todo',          name: 'Todo', active: true},
            {key: 'cirugiaplastica',         name: 'Cirugía Plática', active: false , subcategorias: [
                { key: 'rostro', name: 'Cabeza y Rostro', active: false }, 
                { key: 'cuerpo', name: 'Cuerpo', active: false }, 
                { key: 'cicatrices', name: 'Cicatrices antiesteticas', active: false },
                { key: 'lesiones', name: 'Lesiones de la piel', active: false } 
            ], descCategoria:'Es una extensa especialidad que se ocupa de recuperar o reparar una región y/o función dañada, o para mejorar su apariencia, encontrando y exaltando los diferentes puntos de belleza que en muchas ocasiones se pueden encontrar ocultos, logrando así rostros y cuerpos más armoniosos y saludables. Con la Cirugía Plástica puede mejorar cualquier parte de su rostro o cuerpo. Existe una extensa gama de cirugías que abarcan todas las áreas faciales y corporales. A continuación, hablamos de cada uno de ellas, haciendo mención especial de su trascendencia en la belleza. Accede a nuestra galería para conocer esta información.' },
            {key: 'procedimientos', name: 'Procedimientos auxiliares', active: false, 
                descCategoria: 'Contamos con diversos procedimientos auxiliares mini invasivos y no invasivos, a fin de mejorar la armonía y así realzar la juventud y belleza en el paciente. Estos pueden ser aplicados o efectuados bien sea solo como procedimientos individuales o para optimizar los resultados obtenidos por alguna cirugía. ' },
            {key: 'cosmiatria',     name: 'Cosmiatría y Spa Médico', active: false, subcategorias: [
                { key: 'facial', name: 'Facial', active: false }, 
                { key: 'corporal', name: 'Corporal', active: false }, 
                { key: 'tratamientos', name: 'Tratamientos Integrales', active: false }
            ],
            descCategoria: 'Es la ciencia y arte que se ocupa del cuidado y mejoramiento de los caracteres estéticos de la piel sana o enferma, a diferencia de la cosmetología, la cual trata solo piel sana. Tiene un sinfín de aplicaciones, entre los cuales encontramos tratamientos tanto cosméticos como preventivos, curativos y de rehabilitación de un gran número de padecimientos y cirugías.' }
        ];


        


        $scope.top3 = [
            {
                categorias: ['todo','rostro'],
                title: 'Nariz',
                desc: 'Es quizás la más socorrida de las cirugías de embellecimiento, olvidándose muchas veces de su función. En nuestro Centro de Cirugía no la hemos olvidado, realizamos un diagnóstico y tratamiento integral con corrección tanto estética como funcional.',
                imgs: ['s1.jpg']
            },
            {
                categorias: ['todo','rostro'],
                title: 'Nariz',
                desc: 'Es quizás la más socorrida de las cirugías de embellecimiento, olvidándose muchas veces de su función. En nuestro Centro de Cirugía no la hemos olvidado, realizamos un diagnóstico y tratamiento integral con corrección tanto estética como funcional.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cuerpo'],
                title: 'Nariz',
                desc: 'Es quizás la más socorrida de las cirugías de embellecimiento, olvidándose muchas veces de su función. En nuestro Centro de Cirugía no la hemos olvidado, realizamos un diagnóstico y tratamiento integral con corrección tanto estética como funcional.',
                imgs: ['s6.jpg']
            }
        ];
        $scope.servicios = [
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Cirugía Facial Múltiple',
                desc: 'En este caso, la cirugía abarca desde la corrección de cicatrices y lesiones desagradables (quistes, lunares, y otras), así como cirugías reconstructivas y/o estéticas de las diferentes partes del rostro. Tal es el caso de la frecuente asociación de la rinoplastia con una o más cirugías, como la extirpación de bolas adiposas de Bichat, aumento y modelado de mentón, cirugía de aumento y remodelado de pómulos, remodelado de orejas en asa y otras. <br> Este mismo concepto se aplica a cualquier edad, en los que se pueden efectuar junto con el lifting facial, cirugías estéticas y/o reconstructivas para corrección de deformidades patológicas en los diferentes órganos faciales.',
                imgs: ['s1.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Cirugía Facial Antiedad',
                desc: 'Se trata del clásico Lifting o levantamiento y reacomodo de todas las estructuras faciales, que da como resultado una apariencia más fresca y juvenil, y que es, además de todo, una gran oportunidad para lograr cambios artísticamente armoniosos con los diferentes componentes faciales, característica dada por las cualidades del cirujano. Pudiendo también corregir alteraciones funcionales que se presentan como parte del fenómeno de envejecimiento. Este tipo de cirugía se puede realizar por regiones o cara completa, pudiendo ser: AREA SUPERIOR DEL ROSTRO: estiramiento de frente, levantamiento y remodelado de cejas y/o párpados. AREA INFERIOR DEL ROSTRO: éste abarca levantamiento de pómulos, mejillas, papada, pudiendo extenderse hasta el cuello.',
                imgs: ['s6.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Párpados y/o Cejas',
                desc: 'La cirugía de los párpados puede ser solo de los inferiores, superiores, o ambos; con la ventaja de que esta cirugía se puede realizar con anestesia local, siendo una cirugía totalmente ambulatoria. Usualmente se complementa con la cirugía de levantamiento de las cejas para corrección de deformidades o de las huellas de envejecimiento, dándole un aspecto más joven y fresco a los ojos, en estos casos es muy importante el reposicionar las cejas dado que de esto depende la corrección de la expresión de cansancio, así como el hecho de lograr una mayor armonía y belleza. O bien, se puede realizar cirugía de párpados y/o las cejas de manera independiente, según las necesidades del paciente, no solo en rostros envejecidos, sino también en casos en que la modificación de estos elementos se indica solo para destacar la belleza.',
                imgs: ['s7.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Corrección de Ojeras',
                desc: 'Aquí hay que distinguir diferentes aspectos de la llamada “ojera”, puede ser: Por hundimiento de los tejidos perioculares, Por flacidez y envejecimiento de los tejidos del párpado y protrusión de la grasa peri ocular y Finalmente, la hiperpigmentación que puede presentarse en dicha región. Para los tres casos, o aun cuando existe una combinación de los mismos, existen soluciones con excelentes resultados, ya sea mediante la aplicación de rellenos, cirugía y/o tratamientos médicos dermo-cosméticos según sea el caso.',
                imgs: ['s8.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Liposucción Facial',
                desc: 'Es una pequeña cirugía mediante la cual podemos remodelar todas las áreas faciales, y auxiliándonos con la lipotransferencia (lipoinyección), podemos reducir algunas áreas y/o aumentar otras, siempre buscando la armonía que redunda en una apariencia más bella.',
                imgs: ['s3.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Orejas',
                desc: 'Con esta cirugía se puede corregir cualquier deformidad de las orejas, ya sea en tamaño, orientación o forma, dependiendo las necesidades de cada paciente. Especialmente indicada en edades tempranas debido al bullying del cual son víctimas los niños que muestran esta característica, pues frecuentemente observamos que cuando su corrección se deja para etapas más tardías de la vida, ya ha dejado una cicatriz emocional que afecta la autoestima de las personas la cuál es más difícil de tratar.',
                imgs: ['s9.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Nariz',
                desc: 'Desde el nacimiento la zona más importante de interrelación social es el triángulo formado por los ojos, nariz y boca, al ser la nariz el centro de la cara, estamos hablando de uno de los mayores puntos de belleza facial, además de tratarse de unos de los órganos más importantes para la salud integral. Es quizás la más socorrida de las cirugías de embellecimiento, desgraciadamente en muchas ocasiones se descuida el aspecto funcional de la nariz. Muchos de los pacientes que solicitan cirugía estética tienen estos problemas de función nasal sin saberlo, y muchas de las veces ignorados o mal diagnosticados, un gran porcentaje logran la curación corrigiendo la anatomía nasal, brindando una mejor apariencia y armonía al mismo tiempo. Aunque a veces es muy ignorado en el caso de la nariz, la función y la belleza van de la mano, por lo cual te recomendamos que nadie toque tu nariz si no es un experto, nosotros te ofrecemos una intervención estética y funcional a la vez.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Punta nasal',
                desc: 'Podemos también ofrecerte cirugía solo de la base nasal (alas y punta), en caso de que así lo desees. Siendo esta una de las cirugías más pequeñas que solo requiere de anestesia local, efectuándola de manera totalmente ambulatoria.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Labios',
                desc: 'Dependiendo de tus necesidades, podemos adelgazarlos, engrosarlos o cambiar su proyección ya sea con cirugía o infiltración de materiales adecuados. También podemos tratarlos quirúrgicamente, disminuyendo la altura del labio superior o disminuyendo surcos y arrugas, así como los pliegues nasolabiales con su liberación quirúrgica e infiltración de materiales adecuados o lipotransferencia.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Aumento de Pómulos',
                desc: 'Esta es una región que al igual que la del mentón constituyen zonas de alto potencial estético y con mucha frecuencia no son tomadas en cuenta. Esta cirugía se puede realizar por diferentes métodos dando como resultado un realce de los rasgos del tercio medio facial, sin dejar cicatrices visibles y logra una armonía que brinda una apariencia más bella.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Bolas Adiposas de Bichat',
                desc: 'Esta cirugía es muy concurrida por actores y mucho más aún por modelos dado el grado de sofisticación que adquiere el rostro mediante la misma, ya que disminuye considerablemente el volumen de las mejillas y se realzan favorablemente los pómulos. Estas son depósitos grasos localizados en las mejillas, que cuando están muy desarrolladas dan un aspecto característico. Se pueden retirar mediante cirugía intra oral que no deja cicatrices visibles, dando como resultado un refinamiento de los rasgos faciales. Es un procedimiento efectuado con anestesia local, totalmente ambulatorio, con la ventaja de que ese tejido graso puede ser transferido a otras áreas del rostro.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Mejillas',
                desc: 'Se pueden también mejorar mediante liposucción, lipotransferencia, y/o un minilift inferior dependiendo de la indicación para cada paciente. En tu caso te sugeriremos lo que mejor aplique.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Mentón',
                desc: 'Los cambios que se pueden lograr en esta área son increíbles, así como su repercusión en el aspecto general; basta con observar el rostro de la mayoría de los cantantes de moda, así como de modelos internacionales para comprobarlo. Generalmente, esta cirugía puede tornar un rostro de aspecto infantil en uno varonil y fuerte, y en el caso de la mujer, lograr una belleza distinguida. Los resultados pueden optimizarse si decidieras que se te coloque una prótesis de mentón de diseño personalizado. Tenemos una amplia experiencia en estos casos.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','rostro'],
                title: 'Papada',
                desc: 'Generalmente esta cirugía acompaña a la cirugía de mentón para lograr un remodelado total de la región, dándole mayor realce y refinamiento a la parte inferior del rostro y a la parte superior del cuello, brindando un aspecto más juvenil y armonioso. El remodelado de esta zona se realiza mediante liposucción o resección directa con reparación muscular, según el caso.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Busto',
                desc: 'Siendo el busto un área de identificación sexual femenina de gran trascendencia, las mujeres se ven afectadas desde etapas tempranas de la vida, tanto por la falta de volumen como por el exceso del mismo, así como la posición, firmeza y simetría de las mamas, repercutiendo en su seguridad y relaciones interpersonales. Esta cirugía se puede realizar desde la juventud temprana, sin afectar la función mamaria de lactación en caso de un embarazo a futuro.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Prótesis Mamarias',
                desc: 'Podemos mejorar la forma, tamaño y posición de tu busto. Se aumentan mediante la colocación de prótesis mamarias internas de múltiples formas y volúmenes.Para la determinación del volumen que elijas contamos con probadores especiales que te darán una perspectiva real de como lucirás con tu cirugía. Además, cuentas con la sugerencia del cirujano en cuanto al tamaño de los implantes basado en tus características y medidas. Siendo, además, respetuosos en cuanto al volumen que tú elijas.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Pexia o Levantamiento Mamario',
                desc: 'Esta cirugía levanta desde un busto pequeño y caído o con una forma desagradable, hasta aquellos  bustos que han sufrido los efectos que los embarazos han provocado sobre las mamas, corrigiéndose en ambos casos los problemas de flacidez y el efecto visual del envejecimiento corporal. Este tipo de cirugía se puede realizar con o sin aumento mediante colocación de prótesis mamarias.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Mamoplastía de Reducción y Pexia Mamaria',
                desc: 'Hay casos de un crecimiento excesivo de las glándulas mamarias conocidos como hipertrofia o gigantomastia (según su tamaño), problemas que comienzan a manifestarse con los cambios hormonales durante la adolescencia, constituyendo un problema médico de índole estético, psicológico e inclusive ortopédico, ya que puede afectar a la columna vertebral y los músculos regionales debido al peso excesivo de las mamas, por lo cual esta condición se recomienda atender a la brevedad. Estas cirugías son realizadas para levantar, recolocar, remodelar y disminuir el tamaño de las mamas. Utilizamos diferentes técnicas a elección según el caso. En tu consulta se te planteará la o las técnicas indicadas.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Pectorales',
                desc: 'Esta cirugía nos permite mejorar el aspecto del área pectoral en los hombres, produciendo un aspecto musculoso al tórax masculino mediante la colocación de prótesis pectorales internas, cuyo tamaño se determinará según las medidas de tu región corporal.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Ginecomastia (mamas desarrolladas en el varón):',
                desc: 'Patología que se presenta en algunos hombres que es corregible con cirugía, retirando glándula mamaria y disminuyendo los volúmenes de grasa, redistribuyéndola. El diseño y las cicatrices resultantes dependerán de las características de cada paciente.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Abdomen (Dermolipectomía abdominal)',
                desc: 'También conocida como abdominoplastia y popularizada como el famoso “tummy tuck” entre las artistas, es una cirugía ideal para las mujeres que ya tuvieron hijos y desean recobrar firmeza, tono muscular de la pared abdominal y refinamiento de la cintura. A través de la experiencia hemos desarrollado modificaciones a las técnicas utilizadas actualmente bajo las cuales hemos logrado resultados asombrosos, nuestras pacientes sometidas a esta cirugía, llegan a tener una mejor silueta que incluso antes de haber tenido hijos. Este procedimiento no es exclusivo de las mujeres que han cursado embarazos, también se realiza en hombres y mujeres que han sufrido pérdidas masivas de peso, o en aquellas personas que muestran alteraciones en piel y músculos del área abdominal de manera secundaria al paso del tiempo. Al igual que todas las cirugías plásticas esta debe de ser personalizada, no es adecuado efectuar el mismo diseño en todos los pacientes, por lo que su diseño y extensión podrá abarcar desde incisiones pequeñas (minilipectomía) hasta mayores extensiones llegando incluso hasta la espalda (torso-plastia o dermolipectomía abdominal circular).',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Dermolipectomía de otras regiones',
                desc: 'Esta cirugía consiste en retirar piel y grasa de cualquier parte que lo requiera, como los brazos y las piernas. ',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Glúteos',
                desc: 'Este procedimiento es el que brinda los resultados más predecibles, seguros y confiables, en cuanto al aumento y remodelado de los glúteos. Los glúteos se pueden aumentar de tamaño a través de una cirugía en la que se colocan prótesis internas, mejorando su apariencia de manera notoria, dejando una cicatriz muy poco visible situada en la parte superior del pliegue inter glúteo, que además se cubre fácilmente con cualquier prenda de ropa interior. Puede realizarse tanto en hombres como en mujeres. También es posible disminuirlos y remodelarlos a través de liposucción, o pueden levantarse en caso de que los glúteos se encuentren caídos, a través de la técnica quirúrgica de pexia o levantamiento glúteo que llevamos a cabo en nuestro Centro de Cirugía Plástica.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Piernas',
                desc: 'Podemos remodelar las piernas y/o las pantorrillas mediante liposucción y/o lipotransferencia, o también con la colocación de prótesis internas de muslo o pantorrilla, o en los casos que se requiera, realizamos la Dermolipectomía de los excesos de la piel.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Liposucción o Lipoescultura',
                desc: 'Cirugía mediante la cual podemos remodelar casi cualquier parte del cuerpo, manejando adecuada y estratégicamente la presencia y distribución de grasa, desde el área de la papada, hasta la región del tobillo. Esta cirugía ha venido a revolucionar los resultados de los procedimientos para mejorar el contorno corporal, auxiliándose de la lipotransferencia, lo cual nos permite mediante unas cuantas pequeñas y discretas cicatrices modificar casi cualquier parte del cuerpo y del rostro. Esculpiendo así la figura, disminuyendo o aumentando los volúmenes dados por el tejido graso obteniendo así una gran influencia sobre las formas faciales y corporales, auxiliándonos también con el marcado de pliegues que se pueden colocar de manera estratégica para realzar la musculatura y formas de las diferentes regiones. Contamos con la experiencia de haber iniciado estos procedimientos desde el año 1985, obteniendo excelentes resultados. Logramos reducciones de entre 2 a 5 pulgadas o más en el talle, dependiendo de las características de cada paciente.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Lipotransferencia',
                desc: 'Sirve para transferir tejido graso de un área corporal a otra del mismo paciente, logrando dar la armonía corporal deseada.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Himenoplastía',
                desc: 'Se puede reconstruir el himen regresándole sus características, este es un procedimiento que solamente requiere de anestesia local.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cuerpo'],
                title: 'Genitales Femeninos',
                desc: 'Esta pequeña cirugía solamente requiere de anestesia local. En la cual se remodelan los labios vaginales mediante una plastia y remodelado de los labios mayores o menores.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','cicatrices'],
                title: 'Cicatrices inestéticas',
                desc: 'Estas pueden causar problemas tanto en la función de diferentes partes u órganos, como en la apariencia física, causando así además problemas de tipo emocional y social, que suelen afectar las relaciones inter-personales de los individuos. Cualquier cicatriz puede ser mejorada mediante el tratamiento de un experto. Para ello te ofrecemos diferentes alternativas, acorde a tus necesidades, esto puede implicar la cirugía plástica en los casos indicados y/o diferentes tratamientos médico cosmetológicos. Tales como: peelings químicos o mecánicos, tratamientos enzimáticos, aparatología, etc.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cirugiaplastica','lesiones'],
                title: 'Lesiones de piel',
                desc: 'Cirugía de: Lunares, Verrugas, Lesiones cancerosas, Úlceras, Cicatrices inestéticas Y otras. Se solicitará la biopsia en los casos necesarios.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','procedimientos'],
                title: 'Rellenos Faciales',
                desc: 'Armoniza las formas faciales mediante el aumento de volumen en algunas zonas que podemos remodelar para mejorar la armonía facial, o bien, realzando aquellas que han perdido volumen como una característica de los cambios producidos por los procesos de envejecimiento. También podemos disminuir los pliegues y surcos que la misma edad va acentuando. Aumento y Remodelado de: Frente, Pómulos, Labios, Mentón, Perfilamiento del reborde maxilar, Otros. Relleno y Remodelado de:Surcos parpebrales (ojeras), Surcos nasogenianos, Líneas de marioneta',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','procedimientos'],
                title: 'Tratamiento Facial con Toxina tipo A',
                desc: 'Disminuye las líneas de expresión mediante este sencillo procedimiento: Arrugas en la frente, Patas de gallo, Levantamiento de ceja, Entrecejo fruncido, Transpiración excesiva, Mejora la asimetría en parálisis facial.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','procedimientos'],
                title: 'Hilos Tensores',
                desc: 'Efecto lifting con este procedimiento mini-invasivo: Corrige la flacidez de tu rostro y/o cuello, Levanta y remodela tus cejas, Mejora la región de la pata de gallo, Mejora la caída de las mejillas y pómulos, Remodela la región maxilar, Disminuye las líneas de marioneta, Mejora el área de la papada y el cuello.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','procedimientos'],
                title: 'Peelings Químicos y Mecánicos',
                desc: 'Mejora la calidad de la piel con nuestra variedad de peelings químicos, o bien, con peelings mecánicos de diferente profundidad, según las necesidades de tu rostro: Disminuye manchas, Afina los poros, Mejora las cicatrices e imperfecciones, Disminuye arrugas finas, Estimula la regeneración del colágeno y elastina, Hidrata y reafirma la piel, Mejora las secuelas de acné.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','procedimientos'],
                title: 'Enzimas Recombinantes',
                desc: 'Estas son muy útiles como auxiliares en el tratamiento de áreas faciales con excesos adiposos sin recurrir a la liposucción, por ejemplo, áreas de la papada, las mejillas y otras. De utilidad también en el tratamiento de pieles con secuelas cicatriciales (fibrosis, cicatrices de acné, etc.), mejorando también la elasticidad de la piel con discreto efecto lifting, así como para disminuir el volumen y fibrosis causados por la inyección de modelantes.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','procedimientos'],
                title: 'Ácido hialurónico',
                desc: 'Es la substancia con mayor aceptación a nivel mundial para practicar rellenos faciales, estos se efectúan para disimular los surcos o arrugas faciales, o bien, para dar realce a las zonas faciales que con el transcurso de los años van perdiendo volumen, o aquellas que, aunque no lo han perdido se ven beneficiadas con un aumento del mismo, como es el caso de los labios, por ejemplo. Este procedimiento se lleva a cabo de manera rápida y segura, habitualmente no presenta complicaciones.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','procedimientos'],
                title: 'AAPE',
                desc: 'Este tratamiento existe en 2 formulaciones diferentes: uno para la PIEL y otro para el CABELLO. Mejora de manera notable la calidad y humectación de la piel. Producto biotecnológico único con alto perfil de seguridad utilizado a nivel mundial que combina más de 300 factores de crecimiento específicos seleccionados y purificados, colágeno y antioxidantes para estimular la reparación y revitalización de la piel y el cabello. Ambos se recomiendan realizarse 1 sesión cada 3 semanas hasta completar las indicaciones respecto al número de sesiones que requiera cada paciente. El cutáneo regenera, despigmenta, humecta, reafirma, minimiza líneas de expresión, así como poro abierto y cicatrices. El capilar estimula y regenera la piel cabelluda de forma natural, aumentando la densidad y grosor capilar, controlando la caída e incrementando la proliferación de nuevos folículos.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','procedimientos'],
                title: 'Terapia Capilar',
                desc: 'Te ofrecemos dos tratamientos específicos para estimular el crecimiento del cabello y/o engrosamiento y fortalecimiento del mismo. Contamos con un equipo que estimula directamente la circulación sanguínea en el cuero cabelludo, lo cual mejora y acelera el proceso de crecimiento del mismo, se recomienda que acudas a varias sesiones de manera constante para que los resultados sean rápidos y notables. Estimula y regenera la piel cabelluda de forma natural, aumentando la densidad y grosor capilar, controlando la caída e incrementando la proliferación de nuevos folículos. El otro tratamiento que te ofrecemos para estimular el crecimiento del cabello, o bien, de la barba (en algunos casos) es el AAPE, que es un producto biotecnológico único, con alto perfil de seguridad que combina más de 300 factores de crecimiento específicos, seleccionados y purificados, secretados por células madre, colágeno y antioxidantes para estimular la reparación y revitalización de la piel y en este caso, del cabello. Estimula y regenera la piel cabelluda de forma natural, aumentando la densidad y grosor capilar, controlando así la caída e incrementando la proliferación de nuevos folículos.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','facial'],
                title: 'Limpieza Facial Profunda',
                desc: 'Es el básico idóneo para iniciar un hábito sano del cuidado de la piel de tu rostro y cuello, ya que en este tratamiento se limpia a profundidad la piel, retirando las células muertas y activando la oxigenación, drenaje linfático y micro circulación sanguínea en tu piel, lo cual ayudará no solo a lucir una piel limpia y sana, sino que es el primer paso para empezar con la rutina o hábito de cuidarla, iniciar el tratamiento necesario acorde a las características de tu piel, sin importar cual(es) sean, en esta limpieza se evalúan las necesidades y respuestas de tu piel, para así llevar un tratamiento adecuado en casa y en cabina (de ser necesario). Se lleva a cabo con apoyo de aparatología, lo cual siempre te brindará mejores resultados.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','facial'],
                title: 'Peeling de Regeneración Celular',
                desc: 'En este tratamiento se realizará una limpieza profunda previa a la aplicación del peeling, esto con la finalidad de tener perfectamente preparada y limpia tu piel, se procederá a la aplicación del peeling indicado para tu caso en específico, acorde a las características y necesidades de tu piel, esto determinará el tipo, la concentración y la profundidad del mismo, una vez pasado el tiempo de pose, se retira y se aplica una mascarilla, suero, ampolleta o lo que sea mejor en tu caso en particular, y protector solar. Se te indicarán los cuidados y productos adecuados como uso en casa para acelerar el proceso de reparación de tu piel y lograr mejores resultados, así como el indispensable protector o filtro solar.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','facial'],
                title: 'Tratamiento Facial Integral Personalizado',
                desc: 'Es el ideal para tratar cualquier necesidad de tu piel: PIEL GRASA, CUPEROSIS, HIDRATACIÓN, HUMECTACIÓN, NUTRICIÓN, HIPERSENSIBILIDAD CUTÁNEA, ANTIOXIDANTE, FIRMEZA, PORO ABIERTO, entre otros. Se realizarán las sesiones necesarias en cabina y se te indicará el tratamiento idóneo para uso en casa. Nos apoyamos en el uso de aparatología de vanguardia.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','facial'],
                title: 'Facial Spa',
                desc: 'Te encantará este tratamiento ya que no solo dejará tu piel profundamente limpia y relajada, sino que lucirá mucho más bella, sana y firme, es el ideal para quien tiene un evento próximo y desea lucir impecable, nos apoyamos en el uso de aparatología y se te realizará velo de colágeno y elastina tanto en tu rostro como en el cuello, además de un tratamiento especial que mejora notablemente el contorno de tus ojos, ayudándote a lucir más fresco(a) y joven.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','facial'],
                title: 'Renovación Facial Exprés',
                desc: 'El tratamiento indicado para quien desea lucir un rostro mucho más sano pero que no cuenta con suficiente tiempo, solamente te tomará 25 minutos y logrará darte los resultados necesarios para mejorar los aspectos de tu rostro y cuello',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','facial'],
                title: 'Microdermoabrasión Punta Diamante',
                desc: 'Iniciaremos limpiando profundamente tu piel para que esté lista para este tratamiento, nos apoyamos en nuestro sistema de microdermoabrasión con punta diamante para realizar una exfoliación más profunda en tu piel, ayudándola a lucir renovada, retirando células muertas y mejorando el aspecto de las líneas de expresión finas, así como atenuando poco a poco las manchas pigmentadas, el poro abierto y las cicatrices, mejora también el tono en la piel, puede realizarse en el rostro y cuello o en cualquier parte del cuerpo que lo requiera (excepto zonas íntimas).',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','facial'],
                title: 'Lifting',
                desc: 'Notarás que tu piel está más tersa, fresca y firme después de este tratamiento. Puedes realizártelo solamente para lucir mucho mejor aspecto para un evento en especial, o bien, de manera repetitiva, es decir, en repetidas ocasiones para lograr un mejor resultado y que sea más duradero el cambio en tu piel, se realiza el tratamiento tanto en rostro y cuello como en el contorno de los ojos.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','facial'],
                title: 'Microneedling',
                desc: 'Esta es una técnica de mesoterapia europea, se realiza un tratamiento con el apoyo del Dermaroller para estimular a la piel con las micro punciones y para lograr que penetre el tratamiento idóneo para la misma, este será acorde a las necesidades de tu piel, notarás una mejoría en el aspecto de tu piel, tanto en la humectación como en la firmeza, ayuda también a atenuar las líneas de expresión finas, como el poro abierto y las cicatrices o secuelas de acné.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','facial'],
                title: 'Pre y Post Operatorio',
                desc: 'Te ofrecemos diferentes tratamientos tanto para preparar tu piel previo a una cirugía como para su recuperación después de la misma, ayudando a mejorar la calidad de tu piel, activando su oxigenación, desinflamándola y mejorando su irrigación sanguínea, los resultados son muy notorios y favorables, se te recomienda realizarte el tratamiento las sesiones que sean necesarias dependiendo lo que te indique tu médico hasta 1 semana antes de tu cirugía, o bien, iniciar con tu tratamiento después de 5 a 7 días de tu cirugía, también dependiendo las especificaciones de tu médico cirujano, en este caso, del post operatorio, favoreces el proceso de recuperación y así mismo, el aspecto de tu piel y cicatrices, te sentirás mucho mejor en tu proceso de recuperación.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Celulitis',
                desc: 'Para ayudarte a aminorarla te ofrecemos varias opciones que por separado o en conjunto lograrán disminuirla, contamos con diferentes aparatos especialmente diseñados para combatir la celulitis, disminuir la cantidad de grasa, activar el drenaje linfático, y a la vez mejorar la calidad de tu piel, así como masajes manuales.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Drenaje Linfático',
                desc: 'Mediante aparatología de vanguardia te ayudamos a mejorar el drenaje linfático, logrando así bienestar y desinflamación de tu cuerpo, puede ser que lo necesites porque así sea tu metabolismo, por tu ritmo de vida o porque te sometiste a algún tratamiento médico o a alguna cirugía, también te ofrecemos masaje manual de cuerpo entero para lograrlo.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Reductivo',
                desc: 'Auxiliar en la reducción de medidas corporales, además de mejorar notablemente la calidad de tu piel y la celulitis (en caso que tengas), para ello te ofrecemos tanto aparatología de vanguardia como masaje manual, dependiendo de tus necesidades será el tratamiento que se te realice durante cada sesión, los cambios se notan a partir de la 3ª a 5ª sesión, se te recomienda apoyar este tratamiento con actividad física y una mejor y balanceada alimentación, además de beber suficiente agua diariamente. ',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Mesoterapia',
                desc: 'Es un tratamiento mediante el cual se introducen cantidades microscópicas de medicamentos homeopáticos, vitaminas, minerales y aminoácidos en la piel, se lleva a cabo mediante un procedimiento cosmético que inyecta la medicina en la grasa subcutánea, justo debajo de la piel exterior mediante agujas especiales para ello, las cuales son muy cortas y delgadas. Se puede utilizar para controlar la celulitis, mejorar la calidad de la piel, atenuar estrías y cicatrices, reafirmar y modelar el aspecto general del cuerpo. Además, ayuda a mejorar tanto el drenaje linfático como la circulación sanguínea. La mesoterapia consigue muy buenos resultados para moldear el cuerpo, sin embargo, es necesario llevar a cabo este procedimiento al par de un adecuado régimen alimenticio, actividad física diariamente, beber suficiente cantidad de agua, y si es posible, realizarse tratamientos con aparatología o masajes manuales, con el fin de mejorar los resultados se puede utilizar alguna prenda de compresión. Es un tratamiento completamente seguro. La única contraindicación es: alergia a cualquier activo que contenga la fórmula a aplicar, dicha reacción se controla tomando medicamento.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Relajante',
                desc: 'Te sentirás consentido(a), relajado(a) y renovado(a), puedes experimentar esta sensación con nuestro aparato en la zona de espalda, hombros y cuello, o mejor aún, si lo deseas, realizarte un masaje manual relajante de cuerpo completo con nuestra quiropráctico, experta en la materia. Dura entre 1 hora a 1:15. Te recomendamos que después de tu masaje te vayas a casa a descansar.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Modelante',
                desc: 'Podemos ayudarte a favorecer la reducción de medidas de ciertas áreas de tu cuerpo y acentuar otras áreas, moldeando la grasa hacia las zonas que deseamos aumentar su volumen, nos apoyamos en el uso de aparatología y masaje manual o con rodillos, por lo general este es solicitado para moldear los muslos y aumentar el volumen y firmeza en los glúteos, disminuir la cintura y dar volumen a la cadera.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Reafirmante',
                desc: 'Te ayudamos a mejorar la calidad y firmeza de tu piel, mediante el uso de aparatología que logra estimular la regeneración de elastina y colágena, mesoterapia, o bien, hieloterapia y/o tratamientos envolventes.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Manchas Pigmentadas',
                desc: 'Existen diferentes causas que generan manchas pigmentadas en la piel, en todas ellas podemos ayudarte a atenuarlas, pero es importante identificar cual es la razón de las mismas para controlarlo de raíz. Te ofrecemos peelings especiales para ello que pueden usarse en cualquier parte del cuerpo (excepto zonas íntimas), o bien, aparatología especial para tratar las manchas sin causar efectos secundarios en la piel.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Tratamiento Especial Corporal',
                desc: 'La edad se nota en nuestra piel, no solo es importante cuidar y mantener sana y nutrida la piel de nuestro rostro, cuello y manos para vernos más jóvenes, sino que también la piel de nuestro cuerpo va cambiando con el paso del tiempo, por ello, diseñamos un sistema especial para ayudarte a mantener tu piel lo más sana y bella posible, sin importar de que zona del cuerpo se trate, contamos con aparatología diseñada especialmente para estimular la regeneración de elastina y colágena, ayudando a la piel a estar más humectada y firme, realizamos tratamientos envolventes que se acompañan de una exfoliación frutal, así como mascarillas altamente nutritivas que cambiarán el aspecto de tu piel, o bien, la técnica de Microneedling, la cual estimula la piel por las micro punciones y ayuda a penetrar activos reafirmantes y nutritivos en la piel. Se puede realizar en cualquier parte del cuerpo (excepto zonas íntimas).',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Estrías',
                desc: 'Lamentablemente éstas no se eliminan por completo, pero si podemos ayudarte a que sean menos notorias, en cuanto a su tamaño y coloración, con este tratamiento también ayudarás a que el área circundante a ellas tenga una mejor calidad y evitar que se rompa y te salgan más estrías, te ofrecemos aparatología para estimular la regeneración de la piel, microdermoabrasión con punta diamante, o bien, peelings, para realizar una exfoliación y estimulación en la piel, o bien, la técnica de Microneedling, la cual estimula la piel por las micro punciones y ayuda a penetrar activos regeneradores y nutritivos en la piel, logrando disminuir el tamaño de las estrías y mejorando notablemente la calidad de la piel. Se puede realizar en cualquier parte del cuerpo (excepto zonas íntimas).',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Microneedling',
                desc: 'Esta es una técnica de mesoterapia europea, se realiza un tratamiento con el apoyo del Dermaroller para estimular a la piel con las micro punciones y para lograr que penetre el tratamiento idóneo para la misma, éste será acorde a las necesidades de tu piel, notarás una mejoría en el aspecto de tu piel, tanto en la humectación como en la firmeza, su uso puede ser en el área facial o corporal, en este caso ayuda a atenuar cicatrices, a mejorar la calidad de la piel, a reafirmarla, disminuir el tamaño de estrías mejorando, además,  su aspecto y coloración, atenuar manchas pigmentadas, entre otros.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Pre y Post Operatorio',
                desc: 'Te ofrecemos diferentes tratamientos tanto para preparar tu piel previo a una cirugía como para su recuperación después de la misma, ayudando a mejorar la calidad de tu piel, activando su oxigenación, desinflamándola y mejorando su irrigación sanguínea, los resultados son muy notorios y favorables, se te recomienda realizarte el tratamiento las sesiones que sean necesarias dependiendo lo que te indique tu médico hasta 1 semana antes de tu cirugía, o bien, iniciar con tu tratamiento después de 5 a 7 días de tu cirugía, también dependiendo las especificaciones de tu médico cirujano, en el pre operatorio corporal te ayuda también para suavizar la grasa y en el caso del post operatorio, aceleras el proceso de recuperación y así mismo, el aspecto de tu piel y cicatrices, evitas que quede fibrosis y mejoras aún más los resultados de tu cirugía, te sentirás mucho mejor en tu proceso de recuperación, tendrás mayor movilidad y recuperarás más rápido la sensibilidad normal de tu piel.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Exfoliación Corporal y Peelings',
                desc: 'Es un tratamiento delicioso para tu piel, te realizamos una exfoliación mediante técnicas de masaje en todo tu cuerpo y en seguida te realizamos un peeling (en casos necesarios), después procedemos a una envoltura que dejará tu piel nutrida y tersa, podemos ofrecerte este tratamiento frutal, de chocoterapia, vinoterapia, o bien, de barro enzimático o fangoterapia (te darán un efecto desintoxicante y reductivo).',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Velo de Novia o Baño de Sirena',
                desc: 'Es un tratamiento delicioso para tu piel, ya sea para estar más bella para tu boda o para preparar tu piel para un viaje a la playa, para que luzca sana y logres obtener un bronceado más parejo sin dañar tanto tu piel, te realizamos una exfoliación mediante técnicas de masaje en todo tu cuerpo y en seguida te realizamos un peeling (en casos necesarios), después procedemos a una envoltura que dejará tu piel nutrida y tersa, podemos ofrecerte este tratamiento frutal, de chocolaterapia, vinoterapia, o bien, de barro enzimático (te dará un efecto desintoxicante y reductivo), en esta misma sesión, te realizamos un facial profundo en rostro y cuello, con aparatología de vanguardia y cerramos con un velo de colágeno y elastina. Es recomendable realizarlo 2 a 3 semanas antes de tu boda o tu viaje.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Terapia Física y de Rehabilitación',
                desc: 'Contamos con aparatología que ayudará a aminorar las molestias y a acelerar los procesos evolutivos en caso de algún daño físico o cirugía, siendo esto solo una terapia para ayudarte en el proceso, bajo la indicación de tu médico. También te ofrecemos terapia física con nuestro quiropráctico. DOLORES DE COLUMNA, CUELLO, TÓRAX, REGIÓN LUMBAR Y CIÁTICA, POST OPERATORIO DE CIRUGÍA DE COLUMNA O PARAVERTEBRAL, LESIONES DEL DEPORTE O GOLPES Y DESGARRES, DOLORES NEURÍTICOS, MUSCULARES, ARTICULARES, TENDINOSOS, NEURITRIS (PÁRALISIS FACIAL DE BELL O VIRAL)',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Masaje Terapéutico con Ajuste Quiropráctico',
                desc: 'Te ofrecemos esta completa terapia realizada por nuestra quiropráctica, que además de ayudarte a descontracturar y aminorar el estrés, te relajará profundamente, mejorando además tu circulación sanguínea y drenaje linfático. La duración varía entre 1 a 1:30 horas. Si tienes muchas presiones y llevas un ritmo muy acelerado, te recomendamos darte este masaje una vez al mes, te encantarán sus beneficios. Además, si ella lo considera necesario, durante tu masaje te realizará también reflexología podal.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Masaje Deportivo',
                desc: 'Es el masaje ideal para quienes realizan mucha actividad física y tienen muchas molestias musculares, que les gusta sentir una mayor presión y fuerza mientras disfrutan un masaje. Te relajará profundamente activando, además, la oxigenación, circulación sanguínea y drenaje linfático de tu cuerpo.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','corporal'],
                title: 'Corporal Spa',
                desc: 'Te sentirás completamente consentido(a), relajado(a) y renovado(a), consiste en realizarte un masaje manual descontracturante y relajante de cuerpo completo con nuestra quiropráctico experta en la materia, incluye también reflexología podal. Dura 1:30 horas. Te recomendamos que después de tu masaje te vayas a casa a descansar.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','tratamientos'],
                title: 'Acné',
                desc: 'Te recomendamos iniciar el tratamiento para controlar el acné con una limpieza profunda facial o de espalda (si fuera el caso)  y entonces definiremos cual será el tratamiento idóneo para ti, ya que contamos con peelings específicos para controlarlo y también con aparatología, ambos no solo controlarán la bacteria del acné, sino que a la vez iremos observando buenos resultados en la mejoría y disminución de las cicatrices que éste va dejando en la piel (en caso de que las tengas).',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','tratamientos'],
                title: 'Cutáneo',
                desc: 'Puedes mejorar el aspecto, la calidad, humectación y firmeza de tu piel, tanto de tu rostro y cuello, como de tu escote, manos y cuerpo. Contamos con diferentes opciones que por separado o en conjunto (si fuera necesario) te brindarán muy buenos resultados, así como aparatología especial para estimular la regeneración de elastina y colágena, lo cual mejorará la hidratación y firmeza en tu piel, o bien, los peelings, que además de estimular su regeneración logrará atenuar los signos de la edad como líneas de expresión, manchas pigmentadas, cicatrices, etc. ',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','tratamientos'],
                title: 'Manchas',
                desc: 'Te ayudamos a atenuar las manchas pigmentadas tanto en tu rostro o cuello como en el escote, manos o alguna parte de tu cuerpo (excepto zonas íntimas), esto lo lograremos con el apoyo de nuestros aparatos especiales y peelings, los cuales ayudarán a ir atenuando las manchas y a la vez mejorarán la calidad de tu piel, en conjunto con algún otro tratamiento (peeling y/o aparatología, siempre dependiendo de tus necesidades).',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','tratamientos'],
                title: 'Clínica de Piernas',
                desc: 'Te ofrecemos un tratamiento integral diseñado para piernas cansadas, con celulitis, estrías, inflamación, flacidez o exceso de grasa. Contamos con aparatos especiales para ello que en conjunto lograrán resultados visibles y duraderos, así mismo podemos moldear y reafirmar tus glúteos para que luzcas y te sientas mejor. También te ofrecemos masajes manuales, tanto reductivos como para mejorar el drenaje linfático y la circulación sanguínea. Además, te ofrecemos exfoliaciones y/o peelings frutales, así como tratamientos envolventes para nutrir tu piel y luzcas así, unas piernas de porcelana.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cosmiatria','tratamientos'],
                title: 'Bronceado',
                desc: 'Contamos con cabina de bronceado vertical (para mayor higiene) de marca italiana y productos indicados especialmente para tu bronceado en ella. Además de lucir una piel más hermosa y bronceada, esto te brinda diferentes beneficios como el preparar tu piel, previo a una exposición solar, evitando así que tu piel resulte lastimada por el sol, disimular imperfecciones: celulitis, estrías, cicatrices o manchas, te ayuda a incrementar la fijación del calcio en los huesos a través de la síntesis de la vitamina D, te da una sensación de bienestar y relajación.',
                imgs: ['s4.jpg']
            },
        ];

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

        $scope.servicio = {};
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
            /*#endregion responsive code end*/
        };


        jssor_1_slider_init2 = function() {

            var jssor_1_SlideshowTransitions = [
                {$Duration:1200,$Opacity:2}
              ];
            var jssor_1_options = {
              $AutoPlay: 1,
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

      });
})();