---
title: "La electricidad. Soluciones energeticas y conectividad. Iluminacion y domotica"
bookLabel: "Capitulo 2"
order: 2
sectionSlug: "ingenieria-energetica-comunicaciones"
summary: "Reproduccion literal del texto de 'La electricidad. Soluciones energeticas y conectividad. Iluminacion y domotica' segun el cuerpo del libro."
sourcePages:
  start: 23
  end: 34
calculatorSlugs:
  - "autonomia-solar"
seasonTags: []
mediaSlots: []
contentBlocks:
  - type: "insert"
    id: "infraestructura-energia-apertura"
    kind: "image"
    title: "Infraestructura energetica de apertura"
    purpose: "Abre el capitulo con una escena documental antes del desarrollo tecnico."
    status: "ready"
    assetPath: "/media/la-electricidad/infraestructura-energia-apertura.png"
    caption: "Energia rural planificada como sistema critico de autonomia."
    variant: "photo-break"
    layout: "wide"
  - type: "prose"
    content: |
      ## CAPÍTULO 2 LA ELECTRICIDAD Y LAS COMUNICACIONES
  - type: "prose"
    content: |
      Ingeniería de infraestructuras críticas para la autonomía rural: sistemas avanzados de energía y comunicaciones en entornos de baja densidad El desarrollo de una finca autosuficiente de al menos dos hectáreas exige una planificación técnica que trascienda la mera instalación de dispositivos domésticos. La transición hacia un modelo de supervivencia y autogestión requiere una integración sistémica donde la generación eléctrica, el almacenamiento, la gestión hídrica y las redes de datos operen con redundancia y resiliencia ante fallos sistémicos. Dimensionamiento y arquitectura de sistemas fotovoltaicos en instalaciones aisladas La energía solar constituye el pilar fundamental de la autonomía eléctrica en fincas rústicas sin acceso al tendido convencional. Un sistema de aislada eficiente debe ser diseñado para cubrir las necesidades medias anuales, considerando la variabilidad estacional extrema del norte de España. La configuración de referencia para una vivienda rural típica integra un campo fotovoltaico de aproximadamente 12 paneles monocristalinos de alta eficiencia, como los de tipo PERC (Passivated Emitter and Rear Cell) de 405 W o superiores, capaces de generar una media de 24,3 kWh al día. Esta tecnología de células PERC permite una mayor captación de fotones al incluir una capa reflectante en la parte posterior de la célula, optimizando la producción en condiciones de baja luminosidad o cielos cubiertos, típicos de la geografía asturiana. La producción energética oscila significativamente a lo largo del año: mientras que en verano se pueden alcanzar los 34 kWh diarios gracias a unas 7 horas de sol pico (HSP), en invierno esta cifra cae drásticamente hasta los 14,5 kWh debido a la reducción de las horas de luz a un promedio de 3 HSP. Este comportamiento estacional obliga a un sobredimensionamiento preventivo del generador fotovoltaico para garantizar que, incluso en el mes más desfavorable, el sistema sea capaz de mantener las cargas críticas.
  - type: "insert"
    id: "asset-1"
    kind: "graphic"
    title: "Esquema de la microred"
    purpose: "Aclara la arquitectura energetica descrita en la seccion."
    status: "ready"
    assetPath: "/media/la-electricidad/esquema-microred-finca.png"
    caption: "Esquema de la microred"
    variant: "graphic-explainer"
    layout: "wide"
  - type: "prose"
    content: |
      Metodología de cálculo de cargas y auditoría de demanda energética El cálculo de la demanda energética real es el primer paso crítico en el diseño de la infraestructura. Se deben catalogar todos los dispositivos, diferenciando entre cargas de corriente continua (CC) y corriente alterna (CA). Para una finca de dos hectáreas, es imperativo incluir no solo la iluminación y los electrodomésticos básicos, sino también las cargas agrícolas como bombas de pozo, herramientas de taller y sistemas de riego solar automatizado.
  - type: "prose"
    content: |
      | Dispositivo Eléctrico | Potencia Nominal (W) | Uso Diario Estimado (h) | Energía Diaria (Wh) |
      | Refrigerador eficiente (A+++) | 150 | 24 (compresor al 30%) | 1080 |
      | Iluminación LED perimetral e interior | 100 | 6 | 600 |
      | Televisor y sistemas de comunicación | 150 | 5 | 750 |
      | Microondas / Cocción de inducción | 1200 | 0.5 | 600 |
      | Bomba de agua solar (presurización) | 750 | 2 | 1500 |
      | Herramientas de taller (amoladora, taladro) | 1500 | 1 | 1500 |
      | Lavadora (ciclo frío) | 700 | 1 | 700 |
      | Portátil y cargadores USB | 60 | 4 | 240 |
  - type: "prose"
    content: |
      | Dispositivo Eléctrico | Potencia Nominal (W) | Uso Diario Estimado (h) | Energía Diaria (Wh) |
      | Total Estimado de Consumo Diario | - | - | 6970 Wh |
  - type: "prose"
    content: |
      Para determinar la capacidad real necesaria, este consumo total de aproximadamente 7 kWh/día debe ajustarse mediante un factor de seguridad del 20-25% para compensar las pérdidas por conversión en el inversor (rendimiento del 90-95%) y la caída de tensión en el cableado. El inversor-cargador debe dimensionarse para gestionar la carga máxima simultánea (potencia pico). Si se prevé el uso concurrente de la bomba de agua y herramientas de taller, un inversor de 5000 W a 48 V es la solución recomendada para absorber los picos de arranque inductivos, que pueden triplicar la potencia nominal del motor durante breves instantes. Configuración del campo solar y distribución de strings La disposición física de los paneles influye directamente en la captación. En Asturias, se recomienda una combinación de estructuras inclinadas (aprovechando cubiertas planas con una inclinación de 30º a 60º según la prioridad estacional) y estructuras coplanares en tejados de teja para diversificar el ángulo de incidencia y minimizar el impacto del viento. Técnicamente, el sistema suele organizarse en cadenas o strings conectadas en serie para elevar la tensión (V), lo cual reduce la corriente (A) y minimiza las pérdidas por efecto Joule en el transporte de la energía hacia el regulador. Un esquema habitual de 12 placas se distribuye en cuatro strings de tres placas cada uno, conectados en paralelo a través de un repartidor antes de entrar al inversor-cargador de alta tensión.
  - type: "prose"
    content: |
      Microhidroeléctrica: El recurso de base constante en la Cornisa Cantábrica A diferencia de la energía solar, que es intermitente y dependiente de la meteorología diurna, la energía microhidroeléctrica ofrece una generación continua (base de carga) siempre que exista un recurso hídrico estable. En fincas de dos hectáreas con acceso a ríos, arroyos o manantiales propios, esta tecnología es técnica y estratégicamente superior para mantener sistemas críticos durante la noche o periodos de nubosidad persistente. La potencia
  - type: "prose"
    content: |
      ### disponible se define por la fórmula física:
  - type: "prose"
    content: |
      ### Donde:
  - type: "prose"
    content: |
      -  P es la potencia en vatios (W).
  - type: "prose"
    content: |
      -  eta es la eficiencia del sistema (típicamente entre 0.7 y 0.85).
  - type: "prose"
    content: |
      -  rho es la densidad del agua (1000 kg/m^3).
  - type: "prose"
    content: |
      -  g es la aceleración de la gravedad (9.81 m/s^2).
  - type: "prose"
    content: |
      -  Q es el caudal de diseño en metros cúbicos por segundo (m^3/s).
  - type: "prose"
    content: |
      -  H es el salto neto en metros (altura vertical menos pérdidas de fricción).
  - type: "prose"
    content: |
      Tipología de turbinas para aplicaciones rurales y particulares La elección de la turbina es una decisión de ingeniería que depende del perfil del salto (altura) y del caudal disponible en la finca. En la geografía asturiana, caracterizada por desniveles pronunciados, son frecuentes los aprovechamientos de salto alto con caudales moderados.
  - type: "prose"
    content: |
      -  Turbina Pelton: Se utiliza en escenarios de gran salto (35 a 300 metros) y
  - type: "prose"
    content: |
      caudales relativamente bajos. Utiliza inyectores que lanzan chorros de agua a alta velocidad contra las cucharas del rodete, transformando la energía cinética de forma eficiente. Es la opción más robusta para entornos de montaña.
  - type: "prose"
    content: |
      -  Turbina Turgo: Una variante de la Pelton con inyección lateral que
  - type: "prose"
    content: |
      permite manejar caudales algo superiores con un rodete de menor diámetro, ideal para instalaciones donde el espacio para la obra civil es limitado.
  - type: "prose"
    content: |
      -  Turbina de flujo cruzado (Ossberger): Altamente versátil para saltos
  - type: "prose"
    content: |
      medios y bajos con caudales muy variables. Su diseño permite que el agua atraviese el rodete dos veces, manteniendo un rendimiento estable incluso cuando el caudal del arroyo disminuye al 20% de su capacidad nominal.
  - type: "prose"
    content: |
      -  Turbina Kaplan / Tubular: Optimizada para saltos bajos (3 a 20 metros)
  - type: "prose"
    content: |
      pero con caudales elevados. Se instala frecuentemente en canales de riego o azudes, donde el eje horizontal minimiza los requisitos de construcción. Almacenamiento energético avanzado: Litio versus Plomo-Ácido El almacenamiento es el componente crítico que determina la autonomía real de la finca. En la actualidad, la tecnología de Litio-Ferrofosfato (LiFePO_4) ha desplazado a las soluciones tradicionales de plomo-ácido (AGM o Gel) en sistemas de aislada debido a su superioridad técnica y económica a largo plazo.
  - type: "prose"
    content: |
      | Característica Técnica | Baterías de Litio (LiFePO4) | Baterías de Plomo- Ácido (AGM) |
      | Ciclos de vida (80% DoD) | 3,000 - 7,000 ciclos | 300 - 500 ciclos |
      | Profundidad de descarga (DoD) | Hasta 100% (seguro al 80-90%) | Máximo 50% |
      | Eficiencia de carga/descarga | > 95% | 70% - 85% |
      | Mantenimiento operativo | Nulo (gestión electrónica BMS) | Revisión de bornes y sulfatación |
      | Densidad energética | Alta (compacta y ligera) | Baja (pesada y voluminosa) |
      | Comportamiento térmico | Sensible al frío extremo (carga) | Robusta pero pierde capacidad |
      | Vida útil estimada | 10 - 15 años | 3 - 5 años |
  - type: "prose"
    content: |
      Las baterías de litio, como los módulos Pylontech US3000C de 48 V, permiten descargas profundas diarias sin degradación prematura, algo fundamental cuando el sistema debe alimentar cargas críticas durante varios días de lluvia persistente. No obstante, el litio presenta una limitación crítica: su incapacidad para aceptar carga a temperaturas inferiores a 0 ºC, ya que se produce un fenómeno de chapado de litio metálico que daña permanentemente las celdas. Para fincas en zonas de alta montaña asturiana, las baterías deben alojarse en recintos con aislamiento térmico o contar con sistemas de autocalentamiento integrados en el BMS (Battery Management System). Dimensionamiento del banco de baterías y cálculo de autonomía Para asegurar la continuidad del suministro en una finca aislada, se debe calcular la capacidad necesaria basándose en los días de autonomía requeridos (típicamente de 3 a 5 días para compensar periodos de mal tiempo). Si el consumo diario es de 6.97 kWh, un sistema con 3 días de autonomía y una
  - type: "prose"
    content: |
      ### eficiencia del 85% requiere:
  - type: "prose"
    content: |
      Capacidad Almacenamiento (Wh) = {Consumo Diario} {Días de Autonomía_sistema} Capacidad = 6970 Wh 3 días 0.85 = 24,600 Wh approx 24.6 kWh En una arquitectura de 48 V, esto equivale a unos 512 Ah. El uso de 48 V en lugar de 12 V o 24 V es una decisión de ingeniería superior para fincas de gran extensión (2 ha), ya que reduce la intensidad de corriente para la misma potencia, permitiendo el uso de cables de menor sección y minimizando la caída de tensión en el transporte de energía hacia bombas de pozo o establos alejados. Seguridad eléctrica, puesta a tierra y endurecimiento de la infraestructura La protección de las personas y de la electrónica sensible es la prioridad en un entorno rural expuesto a fenómenos atmosféricos extremos. Un sistema de aislada debe ser resiliente no solo ante fallos internos, sino ante descargas atmosféricas y posibles interferencias electromagnéticas.
  - type: "prose"
    content: |
      Sistemas de puesta a tierra en terrenos de alta resistividad En la geografía asturiana, los suelos suelen ser rocosos o pedregosos, lo que presenta una alta resistividad eléctrica y dificulta la evacuación de corrientes de falta. Para lograr una puesta a tierra eficaz, se emplean técnicas de ingeniería
  - type: "prose"
    content: |
      ### específicas:
  - type: "prose"
    content: |
      1. Electrodos horizontales y bucles: En suelos poco profundos sobre roca,
  - type: "prose"
    content: |
      se entierran conductores de cobre desnudo de 50 mm^2 formando bucles
  - type: "prose"
    content: |
      - mallas para aumentar la superficie de contacto.
  - type: "prose"
    content: |
      2. Mejoradores de conductividad: El uso de geles higroscópicos o
  - type: "prose"
    content: |
      bentonita ayuda a retener la humedad alrededor de los electrodos, reduciendo la impedancia transitoria del sistema.
  - type: "prose"
    content: |
      3. Configuración de "Pata de ganso": Recomendada para la protección
  - type: "prose"
    content: |
      contra rayos, consiste en ramificaciones de pletina de cobre que facilitan la dispersión de corrientes de alta frecuencia.
  - type: "prose"
    content: |
      4. Ecualización de potencial: Es vital unir galvánicamente todas las masas
  - type: "prose"
    content: |
      metálicas (marcos de paneles, estructuras de turbinas, carcasas de inversores) al borne principal de tierra para evitar tensiones de paso y contacto peligrosas. Protección contra sobretensiones y endurecimiento contra Pulsos Electromagnéticos (EMP) Una finca aislada es vulnerable a sobretensiones transitorias causadas por rayos (LEMP) o conmutaciones de carga pesada. Se deben instalar protectores de sobretensión (SPD) de Clase I en la entrada de los paneles y de Clase II en la distribución de CA. Además, ante el riesgo de un Pulso Electromagnético (EMP) de origen solar (tormentas geomagnéticas tipo Carrington) o humano, la infraestructura crítica debe ser endurecida. El diseño de una Jaula de Faraday es la defensa primaria para proteger equipos de repuesto, radios y controladores. Las soluciones DIY efectivas incluyen el uso de botes de basura de acero con tapas selladas o el revestimiento de cajas de almacenamiento con múltiples capas de papel de aluminio, asegurando que los dispositivos internos estén aislados eléctricamente de la pared metálica mediante materiales no conductores como cartón o tela.
  - type: "prose"
    content: |
      Para sistemas operativos, existen racks blindados profesionales con atenuación de 80 dB y filtros de línea que impiden la entrada de picos de tensión a través del cableado. Comunicaciones críticas: Internet satelital, redes de malla y radiofrecuencia La comunicación fluida es un componente de seguridad tan vital como la energía. En entornos rurales sin cobertura de fibra óptica, la redundancia en los canales de datos es esencial para la gestión de la finca y la respuesta ante emergencias. Análisis comparativo: Starlink frente a Hispasat (Conectate35) El mercado de internet satelital ofrece actualmente dos paradigmas tecnológicos con implicaciones operativas muy distintas para el usuario rural.
  - type: "prose"
    content: |
      | Parámetro | Starlink (SpaceX) | Hispasat (Conectate35) |
      | Tecnología de órbita | Órbita Baja (LEO) - 550 km | Geoestacionaria (GSO) - 36,000 km |
      | Velocidad de bajada | 130 - 300 Mbps | 100 - 200 Mbps (subvencionado) |
      | Latencia (Ping) | 25 - 40 ms (Excelente) | > 600 ms (Deficiente) |
      | Estabilidad climática | Muy alta (tormentas/niebla) | Sensible a lluvia intensa |
      | Consumo eléctrico | Elevado (requiere gestión) | Moderado |
      | Coste mensual | ~29 - 65 €/mes | 35 €/mes (precio máximo fijado) |
  - type: "prose"
    content: |
      Mientras que Starlink permite videoconferencias y teletrabajo sin retrasos perceptibles, Hispasat (Conectate35) se ve penalizado por su enorme latencia, lo que inhabilita aplicaciones de comunicación en tiempo real, aunque sigue siendo una opción válida para navegación básica y descarga de datos en zonas con subvención estatal.
  - type: "prose"
    content: |
      Redes de malla locales y protocolo Meshtastic (LoRa) Para la comunicación interna dentro de la finca de dos hectáreas y con comunidades vecinas en un radio de hasta 10-40 km, la tecnología LoRa (Long Range) es la solución de bajo consumo más eficiente. El sistema Meshtastic permite crear una malla de mensajería cifrada (AES-256) sin dependencia de satélites o torres de telefonía.
  - type: "prose"
    content: |
      -  Hardware recomendado: Dispositivos basados en ESP32 como LilyGO T-
  - type: "prose"
    content: |
      Beam o RAK Wireless WisBlock, que incluyen GPS y pueden funcionar semanas con una sola carga de batería.
  - type: "prose"
    content: |
      -  Configuración para España: Se utiliza la banda ISM de 868 MHz. El canal
  - type: "prose"
    content: |
      por defecto en Europa es el LongFast centrado en 869.525 MHz, que equilibra el alcance con la tasa de datos.
  - type: "prose"
    content: |
      -  Roles de nodo: En una finca extensa, se deben configurar nodos
  - type: "prose"
    content: |
      estratégicos en puntos altos como Repeaters o Routers para asegurar la cobertura en valles y zonas de sombra. Protocolos de radio de emergencia y banda ciudadana En escenarios de colapso de redes digitales, la radio analógica sigue siendo el último recurso fiable. La integración de los siguientes protocolos es fundamental
  - type: "prose"
    content: |
      ### para la seguridad del asentamiento rural:
  - type: "prose"
    content: |
      1. Canal 7-7 PMR: Iniciativa de seguridad en montaña que utiliza el Canal 7
  - type: "prose"
    content: |
      y el subtono 7 (446.08125 MHz / 85.4 Hz). Permite el contacto directo con otros grupos en el entorno natural.
  - type: "prose"
    content: |
      2. Wilderness Protocol: Los radioaficionados monitorizan las frecuencias
  - type: "prose"
    content: |
      de llamada (VHF 146.520 MHz) durante los primeros cinco minutos de cada hora para escuchar señales de socorro en zonas remotas.
  - type: "prose"
    content: |
      3. HF (Onda Corta): La banda de 40 metros (7 MHz) es la "reina" para
  - type: "prose"
    content: |
      comunicaciones de alcance nacional en España, permitiendo recibir noticias y partes meteorológicos incluso si los repetidores locales han fallado.
  - type: "prose"
    content: |
      Sistemas críticos La ingeniería de la autosuficiencia se basa en el principio de que uno es ninguno. La redundancia N+1 garantiza que el fallo de un componente no detenga la operación de la finca.
  - type: "prose"
    content: |
      -  Redundancia de Inversores: Es preferible instalar dos unidades de 3 kW
  - type: "prose"
    content: |
      en paralelo que una sola de 6 kW. Ante una avería, el sistema mantiene el 50% de la capacidad operativa.
  - type: "prose"
    content: |
      -  Fuentes de Energía Híbridas: La combinación de fotovoltaica,
  - type: "prose"
    content: |
      microhidroeléctrica y un generador de respaldo de combustible (gasolina/propano) asegura el suministro en cualquier condición climática extrema.
  - type: "prose"
    content: |
      -  Mantenimiento Preventivo: Se deben establecer protocolos de limpieza
  - type: "prose"
    content: |
      semestral de paneles (con agua destilada para evitar cal), revisión de conexiones eléctricas para detectar corrosión o ataques de roedores, y equilibrado de celdas de batería para maximizar su vida útil. La integración armoniosa de estos sistemas de energía y comunicación convierte a una propiedad rural en una infraestructura crítica autónoma, capaz de resistir tanto la degradación de los servicios públicos como eventos catastróficos, garantizando la continuidad de la vida y la actividad productiva bajo el paradigma de la autosuficiencia total. Fabricación de velas. Para la fabricación de velas en un entorno de autosuficiencia, puedes utilizar tres fuentes principales de combustible: cera de abeja, sebo animal o aceite vegetal reciclado.
  - type: "prose"
    content: |
      1. Preparación de la mecha (pabilo)
  - type: "prose"
    content: |
      Una mecha de calidad es fundamental para una combustión limpia. Se recomienda usar hilo de algodón 100% sin tratar.
  - type: "prose"
    content: |
      -  Tratamiento: Para mejorar la combustión, puedes sumergir el hilo
  - type: "prose"
    content: |
      durante 12 horas en una solución de una taza de agua tibia, una cucharada de sal y dos de bórax.
  - type: "prose"
    content: |
      -  Encerado: Una vez seco, sumerge el hilo en cera derretida para que gane
  - type: "prose"
    content: |
      rigidez. Esto facilita su colocación y asegura que se queme de forma uniforme.
  - type: "prose"
    content: |
      2. Velas de cera de abeja
  - type: "prose"
    content: |
      ### Es la opción más limpia y aromática. Puedes hacerlas mediante dos métodos:
  - type: "prose"
    content: |
      -  Enrollado: Utiliza láminas de cera de abeja virgen. Coloca la mecha en un
  - type: "prose"
    content: |
      extremo y enrolla la lámina sobre sí misma apretando bien. Si la cera está muy fría y se quiebra, puedes calentarla ligeramente con las manos o un secador para hacerla maleable.
  - type: "prose"
    content: |
      -  Fundido: Derrite la cera al baño maría (nunca directamente al fuego
  - type: "prose"
    content: |
      para evitar que se inflame). Vierte la cera en moldes o recipientes de cristal, asegurándote de que la mecha permanezca centrada mediante un soporte o dos lápices.
  - type: "prose"
    content: |
      3. Velas de sebo animal
  - type: "prose"
    content: |
      El sebo (grasa de vaca, oveja o ciervo) es un recurso abundante en fincas con ganado.
  - type: "prose"
    content: |
      -  Renderizado: Corta la grasa en trozos pequeños y caliéntala en una olla
  - type: "prose"
    content: |
      con un poco de agua a fuego lento para separar las impurezas. Cuela el líquido resultante y déjalo enfriar; el sebo puro se solidificará en la superficie.
  - type: "prose"
    content: |
      -  Mezcla técnica: El sebo puro es blando y tiene un olor fuerte. Para
  - type: "prose"
    content: |
      obtener una vela más resistente y de mejor aroma, se recomienda mezclar 4 partes de sebo con 1 parte de cera de abeja.
  - type: "prose"
    content: |
      -  Elaboración: Al igual que con la cera, derrite la mezcla al baño maría. Si
  - type: "prose"
    content: |
      deseas añadir aceites esenciales para enmascarar el olor, hazlo cuando la mezcla baje a unos 71^C (160^F) antes de verterla en los moldes.
  - type: "prose"
    content: |
      4. Velas de aceite reciclado
  - type: "prose"
    content: |
      En situaciones de supervivencia, puedes reutilizar aceite de cocina filtrado.
  - type: "prose"
    content: |
      -  Mezcla: Debes combinar el aceite con un endurecedor como la cera de
  - type: "prose"
    content: |
      soja de baja fusión o cera de abeja. Una proporción común es usar aproximadamente 400 g de aceite por cada 85-100 g de cera.
  - type: "prose"
    content: |
      -  Método de emergencia: Un método sencillo consiste en verter un poco
  - type: "prose"
    content: |
      de agua en un vaso, añadir una capa de aceite encima y colocar una mecha flotante (sujeta por un trozo de plástico o metal) que toque solo el aceite. Consejo de seguridad: Utiliza siempre el método de baño maría para fundir las grasas y ceras, ya que son materiales inflamables si alcanzan su punto crítico de temperatura.
  - type: "insert"
    id: "asset-2"
    kind: "graphic"
    title: "Mapa de iluminacion y enlaces"
    purpose: "Ayuda a seguir el tramo de iluminacion y conectividad."
    status: "ready"
    assetPath: "/media/la-electricidad/mapa-iluminacion-y-enlaces.png"
    caption: "Mapa de iluminacion y enlaces"
    variant: "graphic-explainer"
    layout: "wide"
  - type: "calculator"
    slug: "autonomia-solar"
    title: "Herramienta"
    summary: "Calculadora de apoyo asociada al capitulo."
---
