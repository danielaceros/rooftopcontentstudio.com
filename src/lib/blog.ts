import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  category: string;
  tags: string[];
  keyword: string;
  intent: "informacional" | "comercial" | "mixta";
  excerpt: string;
  seoTitle: string;
  metaDescription: string;
  heroKicker: string;
  body: Array<
    | { type: "paragraph"; text: string }
    | { type: "heading"; level: 2 | 3; text: string }
    | { type: "list"; ordered?: boolean; items: string[] }
    | { type: "faq"; question: string; answer: string }
    | { type: "image"; src: string; alt: string; width: number; height: number; caption?: string; priority?: boolean }
  >;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "estudio-grabacion-madrid-precios",
    title: "Estudio de grabación en Madrid: precios, opciones y qué debes mirar antes de reservar",
    description:
      "Qué cuesta realmente grabar contenido en un estudio de Madrid, qué opciones existen y cómo elegir un espacio que no mate la naturalidad del contenido.",
    publishedAt: "2026-03-17",
    updatedAt: "2026-05-27",
    readingTime: "6 min",
    category: "SEO",
    tags: ["estudio grabación madrid", "precios", "reels", "contenido"],
    keyword: "estudios de grabacion madrid precios",
    intent: "comercial",
    excerpt:
      "Una guía clara para entender precios, modalidades y diferencias entre un plató tradicional y un ático-estudio pensado para contenido orgánico en Madrid.",
    seoTitle: "Estudio de grabación en Madrid: precios, opciones y qué mirar antes de reservar",
    metaDescription:
      "Descubre cuánto cuesta un estudio de grabación en Madrid, qué opciones existen y cómo elegir un espacio para grabar reels, podcast o contenido de marca con resultado profesional.",
    heroKicker: "Blog / RCS",
    body: [
      {
        type: "paragraph",
        text: "Buscar un estudio de grabación en Madrid no va solo de encontrar cuatro paredes, focos y una tarifa por hora. Va de elegir un espacio que encaje con el tipo de contenido que quieres producir, con tu nivel de exigencia y con la sensación que quieres transmitir cuando alguien vea la pieza terminada.",
      },
      {
        type: "paragraph",
        text: "Si haces contenido para marca personal, empresa, reels, podcast, entrevistas o piezas comerciales, el espacio condiciona muchísimo el resultado. Y también el precio. Por eso conviene entender bien qué estás pagando y qué diferencias hay entre un plató convencional y un estudio pensado para que el contenido parezca real, no artificial.",
      },
      { type: "image", src: "/blog/estudio-grabacion-madrid-precios/hero.webp", alt: "Micrófono y auriculares en estudio de grabación profesional en Madrid", width: 1920, height: 1252, priority: true },
      { type: "heading", level: 2, text: "Cuánto cuesta un estudio de grabación en Madrid" },
      {
        type: "paragraph",
        text: "En Madrid puedes encontrar opciones muy distintas según el tipo de espacio, el equipo incluido y el enfoque del servicio. Hay estudios que solo ofrecen la sala. Otros añaden iluminación, cámaras o técnico. Y luego están los espacios híbridos, donde además del entorno físico tienes apoyo creativo o producción audiovisual completa.",
      },
      {
        type: "list",
        items: [
          "Solo Grabación: vienes al ático y grabas con equipo técnico profesional. Sales con los brutos del día.",
          "Grabación + Edición: filmmaker con dirección creativa, edición profesional y entrega en 24-48h.",
          "Producción Completa: grabación, edición, estrategia de contenido y distribución multiplataforma.",
        ],
      },
      {
        type: "paragraph",
        text: "En Rooftop Content Studio trabajo con tres modalidades sencillas: Solo Grabación, Grabación + Edición y Producción Completa. Te respondo hoy, sin compromiso.",
      },
      { type: "heading", level: 2, text: "Qué encarece o abarata una sesión" },
      { type: "image", src: "/blog/estudio-grabacion-madrid-precios/mid.webp", alt: "Micrófono profesional sobre soporte en estudio de grabación", width: 1920, height: 1280 },
      {
        type: "list",
        items: [
          "Duración de la sesión.",
          "Si necesitas solo grabación o también edición y estrategia.",
          "Número de formatos o piezas finales.",
          "Si hay edición, subtítulos o adaptaciones para redes.",
          "Complejidad del set, sonido o multicámara.",
        ],
      },
      { type: "heading", level: 2, text: "Por qué no todos los estudios sirven para grabar contenido orgánico" },
      {
        type: "paragraph",
        text: "Muchos estudios funcionan bien para fotografía de producto, e-commerce o piezas muy controladas. Pero cuando quieres grabar contenido que parezca cercano, premium y natural, un plató clásico puede jugar en tu contra. El resultado se nota más artificial, más frío y muchas veces más impostado.",
      },
      {
        type: "paragraph",
        text: "Ahí es donde un ático-estudio cambia la película. En lugar de ciclorama blanco, tienes salón, terraza, skyline, profundidad real y luz natural. El contenido mantiene calidad profesional, pero no huele a estudio. Para reels, entrevistas, contenido de marca o piezas de autoridad, eso marca bastante diferencia.",
      },
      { type: "heading", level: 2, text: "Qué deberías mirar antes de reservar" },
      {
        type: "list",
        items: [
          "Si el espacio encaja con la estética que quieres proyectar.",
          "Si puedes grabar varios formatos en una sola sesión.",
          "Si hay luz natural real o todo depende de focos cerrados.",
          "Si el acceso es fácil para cliente, equipo o invitados.",
          "Si el estudio ofrece solo grabación o también edición y producción completa.",
        ],
      },
      { type: "heading", level: 2, text: "Cuándo tiene sentido grabar en un rooftop studio en Madrid" },
      {
        type: "paragraph",
        text: "Tiene especialmente sentido cuando quieres contenido que se vea profesional sin parecer encorsetado: marca personal premium, reels de venta, piezas para lanzamiento, podcast, entrevistas, contenido para ads o jornadas intensivas de grabación donde necesitas sacar mucho material en pocas horas.",
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Puedo grabar sin edición?",
        answer: "Sí. Con Solo Grabación vienes al ático, grabas con mi equipo técnico y sales con los brutos del día.",
      },
      {
        type: "faq",
        question: "¿Sirve también para grabar reels o contenido para redes?",
        answer: "Sí. De hecho, es uno de los usos más potentes del espacio, porque mezcla entorno orgánico con resultado profesional.",
      },
      {
        type: "faq",
        question: "¿Está pensado solo para grandes producciones?",
        answer: "No. También encaja muy bien para marcas personales, sesiones ágiles y grabaciones de contenido en bloques.",
      },
    ],
  },
  {
    slug: "grabar-podcast-madrid-estudio",
    title: "Grabar podcast en Madrid: cómo elegir un estudio que eleve tu marca y no parezca un set frío",
    description:
      "Qué mirar si quieres grabar un podcast en Madrid con imagen premium, sonido sólido y un espacio que ayude a vender mejor tu marca.",
    publishedAt: "2026-03-22",
    updatedAt: "2026-05-27",
    readingTime: "7 min",
    category: "SEO",
    tags: ["podcast madrid", "estudio podcast madrid", "marca personal", "contenido premium"],
    keyword: "grabar podcast madrid estudio",
    intent: "comercial",
    excerpt:
      "Una guía para marcas y perfiles personales que quieren grabar podcast en Madrid con mejor imagen, mejor contexto y mejor percepción de marca.",
    seoTitle: "Grabar podcast en Madrid: cómo elegir un estudio con imagen premium",
    metaDescription:
      "Descubre cómo elegir un estudio para grabar podcast en Madrid con estética cuidada, sonido profesional y un resultado que refuerce tu marca.",
    heroKicker: "Blog / RCS",
    body: [
      {
        type: "paragraph",
        text: "Grabar podcast en Madrid se ha vuelto fácil. Grabarlo bien, no tanto. Hay muchos espacios donde colocar dos micros y dar a grabar, pero no tantos donde el resultado ayude de verdad a que tu marca se vea más seria, más cuidada y más creíble.",
      },
      {
        type: "paragraph",
        text: "Si el podcast forma parte de tu estrategia comercial, no deberías elegir estudio solo por precio o disponibilidad. El entorno visual, la acústica, la luz, la comodidad del invitado y la posibilidad de sacar clips para redes afectan directamente a cómo se percibe el contenido y a cuánto partido le vas a sacar después.",
      },
      { type: "image", src: "/blog/grabar-podcast-madrid-estudio/hero.webp", alt: "Setup de podcast con micrófono profesional y auriculares en estudio", width: 1920, height: 1280, priority: true },
      { type: "heading", level: 2, text: "Qué debería tener un estudio para grabar podcast en Madrid" },
      {
        type: "list",
        items: [
          "Buen sonido sin tener que pelearte luego con una postproducción infinita.",
          "Un entorno visual que sume marca, no un fondo genérico sin alma.",
          "Luz natural o una iluminación que no deje el resultado plano.",
          "Espacio suficiente para invitado, equipo y formatos extra como reels o piezas horizontales.",
          "Flexibilidad para grabar varias piezas en una sola sesión.",
        ],
      },
      { type: "heading", level: 2, text: "Por qué importa tanto el contexto visual" },
      { type: "image", src: "/blog/grabar-podcast-madrid-estudio/mid.webp", alt: "Micrófono y auriculares para grabación de podcast en estudio profesional", width: 1920, height: 1280 },
      {
        type: "paragraph",
        text: "Un podcast no se consume ya solo como audio. Se corta en clips, se distribuye en redes, se convierte en contenido de autoridad y muchas veces es la primera impresión que alguien tiene de tu marca. Si grabas en un set que parece improvisado o demasiado frío, esa percepción baja aunque el mensaje sea bueno.",
      },
      {
        type: "paragraph",
        text: "Por eso en RCS encaja bien un formato de ático-estudio: se siente real, respira mejor en cámara y da una imagen más editorial. Profesional, sí, pero sin ese olor a plató genérico que mata naturalidad.",
      },
      { type: "heading", level: 2, text: "Cuándo compensa reservar un estudio en vez de grabar en oficina o casa" },
      {
        type: "list",
        items: [
          "Cuando quieres usar el podcast como activo comercial y no solo como experimento.",
          "Cuando vas a grabar varios episodios o clips en bloque.",
          "Cuando invitas clientes, socios o perfiles potentes y quieres cuidar la experiencia.",
          "Cuando necesitas que el contenido se vea premium desde el primer frame.",
        ],
      },
      { type: "heading", level: 2, text: "Cómo aprovechar una sesión de podcast para sacar más contenido" },
      {
        type: "paragraph",
        text: "Una buena sesión no debería acabar en un episodio largo y ya. Lo inteligente es salir con clips verticales, cortes temáticos, mini piezas de autoridad, fotos fijas y algún recurso horizontal para web o anuncios. Si eliges bien el espacio, una sola mañana puede darte contenido para semanas.",
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿RCS sirve solo para podcast o también para reels y entrevistas?",
        answer: "Sirve para ambos. La idea es que una misma sesión pueda darte podcast, clips, entrevistas y contenido de marca sin cambiar de lógica ni de espacio.",
      },
      {
        type: "faq",
        question: "¿Qué opciones de servicio hay?",
        answer: "Tres: Solo Grabación, Grabación + Edición y Producción Completa. Cuéntanos tu proyecto y te respondemos hoy sin compromiso.",
      },
      {
        type: "faq",
        question: "¿Tiene sentido para marca personal?",
        answer: "Muchísimo. Si trabajas tu autoridad o vendes servicios, un podcast bien grabado te coloca en otro nivel de percepción.",
      },
    ],
  },
  {
    slug: "como-preparar-sesion-grabacion-contenido-madrid",
    title: "Cómo preparar tu sesión de grabación de contenido en Madrid",
    description:
      "Guía práctica para llegar a tu sesión de grabación de contenido en Madrid con el plan claro, aprovechar cada hora y salir con el material que necesitas.",
    publishedAt: "2026-05-27",
    readingTime: "4 min",
    category: "Guía",
    tags: ["grabación contenido madrid", "sesión de grabación", "producción vídeo", "reels", "contenido de marca", "estudio madrid"],
    keyword: "como preparar sesion grabacion contenido madrid",
    intent: "informacional",
    excerpt:
      "Una guía práctica para llegar preparado a tu sesión de grabación de contenido en Madrid y sacar el máximo partido desde el primer minuto.",
    seoTitle: "Cómo preparar tu sesión de grabación de contenido | RCS Madrid",
    metaDescription: "Cómo preparar una sesión de grabación de contenido en Madrid: formatos, guión, equipo, errores comunes y todo lo que necesitas para no perder tiempo en el estudio.",
    heroKicker: "Blog / RCS",
    body: [
      {
        type: "paragraph",
        text: "Llegar a una sesión de grabación sin plan es la forma más cara de perder horas en el estudio. No porque el espacio falle, sino porque el tiempo corre desde que enciendes las cámaras. Si no tienes claro qué vas a grabar, en qué orden y con qué estructura, acabas improvisando, repitiendo tomas innecesarias y saliendo con menos material del que necesitabas. En el peor caso, con material que no puedes usar directamente.",
      },
      {
        type: "paragraph",
        text: "He visto pasar por RCS perfiles muy distintos: founders de startups, marcas de empresa, creators con millones de seguidores y equipos de marketing de compañías grandes. Los que sacan más partido a cada sesión no son necesariamente los que más presupuesto tienen, sino los que llegan con las ideas claras: saben qué quieren grabar, en qué formato y con qué criterio van a priorizar si el tiempo aprieta.",
      },
      { type: "image", src: "/blog/como-preparar-sesion-grabacion-contenido-madrid/hero.webp", alt: "Estudio de grabación con equipo premium para contenido profesional", width: 1920, height: 1280, priority: true },
      { type: "heading", level: 2, text: "Qué es una sesión de grabación de contenido y por qué importa prepararse" },
      {
        type: "paragraph",
        text: "Una sesión de grabación de contenido no es un rodaje tradicional. No hay actores, no hay guión de 40 páginas ni un equipo de producción de 15 personas. Es un bloque de horas en el que tú o tu equipo grabáis el material que luego se convierte en piezas reales: reels, clips para LinkedIn, episodios de podcast, una VSL para tu web o formación en vídeo. El objetivo al terminar es salir del estudio con todo lo que necesitas para semanas de publicación.",
      },
      {
        type: "paragraph",
        text: "Prepararse bien no significa rigidez ni controlarlo todo al milímetro. Significa saber cuántas piezas quieres sacar, en qué orden vas a grabarlas, qué ropa llevas, si necesitas teleprompter y cómo vas a gestionar la energía si vas a estar frente a cámara durante 3 o 4 horas seguidas. Todas esas decisiones se toman antes, no durante la sesión. Cuando estás en el estudio, tu único trabajo es grabar bien.",
      },
      { type: "heading", level: 2, text: "Cómo preparar tu sesión paso a paso" },
      { type: "heading", level: 3, text: "Define los formatos y las piezas que necesitas" },
      {
        type: "paragraph",
        text: "Lo primero es tener claro qué vas a grabar. ¿Solo reels verticales? ¿Reels y un episodio de podcast? ¿Piezas para ads en horizontal? Haz una lista real, no aspiracional. Si tienes 3 horas disponibles, puedes grabar de forma realista entre 10 y 15 clips cortos o 2-3 piezas largas, no las dos cosas a pleno rendimiento. Prioriza por impacto: las piezas más importantes, al principio, cuando la energía es mayor.",
      },
      { type: "heading", level: 3, text: "Prepara el guión o los puntos clave" },
      {
        type: "paragraph",
        text: "No hace falta que lo tengas todo memorizado ni que llegues con un guión cerrado. Pero sí que llegues con los puntos principales de cada pieza escritos. Un esquema con 3-5 bullets por clip basta para mantener el hilo sin parecer robot. Si vas a usar teleprompter, trae el texto listo antes de la sesión. Escribirlo en el estudio te cuesta el doble de tiempo y te rompe el ritmo.",
      },
      { type: "heading", level: 3, text: "Coordina el equipo y el espacio de antemano" },
      {
        type: "paragraph",
        text: "Si llevas invitado, coméntale de antemano cómo va a ir la sesión: duración, qué ropa es mejor para cámara (evitar rayas finas, estampados pequeños o colores muy saturados), si hay que traer algo preparado. Si vas solo, comparte el listado de piezas con el equipo del estudio antes para que puedan preparar el set según tu estética. En RCS hacemos una llamada breve de planificación previa a cada sesión para llegar con el plan cerrado y no perder tiempo en ajustes básicos.",
      },
      { type: "image", src: "/blog/como-preparar-sesion-grabacion-contenido-madrid/mid.webp", alt: "Trípode de cámara para producción de vídeo en estudio profesional", width: 1920, height: 1280 },
      { type: "heading", level: 2, text: "Errores comunes que cuestan tiempo y dinero" },
      {
        type: "list",
        items: [
          "Llegar sin lista de piezas ni orden de grabación definido.",
          "Intentar grabar demasiados formatos distintos en una sola sesión sin tiempo suficiente.",
          "Escribir o revisar el guión en el estudio en lugar de traerlo listo.",
          "No informar al invitado de qué ropa llevar o cómo va a funcionar la dinámica.",
          "Poner las piezas más complejas al final de la sesión, cuando la energía ya bajó.",
          "Salir sin revisar si tienes todo el material que necesitabas antes de desmontar el set.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántas piezas puedo grabar en una sesión de 3 horas?",
        answer: "Con buena preparación, entre 10 y 15 clips cortos o 2-3 piezas de formato largo. Si mezclas formatos, cuenta más tiempo para el cambio de set y los ajustes técnicos entre piezas.",
      },
      {
        type: "faq",
        question: "¿Necesito guión o puedo improvisar?",
        answer: "Puedes improvisar si tienes mucha práctica frente a cámara. Para el resto, mejor llegar con puntos clave escritos por pieza. No tiene que ser un guión cerrado, solo un hilo que te dé seguridad y mantenga el ritmo.",
      },
      {
        type: "faq",
        question: "¿RCS tiene teleprompter?",
        answer: "Sí. Si quieres usarlo, mándanos el texto antes de la sesión para tenerlo configurado desde el primer minuto.",
      },
      {
        type: "faq",
        question: "¿Puedo hablar con vosotros antes para organizar el plan?",
        answer: "Por supuesto. Hacemos una llamada de planificación previa con todos los clientes para llegar al estudio con el plan cerrado y no perder tiempo en ajustes que se podían resolver antes.",
      },
      {
        type: "paragraph",
        text: "Una sesión bien preparada es la diferencia entre salir con 15 clips que puedes publicar mañana y salir con dudas sobre si el material sirve. Si quieres hablar sobre cómo organizar la tuya o qué formatos tienen más sentido para tu proyecto, escríbenos en /#contacto. Te respondemos el mismo día.",
      },
    ],
  },
  {
    slug: "que-es-un-rooftop-studio-contenido-marca",
    title: "Qué es un rooftop studio y por qué mejora el contenido de marca",
    description:
      "Qué define a un rooftop studio, cómo cambia la imagen del contenido de marca y cuándo tiene sentido grabar desde un espacio en altura en Madrid.",
    publishedAt: "2026-05-28",
    readingTime: "5 min",
    category: "Guía",
    tags: ["rooftop studio", "contenido de marca", "estudio grabación Madrid", "grabación Madrid", "producción de contenido"],
    keyword: "rooftop studio contenido marca",
    intent: "informacional",
    excerpt:
      "Un rooftop studio combina luz natural, entorno urbano y equipo profesional. Así cambia el contenido que grabas desde el ático de Madrid.",
    seoTitle: "Qué es un rooftop studio de contenido | RCS Madrid",
    metaDescription:
      "Un rooftop studio transforma el contenido de marca: luz natural, vistas urbanas y equipo profesional desde el ático de Madrid.",
    heroKicker: "Blog / RCS",
    body: [
      {
        type: "paragraph",
        text: "Grabar en un rooftop studio cambia lo que ves cuando revisas las tomas. No es un argumento de venta ni una cuestión de marca: es algo concreto. Cuando el entorno tiene profundidad real, luz natural y vistas de la ciudad, el contenido gana un contexto visual que no se puede fabricar con focos y ciclorama. Eso se nota en pantalla desde el primer frame.",
      },
      {
        type: "paragraph",
        text: "En RCS trabajamos desde el séptimo piso de Ronda de Atocha 16, en el centro de Madrid. Grabamos podcasts, entrevistas, reels, VSLs y content days para founders, marcas y equipos de marketing. El ático no es un plus estético: es parte del motivo por el que el material que sale de aquí se ve distinto al de un estudio convencional.",
      },
      { type: "image", src: "/blog/que-es-un-rooftop-studio-contenido-marca/hero.webp", alt: "Terraza con vistas al skyline urbano desde un edificio de Madrid", width: 1920, height: 1280, priority: true },
      { type: "heading", level: 2, text: "Qué define a un rooftop studio" },
      {
        type: "paragraph",
        text: "Un rooftop studio es un espacio de grabación situado en planta alta de un edificio urbano, con acceso a luz natural y vistas exteriores. No es un plató con paredes negras y foam acústico. Es lo contrario: entorno real, luz del día trabajada con difusores y estores, y una ciudad visible al fondo que da contexto sin necesidad de decorados ni artificios.",
      },
      {
        type: "paragraph",
        text: "La diferencia respecto a un estudio convencional no es solo visual. La altura reduce el ruido de calle por encima de lo que se puede conseguir con tratamiento acústico en planta baja. Eso cambia el punto de partida técnico de cada grabación: menos ruido ambiente, menos tiempo de limpieza de audio en postproducción. La acústica mejora, la imagen tiene más profundidad natural y el espacio comunica algo por sí solo antes de que empiece a hablar nadie.",
      },
      { type: "heading", level: 2, text: "Cómo mejora el contenido de marca" },
      { type: "heading", level: 3, text: "El entorno como elemento narrativo" },
      {
        type: "paragraph",
        text: "Cuando grabas con el skyline de Madrid visible detrás, el espacio trabaja para ti sin que tengas que mencionarlo. Para marcas personales, founders y empresas que quieren posicionarse como referentes, ese contexto visual suma credibilidad sin decir una palabra. No es lo mismo transmitir desde una sala de reuniones genérica con pared blanca que desde un ático en el centro de Madrid. El espacio dice dónde estás y, por extensión, en qué nivel operas. Para contenido de autoridad en LinkedIn o YouTube, esa diferencia es relevante.",
      },
      { type: "heading", level: 3, text: "Luz natural que reduce el tiempo de postproducción" },
      {
        type: "paragraph",
        text: "La luz artificial mal gestionada crea problemas difíciles de corregir después: sombras duras en la cara, piel sobreexpuesta, colores que no representan bien la realidad. La luz natural, bien controlada con difusores y estores, da una imagen limpia desde el primer fotograma. En sesiones en RCS, el tiempo de corrección de color en postproducción se reduce porque la base ya es sólida. Para equipos que sacan contenido de forma recurrente, eso se traduce en ciclos de entrega más rápidos y menos vueltas sobre el material bruto.",
      },
      { type: "heading", level: 3, text: "El efecto de exclusividad en la percepción" },
      {
        type: "paragraph",
        text: "Un estudio en altura en pleno centro de una ciudad proyecta una percepción de exclusividad que un sótano o una oficina habilitada no transmiten. Ese detalle importa cuando el contenido va a representar a tu empresa frente a clientes potenciales, inversores o comunidad. La percepción de calidad del espacio se transfiere al contenido. Funciona igual que elegir dónde haces una reunión importante: el entorno forma parte del mensaje.",
      },
      { type: "image", src: "/blog/que-es-un-rooftop-studio-contenido-marca/mid.webp", alt: "Cámara en estabilizador durante sesión de grabación de contenido profesional", width: 1880, height: 1253 },
      { type: "heading", level: 2, text: "Cuándo tiene sentido grabar en un rooftop studio" },
      {
        type: "list",
        items: [
          "Cuando quieres que el espacio forme parte del mensaje de marca y no sea un fondo neutro.",
          "Cuando grabas contenido recurrente y necesitas una base visual coherente y reconocible.",
          "Cuando el contenido va a LinkedIn, YouTube o formatos largos donde el contexto visual es visible.",
          "Cuando invitas clientes o socios y el espacio también dice algo de tu empresa.",
          "Cuando el posicionamiento de la marca es premium y el entorno tiene que respaldarlo.",
          "Cuando grabas una jornada completa y necesitas luz que aguante toda la mañana sin fatiga visual.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿La luz natural es un problema si cambia durante la sesión?",
        answer: "No si el estudio está preparado. En RCS trabajamos con difusores, estores y luces de apoyo que permiten mantener una imagen consistente aunque cambie la hora o haya nubes. La luz natural es un recurso, no un inconveniente.",
      },
      {
        type: "faq",
        question: "¿Un rooftop studio tiene más ruido que un estudio en planta baja?",
        answer: "Al contrario. Estar en un séptimo piso elimina gran parte del ruido de calle: tráfico, obras, voces. El nivel de ruido ambiente es notablemente menor que en planta baja, y además se trabaja con tratamientos acústicos interiores para grabaciones de voz que exigen máxima limpieza de audio.",
      },
      {
        type: "faq",
        question: "¿Para qué formatos funciona mejor un rooftop studio?",
        answer: "Podcasts con vídeo, entrevistas de marca, VSLs, reels corporativos y content days. En general, para cualquier formato en el que el contexto visual forme parte del mensaje. Si el fondo no importa, cualquier sala sirve. Si importa, el rooftop suma.",
      },
      {
        type: "faq",
        question: "¿Puedo visitar el espacio antes de reservar?",
        answer: "Sí. Podemos hacer una visita previa para que veas el estudio, la luz a esa hora y el setup posible según tu tipo de contenido. Escríbenos desde /#contacto y lo coordinamos.",
      },
      {
        type: "paragraph",
        text: "Si quieres ver el espacio en persona o empezar a planificar una sesión, escríbenos desde /#contacto. En RCS trabajamos con marcas que saben que el entorno visual del contenido no es un detalle menor: es parte del mensaje.",
      },
    ],
  },
  {
    slug: "grabacion-reels-madrid-que-necesitas",
    title: "Grabación de reels en Madrid: qué necesitas para hacerlo bien",
    description:
      "Qué equipo, espacio e iluminación necesitas para grabar reels en Madrid con resultado profesional, sin improvisar y sin perder tiempo de sesión.",
    publishedAt: "2026-05-29",
    readingTime: "5 min",
    category: "Guía",
    tags: ["grabación reels madrid", "reels empresa", "vídeo vertical", "contenido redes", "producción reels", "estudio madrid"],
    keyword: "grabacion reels madrid",
    intent: "informacional",
    excerpt:
      "Qué equipo, espacio y plan necesitas para grabar reels en Madrid con resultado profesional, sin improvisar y sin perder tiempo en el estudio.",
    seoTitle: "Grabación de reels en Madrid: qué necesitas | RCS Madrid",
    metaDescription:
      "Grabación de reels en Madrid: qué equipo, espacio e iluminación necesitas para conseguir vídeo vertical profesional sin perder tiempo en el estudio.",
    heroKicker: "Blog / RCS",
    body: [
      {
        type: "paragraph",
        text: "Grabar reels en Madrid es fácil. Conseguir que queden bien ya es otra historia. El formato vertical lleva años siendo el de mayor alcance orgánico en redes, y eso ha hecho que todo el mundo quiera producirlos. El problema es que la mayoría se ve de forma inmediata si tienen o no calidad visual y de audio. No hay lugar donde esconderse en 30 o 60 segundos.",
      },
      {
        type: "paragraph",
        text: "En RCS lo vemos en cada sesión: hay perfiles que llegan con el iPhone y un guión claro y sacan piezas que funcionan perfectamente bien. Y otros que traen equipo caro y salen con material que no sirve porque el espacio estaba mal planteado, la luz no acompañaba o el audio tiene demasiado ruido ambiente. El equipo importa, sí, pero no es lo primero. Lo primero es el contexto en el que grabas.",
      },
      {
        type: "image",
        src: "/blog/grabacion-reels-madrid-que-necesitas/hero.webp",
        alt: "Cámara de cine profesional en set de producción para grabación de contenido",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué necesitas realmente para grabar reels en un estudio" },
      {
        type: "paragraph",
        text: "Un reel bien producido no requiere una cámara de cine ni un equipo de diez personas. Requiere tres cosas en orden: buen espacio, buena luz y audio limpio. Si tienes esas tres, puedes grabar con una Sony ZV-E10, con una mirrorless de gama media o con un móvil bien configurado y el resultado va a quedar bien. Si no tienes las tres, da igual cuánto cueste la cámara.",
      },
      {
        type: "paragraph",
        text: "El espacio condiciona todo lo demás. Un fondo con profundidad, texturas reales o entorno urbano da contexto visual sin que tengas que añadir recursos de edición. Un fondo plano o con desorden visible es un problema que no se puede corregir en postproducción sin que se note. Por eso en RCS el ático tiene distintas opciones de fondo según el tipo de reel: fondo neutro, zona con luz natural, vista de Madrid o setup interior más editorial. No tienes que adaptar tu contenido al espacio: el espacio se adapta a lo que necesitas.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "La cámara y el encuadre vertical" },
      {
        type: "paragraph",
        text: "Para vídeo vertical en estudio, casi cualquier cámara mirrorless reciente o un smartphone con buena estabilización funciona. Lo que sí marca diferencia es el objetivo: una focal fija entre 24mm y 50mm equivalente da una imagen más limpia y con menos distorsión que los objetivos zoom kit. Si grabas con móvil, activa el grid para centrar bien el encuadre y graba en el modo de mayor calidad disponible, nunca con zoom digital. Lo que hay que evitar es grabar en resolución inferior a 1080p o usar el modo automático sin revisar la exposición de fondo antes de empezar.",
      },
      { type: "heading", level: 3, text: "La iluminación: lo que más impacta en el resultado final" },
      {
        type: "paragraph",
        text: "La luz es el elemento que más diferencia hay entre un reel amateur y uno profesional, y el más fácil de subestimar. Una fuente de luz principal bien posicionada, ligeramente elevada y a unos 45 grados del sujeto da un resultado limpio y con volumen en la cara. Si añades un relleno suave o usas la luz natural de una ventana como fill, el resultado mejora sin añadir complejidad al setup. Lo que hay que evitar: luz cenital directa (aplana el rostro), ventana brillante directamente detrás del sujeto sin compensar la exposición y tubos fluorescentes fríos sin ningún control de dirección.",
      },
      { type: "heading", level: 3, text: "El audio: el elemento más ignorado y más crítico" },
      {
        type: "paragraph",
        text: "La mayoría de los reels mal valorados fallan por el audio, no por la imagen. Un micrófono de solapa, un inalámbrico tipo Rode Wireless GO II o un micrófono de cañón bien situado dan un resultado radicalmente mejor que el micrófono integrado de cualquier cámara o móvil. Si no tienes micro externo disponible, graba al menos en un espacio con poco eco: alfombras, sofás y paredes con textura absorben mucho mejor que una sala vacía con paredes lisas. El eco no se elimina bien en postproducción; es mucho más eficiente no generarlo.",
      },
      {
        type: "image",
        src: "/blog/grabacion-reels-madrid-que-necesitas/mid.webp",
        alt: "Sesión de grabación de vídeo en estudio con setup de iluminación profesional",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al grabar reels en estudio" },
      {
        type: "list",
        items: [
          "Grabar en horizontal y cortar verticalmente después: pierdes resolución y el encuadre queda mal en casi todos los casos.",
          "No controlar la luz de fondo: si hay una ventana brillante detrás, la cámara expone para el fondo y el sujeto queda oscuro.",
          "Audio del propio dispositivo en espacios con eco: se nota desde el primer segundo y corta la retención del vídeo.",
          "No hacer una toma de prueba antes de grabar toda la secuencia: 2 minutos de revisión ahorran muchas repeticiones.",
          "Cambiar de set o de iluminación entre clips de la misma sesión sin documentar: la coherencia visual entre piezas de una misma serie importa.",
          "Llevar ropa con patrones finos o estampados pequeños: generan efecto moiré en cámara y quedan mal en pantalla.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Con qué cámara es mejor grabar reels en estudio?",
        answer: "Con la que tengas, siempre que grabe en al menos 1080p y puedas añadir audio externo. Una Sony ZV-E10, una Fujifilm X-S10 o un iPhone 15 son más que suficientes si el espacio, la luz y el audio están bien resueltos. La cámara rara vez es el cuello de botella.",
      },
      {
        type: "faq",
        question: "¿Cuántos reels puedo grabar en una sesión de 3 horas?",
        answer: "Con buena preparación previa, entre 12 y 18 clips cortos de 30-60 segundos. Si los reels son más guionizados o requieren cambio de set, el número baja. La clave es llegar con los puntos clave de cada pieza ya preparados, no escribirlos en el estudio.",
      },
      {
        type: "faq",
        question: "¿Necesito guión cerrado para grabar reels?",
        answer: "No. Basta con 3-5 puntos clave por pieza. Los reels más naturales suelen ser los que tienen estructura pero no están leídos palabra por palabra. Si prefieres teleprompter, en RCS lo tenemos disponible: mándanos el texto antes de la sesión y lo tenemos configurado desde el primer minuto.",
      },
      {
        type: "faq",
        question: "¿RCS tiene equipo de grabación incluido o tengo que traer el mío?",
        answer: "Tenemos cámaras, micrófonos, iluminación y teleprompter disponibles. Si tienes tu propio equipo y quieres usarlo, también funciona. Lo importante es que llegues con el contenido planificado: el equipo técnico se adapta a lo que necesitas.",
      },
      {
        type: "paragraph",
        text: "Si quieres organizar una sesión para grabar reels, clips para LinkedIn o cualquier formato vertical con resultado profesional, escríbenos desde /#contacto. Te respondemos el mismo día y podemos hacer una visita previa si quieres ver el espacio antes de reservar.",
      },
    ],
  },
  {
    slug: "podcast-con-video-contexto-visual-audio",
    title: "Podcast con vídeo: por qué el contexto visual importa tanto como el audio",
    description:
      "Por qué grabar un podcast con vídeo cambia cómo se percibe tu marca, qué importa del contexto visual y cómo grabarlo bien desde el principio.",
    publishedAt: "2026-06-01",
    readingTime: "4 min",
    category: "Guía",
    tags: ["podcast con vídeo", "producción de contenido", "grabación podcast", "contenido visual", "estudio madrid", "marca personal"],
    keyword: "podcast con video contexto visual",
    intent: "informacional",
    excerpt:
      "Grabar audio limpio es el mínimo. Lo que ves mientras escuchas cambia cómo percibes el mensaje. Así transforma el vídeo un podcast.",
    seoTitle: "Podcast con vídeo: el contexto visual importa | RCS Madrid",
    metaDescription:
      "Podcast con vídeo: por qué el contexto visual define cómo se percibe tu marca y cómo grabarlo bien desde el principio en un estudio profesional.",
    heroKicker: "Blog / RCS",
    body: [
      {
        type: "paragraph",
        text: "Durante años, el podcast fue formato de audio. Pero el consumo ha cambiado: la mayoría de los oyentes ven los episodios en YouTube, LinkedIn o Instagram con los ojos abiertos. Si grabas solo audio en 2026 y publicas una imagen estática sobre el sonido, estás dejando sobre la mesa gran parte del impacto posible.",
      },
      {
        type: "paragraph",
        text: "El contexto visual no es un extra ni un capricho estético. Es parte del mensaje. Lo que ve tu audiencia mientras te escucha determina cómo percibe tu credibilidad, tu energía y la seriedad de lo que estás contando. Aquí te explico por qué el vídeo transforma un podcast y cómo grabarlo bien desde el principio.",
      },
      {
        type: "image",
        src: "/blog/podcast-con-video-contexto-visual-audio/hero.webp",
        alt: "Micrófono de condensador en estudio de grabación profesional",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Por qué el vídeo transforma un podcast" },
      {
        type: "paragraph",
        text: "El audio define lo que se dice. El vídeo define quién lo dice y desde dónde. Un mismo mensaje grabado en una habitación con luz de techo sin control y otro grabado en un estudio con tratamiento visible, fondos bien resueltos y luz natural produce percepciones radicalmente distintas. No es estética vacía: es señal de autoridad.",
      },
      {
        type: "paragraph",
        text: "Los podcasts con vídeo en YouTube retienen mejor a la audiencia, se comparten con más facilidad en redes y permiten generar clips directamente desde la grabación. Una sesión de dos horas puede producir entre 15 y 20 cortes de 30-90 segundos listos para Instagram Reels, LinkedIn o YouTube Shorts sin grabar nada por separado.",
      },
      {
        type: "paragraph",
        text: "Grabar con cámara también obliga a ser más consciente del lenguaje corporal, el ritmo y la presencia en pantalla. Muchos podcasters que pasan del audio al vídeo notan que mejoran también la calidad del audio, porque la preparación se vuelve más exigente desde que hay algo visible que juzgar.",
      },
      { type: "heading", level: 2, text: "Cómo grabarlo bien" },
      { type: "heading", level: 3, text: "El espacio habla antes que tú" },
      {
        type: "paragraph",
        text: "El primer plano que ve tu audiencia es el fondo. Un estudio con tratamiento acústico visible, luz diseñada y elementos de contexto no solo suena bien: comunica que te lo has tomado en serio antes de decir nada. En RCS grabamos en un ático en Madrid centro con luz natural controlada y distintas opciones de fondo según el tipo de contenido que necesites.",
      },
      { type: "heading", level: 3, text: "Cámara y encuadre" },
      {
        type: "paragraph",
        text: "No necesitas el equipo más caro, pero sí un encuadre correcto: regla de tercios básica, cámara a la altura de los ojos, espacio de cabeza justo y separación del fondo. Si grabas con invitado, dos cámaras permiten montar una conversación real sin planos estáticos ni cortes forzados. En RCS usamos Sony A7 con objetivos que dan la separación de fondo que el formato pide.",
      },
      { type: "heading", level: 3, text: "Audio y vídeo sincronizados desde el inicio" },
      {
        type: "paragraph",
        text: "El error más frecuente es tener buena cámara y mal micrófono. El audio tiene que resolverse con la misma atención que la imagen: un micrófono de condensador o dinámico delante de cada hablante, bien posicionado y con ganancia controlada. Si uno va mal, todo va mal, y no hay corrección en postproducción que lo salve del todo. En una sesión bien montada, resolver el audio no añade complejidad: simplemente se hace antes de empezar.",
      },
      {
        type: "image",
        src: "/blog/podcast-con-video-contexto-visual-audio/mid.webp",
        alt: "Micrófono sobre soporte en estudio de grabación profesional",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes al añadir vídeo a un podcast" },
      {
        type: "list",
        items: [
          "Encuadre demasiado abierto: la cara queda pequeña y el espacio vacío distrae.",
          "Luz de techo sin difusores: crea sombras duras bajo los ojos que dan sensación de cansancio.",
          "Audio grabado con el micrófono de la cámara: suena a llamada de teléfono, no a podcast profesional.",
          "Fondo desordenado o genérico: rompe la percepción de profesionalidad antes de que empieces a hablar.",
          "Grabación sin multicámara: el resultado de edición es estático y acaba cansando al espectador.",
          "No dejar 5 minutos de calentamiento: los primeros minutos suelen ser descartables y no deberían salir en el episodio.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Necesito una cámara específica para grabar un podcast con vídeo?",
        answer: "No es lo más importante. Una Sony A7, una Fujifilm X-T o incluso un móvil reciente bien configurado da resultados más que suficientes. Lo que más impacta en la imagen final es la luz y el espacio, no el cuerpo de la cámara.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo tarda en montarse una sesión de podcast con vídeo?",
        answer: "Si el espacio está preparado de antemano, montar un podcast para dos personas lleva unos 20-30 minutos. La grabación puede durar entre 45 minutos y 2 horas según el formato y el número de clips que quieras sacar.",
      },
      {
        type: "faq",
        question: "¿Se pueden sacar clips para redes directamente de la sesión de podcast?",
        answer: "Sí. Es una de las ventajas más concretas de grabar con vídeo. De una hora de grabación bien planificada puedes sacar entre 10 y 20 cortes de 30-90 segundos listos para LinkedIn, Instagram o YouTube Shorts sin grabarlos por separado.",
      },
      {
        type: "faq",
        question: "¿Hace falta guión para un podcast grabado con vídeo?",
        answer: "Depende del formato. Para entrevistas, un guión de preguntas bien preparado es suficiente. Para formatos de solo voz o exposición directa, un esquema o teleprompter ayuda a mantener el ritmo y reducir el tiempo de edición. En RCS tenemos teleprompter disponible.",
      },
      {
        type: "paragraph",
        text: "Si estás pensando en añadir vídeo a tu podcast o quieres grabar el próximo episodio con un resultado profesional desde el primer frame, en RCS podemos organizarlo. Escríbenos desde /#contacto y te cuento cómo funciona una sesión.",
      },
    ],
  },
  {
    slug: "como-grabar-contenido-semanas-en-una-manana",
    title: "Cómo grabar contenido para semanas en una sola mañana",
    description:
      "Cómo organizar una sesión de batch recording para producir contenido para semanas en unas pocas horas, sin improvisar y con un plan que funciona.",
    publishedAt: "2026-06-02",
    readingTime: "4 min",
    category: "Guía",
    tags: ["batch recording", "content day", "grabación contenido", "productividad", "estudio madrid", "contenido recurrente"],
    keyword: "grabar contenido semanas una manana",
    intent: "informacional",
    excerpt:
      "Una sola mañana en el estudio puede dar contenido para semanas. Así funciona el batch recording y cómo planificarlo para que salga bien.",
    seoTitle: "Grabar contenido para semanas en una mañana | RCS Madrid",
    metaDescription:
      "Grabar contenido para semanas en una sola mañana es posible con buena planificación. Así funciona el batch recording y cómo hacerlo bien en estudio.",
    heroKicker: "Blog / RCS",
    body: [
      {
        type: "paragraph",
        text: "Si produces contenido para tu marca o empresa, publicar de forma constante es el reto que nunca desaparece. Pero hay un error de base que complica todo: grabar pieza por pieza, sesión por sesión, sin aprovechar que preparar el espacio, el equipo y la energía mental tiene un coste fijo que no escala linealmente. Entras al estudio por un reel y acabas agotado después de 90 minutos con una sola pieza. Eso no es producción eficiente.",
      },
      {
        type: "paragraph",
        text: "El batch recording —grabar todo el contenido de semanas en un solo bloque— cambia la ecuación. No requiere más presupuesto ni un equipo mayor. Requiere un cambio de mentalidad y un plan claro antes de llegar al estudio. En RCS lo vemos funcionar en casi todas las sesiones: quien llega con lista de piezas sale con material para semanas. Quien improvisa, graba uno o dos clips y pierde el día.",
      },
      { type: "image", src: "/blog/como-grabar-contenido-semanas-en-una-manana/hero.webp", alt: "Estudio de grabación con equipo profesional preparado para sesión de contenido en bloque", width: 1920, height: 1280, priority: true },
      { type: "heading", level: 2, text: "Qué es el batch recording y por qué funciona" },
      {
        type: "paragraph",
        text: "El batch recording es el proceso de grabar todo el contenido de un período —una semana, dos semanas, un mes— en una sola sesión de estudio. El principio es el mismo que cocinar en grandes cantidades: el coste de preparación es prácticamente el mismo para 2 platos que para 10, pero la eficiencia se dispara. Aplicado al contenido, una mañana bien planificada puede producir 15-20 clips, 2 episodios de podcast o una VSL completa más los cortes para redes.",
      },
      {
        type: "paragraph",
        text: "La constancia es el activo de contenido más difícil de mantener y también el que más resultados acumula con el tiempo. El batch recording lo hace sostenible: no tienes que entrar al estudio cada semana con toda la energía y preparación que eso requiere. Grabas en bloque, sales con material para semanas y el ritmo de publicación no depende de tu estado de ánimo del martes por la tarde.",
      },
      {
        type: "paragraph",
        text: "Este formato no es exclusivo de grandes marcas con equipos de producción. En RCS lo usan founders que graban solos, marcas personales que quieren mantener presencia en LinkedIn sin consumir su semana y equipos de marketing con un único día de estudio al mes. El punto de partida siempre es el mismo: lista de piezas, orden de grabación y setup listo antes de empezar.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "Planifica las piezas antes de entrar al estudio" },
      {
        type: "paragraph",
        text: "El error que más tiempo cuesta en una sesión de batch recording es empezar a decidir qué grabar cuando ya estás en el estudio. La planificación es trabajo previo, no de estudio. Antes de llegar, ten una lista con las piezas que necesitas: tema, formato —reel, clip largo, episodio de podcast—, duración aproximada y puntos clave de cada una. No hace falta un guión cerrado para cada pieza, pero sí saber exactamente qué vas a decir y en qué orden vas a grabar. Si usas teleprompter, manda el texto con antelación.",
      },
      { type: "heading", level: 3, text: "Agrupa por formato, no por tema" },
      {
        type: "paragraph",
        text: "Cuando planificas el orden de grabación, el criterio más eficiente no es el temático sino el técnico: primero todos los reels verticales, luego los clips horizontales, luego el podcast. Cambiar de formato implica ajustar el encuadre, reposicionar el micrófono y revisar la iluminación. Si agrupas por formato reduces a la mitad las interrupciones técnicas. Dentro de cada bloque, las piezas más complejas o que más energía requieren van al inicio de la sesión, cuando la concentración es mayor.",
      },
      { type: "heading", level: 3, text: "El flujo en RCS: de lista a clips entregados" },
      {
        type: "paragraph",
        text: "En una sesión de batch recording en RCS el flujo habitual es: 15 minutos de setup y repaso de la lista con el equipo, bloque de grabación por formato con tomas organizadas, revisión rápida del material bruto al cerrar la sesión para confirmar que está todo. Con Grabación + Edición, recibes los clips editados en 24-48 horas. Con Producción Completa, incluimos también la estrategia de distribución: qué publicar, cuándo y en qué canal para sacar el máximo de cada pieza.",
      },
      { type: "image", src: "/blog/como-grabar-contenido-semanas-en-una-manana/mid.webp", alt: "Monitor de producción en sesión de grabación de contenido profesional en estudio", width: 1920, height: 1280 },
      { type: "heading", level: 2, text: "Errores que frenan el batch recording" },
      {
        type: "list",
        items: [
          "Llegar sin lista de piezas cerrada: improvisar en el estudio cuesta tiempo y produce contenido más débil.",
          "Mezclar demasiados formatos sin priorizar: los cambios de set continuos dispersan la energía y alargan los tiempos muertos.",
          "Poner las piezas más difíciles al final: pasadas 2 horas la concentración baja; lo más exigente va siempre al inicio.",
          "No revisar el material bruto antes de desmontar el set: descubrir un problema cuando el setup ya está recogido obliga a volver al estudio.",
          "Planificar sin margen: si listas 18 piezas para 3 horas y una se complica, el resto sufre. Deja siempre un 20% de holgura.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántas piezas puedo grabar en una sesión de 3 horas?",
        answer: "Con buena planificación previa, entre 12 y 18 clips cortos de 30-60 segundos, o 2-3 piezas de formato largo. Si mezclas formatos distintos, añade tiempo de transición entre bloques. La clave está en llegar con la lista cerrada: decidir qué grabar en el estudio consume tiempo que deberías dedicar a grabar.",
      },
      {
        type: "faq",
        question: "¿Tengo que llevar el guión escrito para cada pieza?",
        answer: "No hace falta guión cerrado. Con 3-5 puntos clave por pieza es suficiente para mantener el hilo sin perder naturalidad. Si prefieres teleprompter, mándanos el texto antes de la sesión y lo tenemos configurado desde el primer minuto.",
      },
      {
        type: "faq",
        question: "¿Puedo grabar contenido para semanas si nunca lo he hecho en bloque?",
        answer: "Sí, y es más fácil de lo que parece si llegas preparado. El mayor salto lo dan quienes ya han grabado alguna sesión sin plan y entienden lo que cuesta improvisar. En RCS hacemos una llamada de preparación previa con todos los clientes para llegar con el plan cerrado y sin sorpresas.",
      },
      {
        type: "faq",
        question: "¿Qué diferencia hay entre Solo Grabación y Grabación + Edición para una sesión de batch?",
        answer: "Con Solo Grabación sales con los brutos organizados por pieza. Con Grabación + Edición recibes los clips editados listos para publicar en 24-48 horas. Si el volumen de piezas es alto, la edición integrada ahorra tiempo todavía más.",
      },
      {
        type: "paragraph",
        text: "Grabar contenido para semanas en una mañana no es un truco de productividad. Es la diferencia entre publicar de forma constante y publicar cuando hay tiempo. Si quieres organizarlo bien desde el principio, escríbenos desde /#contacto. Te cuento cómo funcionaría una sesión de batch recording según tu tipo de contenido y lo que quieres conseguir.",
      },
    ],
  },
  {
    slug: "estudio-grabacion-vs-grabar-en-oficina",
    title: "Estudio de grabación vs grabar en oficina: diferencias reales",
    description:
      "Qué diferencias hay entre grabar en un estudio profesional y hacerlo en una oficina: imagen, audio, eficiencia y cuándo tiene sentido cada opción.",
    publishedAt: "2026-06-03",
    readingTime: "5 min",
    category: "Guía",
    tags: ["estudio de grabación", "grabar en oficina", "calidad de audio", "producción de vídeo", "contenido profesional", "Madrid"],
    keyword: "estudio de grabacion vs grabar en oficina",
    intent: "informacional",
    excerpt:
      "Entre grabar en oficina y hacerlo en un estudio hay diferencias reales en imagen, audio y eficiencia. Guía para saber qué tiene sentido según tu tipo de contenido.",
    seoTitle: "Grabar en estudio vs oficina: diferencias reales | RCS Madrid",
    metaDescription:
      "Estudio de grabación vs grabar en oficina: diferencias reales en imagen, audio y eficiencia. Guía práctica para saber cuándo compensa cada opción.",
    heroKicker: "Blog / RCS",
    body: [
      {
        type: "paragraph",
        text: "Hay una pregunta que llega con frecuencia antes de reservar la primera sesión: ¿vale la pena grabar en un estudio o puedo conseguir un buen resultado en la oficina? La respuesta no es universal. Depende del tipo de contenido que produces, del nivel de calidad que necesitas y del tiempo que puedes dedicar a resolver el espacio antes de ponerte delante de la cámara.",
      },
      {
        type: "paragraph",
        text: "En RCS hemos grabado con founders que llegaron después de meses intentándolo en su despacho y con otros que vinieron directamente desde el primer clip. El patrón que se repite en los primeros es siempre el mismo: el espacio les limitaba, aunque no sabían bien cómo explicarlo. Te cuento cuáles son esas diferencias y cuándo importan de verdad.",
      },
      { type: "image", src: "/blog/estudio-grabacion-vs-grabar-en-oficina/hero.webp", alt: "Estudio de grabación profesional con equipo de audio y vídeo configurado", width: 1920, height: 1280, priority: true },
      { type: "heading", level: 2, text: "Qué diferencia real hay entre grabar en oficina y en un estudio" },
      {
        type: "paragraph",
        text: "La diferencia más obvia es el control del entorno. En un estudio, el espacio está pensado para grabar: la acústica, la iluminación, el fondo y el equipo técnico están diseñados para que el resultado sea bueno con menos esfuerzo. En una oficina, estás peleando contra el entorno desde el primer segundo: ruido de aire acondicionado, luz de techo fría sin control de dirección, fondo con cables o monitores visibles, eco en paredes de cristal o pladur.",
      },
      {
        type: "paragraph",
        text: "Pero hay una diferencia menos evidente que acaba siendo igual de importante: el tiempo que tardas en conseguir un resultado aceptable. En la oficina, entre el 30 y el 40 por ciento del tiempo de grabación se va en ajustes, repeticiones por ruido de fondo y revisión de material que no sirve. En un estudio con todo preparado de antemano, ese tiempo desaparece casi por completo. No es solo una cuestión de calidad técnica, sino de eficiencia real.",
      },
      { type: "heading", level: 2, text: "Cómo afecta cada espacio al resultado" },
      { type: "heading", level: 3, text: "Imagen y entorno visual" },
      {
        type: "paragraph",
        text: "La imagen que proyectas depende en gran medida del contexto visual que hay detrás. Una oficina con fondo genérico, pizarras de sala de reuniones o paneles con logos corporativos da una percepción muy diferente a un estudio con fondo trabajado, luz natural controlada y profundidad real detrás del sujeto. No es que la oficina sea imposible de usar, pero requiere trabajo activo para mejorar el fondo: telas, paneles de color, reorganización del mobiliario. Ese trabajo es difícil de mantener constante si la sesión dura varias horas o si el espacio lo comparten más personas. En el estudio el fondo ya está resuelto antes de que llegues.",
      },
      { type: "heading", level: 3, text: "Audio: el problema que la oficina no puede resolver sola" },
      {
        type: "paragraph",
        text: "El audio es donde la oficina pierde más terreno. Los espacios de trabajo tienen ruido de fondo constante: climatización, conversaciones de otros despachos, teclados, impresoras, tráfico de calle. Y la acústica suele ser mala: paredes lisas, suelos duros y techos altos generan eco y reverberación que suenan fatal en grabación de voz. Puedes mejorar algo con un micrófono de calidad bien posicionado y cerrando puertas. Pero el techo de calidad que puedes alcanzar en una oficina sin tratamiento acústico específico es sustancialmente inferior al de un estudio preparado. En producción de podcast, entrevistas o contenido de autoridad para LinkedIn o YouTube, esa diferencia se nota desde el primer segundo.",
      },
      { type: "heading", level: 3, text: "Eficiencia y aprovechamiento del tiempo" },
      {
        type: "paragraph",
        text: "Grabar en tu oficina parece más cómodo porque no requiere desplazamiento. Pero hay un coste oculto en la preparación: reorganizar el espacio, conseguir que no haya interrupciones durante la grabación, resolver la iluminación, coordinar con el equipo que nadie entre y luego volver a dejarlo todo como estaba tiene un tiempo real que no aparece en ninguna factura. Si produces contenido de forma recurrente, ese tiempo suma. Una sesión de 3 horas en un estudio bien montado puede producir más material y de mayor calidad que un día entero de grabación fragmentada en oficina.",
      },
      { type: "image", src: "/blog/estudio-grabacion-vs-grabar-en-oficina/mid.webp", alt: "Setup de grabación con micrófono y equipo de audio en espacio de trabajo", width: 1920, height: 1280 },
      { type: "heading", level: 2, text: "Cuándo tiene sentido cada opción" },
      {
        type: "list",
        items: [
          "Oficina: cuando el contenido es interno, la audiencia ya te sigue y la producción es secundaria respecto al mensaje.",
          "Oficina: cuando grabas de forma puntual y el presupuesto no da para más en este momento.",
          "Estudio: cuando el contenido va a ser la primera impresión de alguien con tu marca.",
          "Estudio: cuando grabas podcast, entrevistas o formatos donde el audio limpio no es negociable.",
          "Estudio: cuando haces batch recording y necesitas grabar varias piezas en bloque con coherencia visual entre ellas.",
          "Estudio: cuando invitas clientes, socios o colaboradores y el espacio forma parte del mensaje que quieres transmitir.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Se puede grabar contenido profesional en una oficina?",
        answer: "Sí, con condiciones. Si el audio es limpio, el fondo está resuelto y la iluminación es correcta, puedes conseguir un resultado aceptable. Pero el esfuerzo para llegar a ese punto suele ser mayor que reservar un estudio preparado para ello, especialmente si grabas de forma recurrente.",
      },
      {
        type: "faq",
        question: "¿Por qué el audio grabado en oficina suena peor?",
        answer: "El problema principal es el ruido de fondo y el eco. La climatización, las voces de otros despachos, el tráfico y la reverberación en paredes lisas se captan en el micrófono y degradan la percepción del audio. Un buen micrófono mejora, pero no elimina el problema si la acústica del espacio no está tratada.",
      },
      {
        type: "faq",
        question: "¿Vale la pena el desplazamiento al estudio si grabo poco contenido?",
        answer: "Depende del formato. Si grabas una sola pieza al mes de baja exigencia técnica, quizás no. Pero si haces batch recording —varios clips, un episodio de podcast más cortes para redes— el resultado mejora tanto que el desplazamiento queda absorbido por la diferencia de calidad y el tiempo ahorrado en preparación.",
      },
      {
        type: "faq",
        question: "¿Puedo visitar RCS antes de reservar para ver si el espacio encaja?",
        answer: "Sí. Podemos hacer una visita previa para que veas el estudio, la luz a esa hora y las opciones de set según tu tipo de contenido. Escríbenos desde /#contacto y lo coordinamos.",
      },
      {
        type: "paragraph",
        text: "Si estás en el punto en que la oficina ya no da más de sí pero no tienes claro si el salto a estudio tiene sentido para tu caso, escríbenos desde /#contacto. En RCS lo miramos juntos y te contamos, sin compromiso, qué opciones encajan mejor con el tipo de contenido que quieres producir.",
      },
    ],
  },
  {
    slug: "contenido-autoridad-linkedin-formatos-madrid",
    title: "Contenido de autoridad para LinkedIn: qué formatos funcionan en Madrid",
    description:
      "Qué formatos de vídeo construyen autoridad real en LinkedIn, cómo producirlos bien y por qué el contexto de grabación cambia el resultado.",
    publishedAt: "2026-06-04",
    readingTime: "5 min",
    category: "Guía",
    tags: ["linkedin contenido", "contenido de autoridad", "vídeo linkedin", "content day", "marca personal", "estudio madrid"],
    keyword: "contenido autoridad linkedin formatos madrid",
    intent: "informacional",
    excerpt:
      "Si publicas en LinkedIn para posicionar tu marca, el formato y el contexto de grabación cambian el resultado. Guía sobre qué funciona y por qué.",
    seoTitle: "Contenido de autoridad para LinkedIn: formatos | RCS Madrid",
    metaDescription:
      "Contenido de autoridad para LinkedIn: qué formatos de vídeo funcionan en Madrid, cómo producirlos bien y cómo grabarlo con un contexto que refuerza tu marca.",
    heroKicker: "Blog / RCS",
    body: [
      {
        type: "paragraph",
        text: "LinkedIn ha pasado de ser un currículum online a convertirse en la plataforma donde se construyen marcas personales serias en el mundo B2B. El problema es que publicar no es suficiente. Publicar con regularidad y con contenido que haga que alguien confíe más en ti después de verlo, eso es lo que marca la diferencia entre presencia y autoridad.",
      },
      {
        type: "paragraph",
        text: "El vídeo en LinkedIn sigue siendo la categoría menos saturada en comparación con texto o carruseles. Quien lo hace bien tiene más impacto por pieza publicada. La pregunta relevante no es si hacer vídeo, sino qué formatos funcionan de verdad y cómo producirlos con un contexto visual que refuerce lo que estás diciendo.",
      },
      {
        type: "image",
        src: "/blog/contenido-autoridad-linkedin-formatos-madrid/hero.webp",
        alt: "Creadora de contenido grabando vídeo para redes sociales con iluminación profesional",
        width: 1880,
        height: 1253,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es el contenido de autoridad en LinkedIn y por qué importa" },
      {
        type: "paragraph",
        text: "Contenido de autoridad no es lo mismo que contenido de visibilidad. Un post viral puede traer alcance sin construir nada concreto en la percepción de quien lo ve. El contenido de autoridad deja una impresión: cuando alguien termina de ver tu vídeo, sabe más sobre el tema, entiende tu punto de vista y tiene un criterio más claro sobre si quiere trabajar contigo. Ese es el objetivo real.",
      },
      {
        type: "paragraph",
        text: "En LinkedIn, el contenido de autoridad suele tomar tres formas: el take —un punto de vista concreto sobre algo del sector—, el explicativo —cómo hacer algo, por qué funciona de cierta manera— y el análisis de caso real con datos y contexto. Los tres formatos funcionan mejor en vídeo que en texto, porque el vídeo añade la capa de quién eres, cómo piensas y cómo comunicas.",
      },
      { type: "heading", level: 2, text: "Cómo se hace bien" },
      { type: "heading", level: 3, text: "El vídeo nativo en feed: el take y el explicativo" },
      {
        type: "paragraph",
        text: "El formato más eficiente para construir autoridad en LinkedIn es el vídeo nativo: clips de 60 a 90 segundos subidos directamente a la plataforma sin enlace externo. El algoritmo favorece el contenido nativo, y el vídeo publicado de esta forma tiene más retención inicial que el redirigido a YouTube. La pieza que mejor funciona es el take corto —un punto de vista en 3-4 frases bien construidas— o el explicativo rápido: un problema concreto del sector, una causa que la mayoría no identifica y un ángulo de solución. Todo en menos de 90 segundos. Para que funcione, el encuadre tiene que ser limpio, el audio tiene que ser claro y el fondo tiene que sumar, no contradecir lo que estás contando.",
      },
      { type: "heading", level: 3, text: "El clip de podcast o entrevista: autoridad con contexto" },
      {
        type: "paragraph",
        text: "Si ya grabas podcast o entrevistas, LinkedIn es el canal donde los cortes de 60-90 segundos tienen más impacto en términos de autoridad percibida. Un clip bien extraído de una conversación real —con un insight concreto, editado sin florituras y subtitulado— funciona porque transmite algo que el vídeo hablando a cámara no transmite igual: que hay una conversación real detrás, que el tema interesa a más de una persona y que el nivel de la discusión es suficientemente serio como para grabar. Eso se proyecta en cómo percibe tu marca alguien que llega sin conocerte.",
      },
      { type: "heading", level: 3, text: "El content day: un mes de LinkedIn en una sola jornada" },
      {
        type: "paragraph",
        text: "La forma más eficiente de mantener constancia en LinkedIn sin consumir tu semana es el content day: una jornada en estudio donde grabas todo el contenido del mes en bloque. 4-6 horas de sesión pueden producir 15-20 clips de 60-90 segundos con coherencia visual entre ellos, subtitulados y organizados por tema. La ventaja no es solo la cantidad: es que todos los clips tienen el mismo fondo, la misma luz y el mismo registro de imagen, lo que construye una imagen de marca coherente a lo largo del tiempo. En RCS hacemos content days para fundadores, equipos de marketing y marcas personales que quieren mantener presencia en LinkedIn sin improvisar cada semana.",
      },
      {
        type: "image",
        src: "/blog/contenido-autoridad-linkedin-formatos-madrid/mid.webp",
        alt: "Micrófono de condensador en estudio de grabación profesional",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes que frenan el contenido de autoridad" },
      {
        type: "list",
        items: [
          "Audio grabado con el micrófono del portátil o del móvil: el sonido malo destruye la percepción de autoridad antes de que el mensaje llegue.",
          "Fondo genérico o desordenado: contradice el mensaje de marca que intentas transmitir desde el primer frame.",
          "Publicar sin ángulo concreto: temas demasiado amplios que no dejan ninguna impresión clara.",
          "Clips sin sustancia real: los vídeos de 15 segundos que presentan sin decir nada relevante no construyen autoridad.",
          "Imagen inconsistente entre vídeos: grabar cada semana en un sitio diferente con luz y encuadre cambiantes no construye reconocimiento de marca.",
          "No subtitular: más del 70 por ciento del vídeo en LinkedIn se consume en silencio. Sin subtítulos, el mensaje no llega.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuántos clips de LinkedIn puedo grabar en una sesión de medio día?",
        answer: "Con buena preparación previa, entre 12 y 18 clips de 60-90 segundos. El flujo habitual en un content day en RCS es: listado de piezas cerrado antes de llegar, grabación en bloque por formato y revisión del material antes de desmontar el set.",
      },
      {
        type: "faq",
        question: "¿Hace falta equipo profesional para que el vídeo de LinkedIn quede bien?",
        answer: "No necesitas el equipo más caro, pero sí resolver tres cosas: audio limpio, fondo coherente con tu marca e iluminación que no aplane ni oscurezca. Con eso resuelto, una mirrorless de gama media o un móvil reciente es más que suficiente.",
      },
      {
        type: "faq",
        question: "¿Qué duración funciona mejor para vídeo de autoridad en LinkedIn?",
        answer: "Entre 45 y 90 segundos para takes y piezas explicativas cortas. Para clips de podcast o entrevista, hasta 2-3 minutos si el contenido lo justifica. Lo que no funciona es alargar sin añadir valor: la retención cae desde el segundo 20 si el vídeo no sustenta el tiempo.",
      },
      {
        type: "faq",
        question: "¿En RCS podéis hacer el content day para LinkedIn de principio a fin?",
        answer: "Sí. Con Producción Completa incluimos grabación, edición, subtitulado y estrategia de publicación: qué clip publicar cada día, en qué orden y con qué copy de acompañamiento para maximizar el impacto de cada pieza.",
      },
      {
        type: "paragraph",
        text: "Si quieres empezar a construir autoridad en LinkedIn con un flujo de producción que no consuma toda tu semana, escríbenos desde /#contacto. En RCS podemos organizar un content day adaptado a tu tipo de contenido y al posicionamiento que quieres construir.",
      },
    ],
  },
  {
    slug: "vsl-linkedin-estructura-duracion-como-grabarlo",
    title: "VSL para LinkedIn: estructura, duración y cómo grabarlo bien",
    description:
      "Qué es una VSL, cómo estructurarla para que convierta en LinkedIn, cuánto debe durar y cómo grabarla en un estudio para que el resultado trabaje por ti.",
    publishedAt: "2026-06-05",
    readingTime: "5 min",
    category: "Guía",
    tags: ["vsl linkedin", "video sales letter", "contenido de marca", "grabación vídeo", "marca personal", "estudio madrid"],
    keyword: "vsl para linkedin",
    intent: "informacional",
    excerpt:
      "Una VSL bien hecha puede ser el activo de LinkedIn que más convierte. Así se estructura, cuánto debe durar y cómo grabarla en estudio para que funcione.",
    seoTitle: "VSL para LinkedIn: estructura, duración y cómo grabarlo | RCS Madrid",
    metaDescription:
      "VSL para LinkedIn: qué es, cómo estructurarla, cuánto debe durar y cómo grabarla en un estudio para que convierta desde el primer frame.",
    heroKicker: "Blog / RCS",
    body: [
      {
        type: "paragraph",
        text: "Una VSL —video sales letter— es el formato más directo que existe en LinkedIn para convertir a alguien que te ve por primera vez en alguien que quiere saber más. No es un anuncio ni un vídeo de marca genérico. Es una pieza estructurada cuyo único objetivo es llevar al espectador de no saber quién eres a querer contactar contigo. Cuando está bien grabada, hace ese trabajo de forma silenciosa, 24 horas al día.",
      },
      {
        type: "paragraph",
        text: "El problema es que la mayoría de las VSL que circulan por LinkedIn fallan por lo mismo: demasiada introducción, demasiada fricción antes del punto clave y un CTA que llega tan tarde que la mitad del vídeo ya perdió a quien lo estaba viendo. Aquí te explico cómo estructurarla, cuánto debe durar y cómo grabarla en un estudio para que el resultado trabaje por ti.",
      },
      {
        type: "image",
        src: "/blog/vsl-linkedin-estructura-duracion-como-grabarlo/hero.webp",
        alt: "Cámara de cine profesional en set de grabación documental",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Qué es una VSL y por qué funciona en LinkedIn" },
      {
        type: "paragraph",
        text: "Una VSL es un monólogo estructurado en vídeo que sigue la lógica de un texto de ventas: gancho, problema, agitación, solución y llamada a la acción. A diferencia de un anuncio de producto o un clip de contenido de valor, la VSL está diseñada para personas que ya están en proceso de decisión. No busca entretener ni informar en general: busca que alguien específico tome una acción concreta al terminar de verla.",
      },
      {
        type: "paragraph",
        text: "En LinkedIn funciona especialmente bien porque la intención de compra en esa plataforma ya existe. Quien te sigue o llega a tu perfil está en un contexto de trabajo, no en modo ocio. Una VSL bien posicionada —como contenido destacado en el perfil, dentro de una campaña de leads o como primer mensaje en outreach— captura esa intención antes de que la persona pase a otra cosa. La clave es que tiene que empezar a trabajar desde el primer segundo.",
      },
      { type: "heading", level: 2, text: "Cómo estructurar una VSL que convierte" },
      { type: "heading", level: 3, text: "El gancho: los primeros 5 segundos" },
      {
        type: "paragraph",
        text: "Los primeros 5 segundos deciden si el vídeo se ve o se pasa. El gancho tiene que romper el patrón de scroll con una afirmación concreta, una pregunta que no se puede ignorar o un dato que genera curiosidad inmediata. Nada de presentaciones: empezar con 'Hola, soy X y hoy te voy a contar' es una invitación a pasar de largo. El gancho empieza en el problema del espectador, no en quién eres tú.",
      },
      { type: "heading", level: 3, text: "El desarrollo: problema, agitación y solución" },
      {
        type: "paragraph",
        text: "Una vez que tienes la atención, el desarrollo tiene que hacer dos cosas: demostrar que entiendes bien el problema y ofrecer un ángulo de solución creíble. El error más frecuente es llegar demasiado rápido a la solución sin dedicar tiempo a describir el problema con precisión. Si el espectador no se reconoce en el problema que describes, la solución no le interesa. Dedica un tercio del tiempo al problema, otro tercio a agitarlo —qué cuesta no resolverlo, qué pasa si no se actúa— y el tercio final a la solución.",
      },
      { type: "heading", level: 3, text: "El CTA: corto, claro y sin fricción" },
      {
        type: "paragraph",
        text: "El CTA de una VSL tiene que ser una sola acción, una sola vez y sin ambigüedad. No ofrezcas tres opciones ni expliques en detalle qué va a pasar después. 'Escríbeme y lo vemos' convierte mejor que 'rellena el formulario, recibirás un email y en 48 horas alguien del equipo se pone en contacto'. La fricción en el CTA destruye el impulso que has generado en el desarrollo. Cuanto más corto y directo, mejor funciona.",
      },
      {
        type: "image",
        src: "/blog/vsl-linkedin-estructura-duracion-como-grabarlo/mid.webp",
        alt: "Persona grabando vídeo con cámara profesional en sesión de contenido",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Errores comunes en una VSL de LinkedIn" },
      {
        type: "list",
        items: [
          "Empezar con presentación en lugar de gancho: los primeros segundos tienen que hablar del espectador, no de ti.",
          "VSL demasiado larga: entre 90 segundos y 3 minutos es el rango óptimo para LinkedIn. Por encima, la retención cae sin recuperarse.",
          "Audio de baja calidad: si el vídeo suena mal, la credibilidad cae antes de que el mensaje llegue.",
          "Fondo que contradice el mensaje: si vendes resultados premium, el contexto visual tiene que respaldarlo desde el primer frame.",
          "CTA vago o con demasiadas opciones: una sola acción, en los últimos 15-20 segundos, sin alternativas que paralicen.",
          "No subtitular: más del 70% del vídeo en LinkedIn se consume en silencio. Sin subtítulos, el mensaje no llega.",
        ],
      },
      { type: "heading", level: 2, text: "Preguntas frecuentes" },
      {
        type: "faq",
        question: "¿Cuánto debe durar una VSL para LinkedIn?",
        answer: "Entre 90 segundos y 3 minutos. Por debajo de 90 segundos es difícil desarrollar el problema y la solución con suficiente credibilidad. Por encima de 3 minutos, la retención en LinkedIn cae de forma brusca salvo que la pieza sea muy específica para una audiencia ya caliente.",
      },
      {
        type: "faq",
        question: "¿Hace falta guión cerrado para grabar una VSL?",
        answer: "Sí, en este caso sí. A diferencia de un reel o un clip de contenido de valor donde la naturalidad puede compensar la falta de guión, la VSL tiene una estructura con lógica interna que hay que respetar. Un esquema con las frases clave escritas —especialmente el gancho y el CTA— evita que improvises justo donde más importa el orden de las palabras.",
      },
      {
        type: "faq",
        question: "¿Qué equipo necesito para grabar una VSL en estudio?",
        answer: "Una cámara que grabe en 1080p o 4K, audio externo —micrófono de condensador o solapa— y una iluminación que no genere sombras duras. En RCS tenemos todo el equipo disponible, incluido teleprompter si prefieres leer el guión en lugar de memorizar.",
      },
      {
        type: "faq",
        question: "¿Puedo usar la misma VSL para ads y para el perfil de LinkedIn?",
        answer: "Puedes partir del mismo material, pero hay diferencias de contexto importantes. Para perfil, el espectador ya tiene un mínimo de intención hacia ti. Para ads, llega en frío y el gancho tiene que ser aún más rápido. Grabar dos versiones en la misma sesión —misma estructura, gancho adaptado— es la forma más eficiente de cubrir ambos usos.",
      },
      {
        type: "paragraph",
        text: "Si quieres grabar tu VSL para LinkedIn con un setup que respalde el mensaje desde el primer frame, en RCS podemos organizarlo. Escríbenos desde /#contacto y cuéntanos el objetivo de la pieza: te respondemos el mismo día.",
      },
    ],
  },
  {
    slug: "como-hacer-un-day-in-studio-marcas-personales",
    title: "Cómo hacer un day in studio: guía para marcas personales",
    description:
      "Qué es un day in studio, cómo organizarlo y qué grabar en una jornada de contenido en Madrid. Guía práctica para marcas personales.",
    publishedAt: "2026-06-08",
    readingTime: "5 min",
    category: "Guía",
    tags: ["day in studio", "marcas personales", "contenido Madrid", "grabación de contenido", "content day", "producción audiovisual"],
    keyword: "day in studio marcas personales",
    intent: "informacional",
    excerpt:
      "Un day in studio es la forma más eficiente de producir contenido de marca en una sola jornada. Esta guía explica qué grabar, cómo organizarlo y cómo sacarle el máximo partido en el estudio.",
    seoTitle: "Day in Studio para marcas personales | RCS Madrid",
    metaDescription:
      "Qué es un day in studio y cómo organizarlo para grabar el contenido de tu marca personal en Madrid en una sola jornada. Guía práctica.",
    heroKicker: "Blog / RCS",
    body: [
      {
        type: "paragraph",
        text: "La mayor queja que escucho de founders y creadores de contenido no es que no tengan ideas. Es que no tienen tiempo. Un podcast por aquí, un reel por allá, una presentación para el martes. Y al final del mes, el perfil de LinkedIn lleva tres semanas sin actividad.",
      },
      {
        type: "paragraph",
        text: "El day in studio existe para resolver exactamente eso. En lugar de producir contenido por goteo —un vídeo hoy, otro en quince días—, concentras toda la producción en una sola jornada. Llegas por la mañana, grabas, y sales con material para semanas o meses. Si tienes una marca personal y todavía no lo has probado, esta guía te explica cómo funciona.",
      },
      {
        type: "image",
        src: "/blog/como-hacer-un-day-in-studio-marcas-personales/hero.webp",
        alt: "Creadora de contenido grabando vídeo para su marca personal en estudio",
        width: 1920,
        height: 1080,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Qué es un day in studio y por qué funciona para marcas personales",
      },
      {
        type: "paragraph",
        text: "Un day in studio es una jornada completa de grabación planificada. No es grabar sin orden: es entrar con un plan claro de qué piezas necesitas y salir con todo rodado, listo para editar.",
      },
      {
        type: "paragraph",
        text: "Para marcas personales tiene sentido especial. Tu contenido no es el de una empresa con equipo de marketing. Eres tú quien aparece, quien habla, quien necesita prepararse mentalmente para cámara. Hacerlo en una sola sesión larga —en lugar de en pequeñas grabaciones dispersas— te permite mantener el estado mental y el flow. La cuarta toma de la mañana sale mejor que la primera de la tarde porque ya llevas horas delante del objetivo y el nerviosismo desaparece.",
      },
      {
        type: "paragraph",
        text: "En términos logísticos también tiene sentido. El setup de cámara, el micrófono, la iluminación: montas una vez y grabas durante horas. Si cada grabación fuera por separado, estarías montando y desmontando equipo de forma constante.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo organizar tu day in studio",
      },
      {
        type: "heading",
        level: 3,
        text: "Define qué piezas vas a grabar antes de llegar",
      },
      {
        type: "paragraph",
        text: "El error más común es llegar al estudio sin guiones ni lista de temas definidos. En ese momento, el tiempo que pagas empieza a correr y tú aún estás decidiendo qué grabar.",
      },
      {
        type: "paragraph",
        text: "Lo mínimo antes de una jornada: una lista con todos los vídeos que necesitas, en qué formato —horizontal, vertical, corto, largo— y si tienen guión o son más libres. Cuanta más precisión llegues, más grabas. En RCS solemos recomendar preparar entre 10 y 20 piezas cortas, aunque en la práctica se ajusta según el ritmo y los objetivos del día.",
      },
      {
        type: "heading",
        level: 3,
        text: "Organiza el orden por vestuario o cambio de look",
      },
      {
        type: "paragraph",
        text: "Si tienes pensado cambiar de ropa o de look durante la jornada, agrupa todas las grabaciones del mismo atuendo antes de cambiar. Suena obvio, pero es fácil perderse entre formatos y darte cuenta al final de que una pieza del primer bloque se grabó con la misma ropa que otra del tercero, rompiendo la continuidad visual.",
      },
      {
        type: "paragraph",
        text: "Una hoja de rodaje sencilla —por look o por tema— resuelve este problema sin necesidad de producción compleja. Puede ser una nota en el móvil. Lo que importa es el orden.",
      },
      {
        type: "heading",
        level: 3,
        text: "Alterna entre formatos para mantener la energía",
      },
      {
        type: "paragraph",
        text: "Una jornada de grabación sostenida puede cansar. No es lo mismo hablar a cámara durante cuatro horas seguidas que alternar entre entrevistas, monólogos y piezas técnicas. Si tienes variedad de formatos planificados, distribúyelos de forma que no acumules el mismo tipo de esfuerzo cognitivo en bloque.",
      },
      {
        type: "paragraph",
        text: "Por ejemplo: empieza con las piezas más preparadas y guionizadas cuando la concentración está al máximo. Deja las piezas más conversacionales o libres para el tramo de la tarde, cuando el cuerpo ya está caliente y la naturalidad fluye mejor. Un teleprompter bien colocado puede ayudar en los momentos en que la memoria falla.",
      },
      {
        type: "image",
        src: "/blog/como-hacer-un-day-in-studio-marcas-personales/mid.webp",
        alt: "Setup de grabación profesional con iluminación en estudio de contenido",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 2,
        text: "Errores que arruinan una jornada de contenido",
      },
      {
        type: "list",
        items: [
          "Llegar sin guiones ni lista de temas definidos",
          "No organizar el orden de grabación según los cambios de look",
          "Dejar los formatos verticales para el final cuando ya estás agotado",
          "No revisar ninguna toma en cámara antes de terminar la jornada",
          "Intentar editar durante la misma jornada de grabación",
          "Subestimar el tiempo por pieza: un reel de 60 segundos puede llevar 20 minutos si requiere varias tomas",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        question: "¿Cuántas piezas se pueden grabar en un day in studio?",
        answer: "En una jornada de 4-5 horas con material bien preparado, es habitual sacar entre 15 y 25 piezas cortas. Si incluyes formatos más largos —episodios completos de podcast, VSLs— el número baja. En RCS recomendamos no superar los 20-22 clips en un solo día para mantener la calidad de la última toma tan alta como la primera.",
      },
      {
        type: "faq",
        question: "¿Necesito guiones escritos o sirve con un esquema?",
        answer: "Para piezas de 30-60 segundos, un esquema con los puntos clave suele dar más naturalidad que leer un guión cerrado. Para formatos más largos o con estructura específica —VSL, episodio formativo—, conviene un guión más desarrollado. El teleprompter en RCS está disponible para quien prefiere leer sin perder el contacto visual con la cámara.",
      },
      {
        type: "faq",
        question: "¿Cuánto tiempo necesito reservar para un day in studio completo?",
        answer: "Depende del volumen. Para 15-20 piezas cortas bien preparadas, entre 3 y 5 horas es suficiente. Si tienes formatos largos o necesitas cambios de look, calcula entre 5 y 7 horas. Lo mejor es hablar antes de la reserva para dimensionarlo bien.",
      },
      {
        type: "faq",
        question: "¿Puedo hacer un day in studio si es la primera vez que grabo en estudio?",
        answer: "Sí, de hecho es un buen punto de entrada. En la primera hora suele haber una curva de adaptación —el espacio, la cámara, los monitores—, pero en la segunda ya estás rodado. El formato de jornada completa te da margen para esa adaptación sin que se coma toda la sesión.",
      },
      {
        type: "paragraph",
        text: "Si tienes marca personal y quieres planificar tu primer day in studio en Madrid, escríbenos desde /#contacto. Te ayudamos a definir qué grabar, en qué formatos y cómo organizar la jornada para que salgas con el contenido de las próximas semanas.",
      },
    ],
  },
];

export function getAllPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogMetadata(): Metadata {
  return {
    title: "Blog",
    description:
      "Artículos sobre estudios de grabación, contenido para marcas, reels, podcast y producción audiovisual en Madrid.",
    alternates: { canonical: "/blog" },
    openGraph: {
      title: "Blog",
      description:
        "Ideas, guías y artículos sobre espacios para grabar contenido, producción audiovisual y contenido orgánico en Madrid.",
      url: `${SITE_URL}/blog`,
      siteName: SITE_NAME,
      type: "website",
      locale: "es_ES",
    },
  };
}

export function getPostMetadata(post: BlogPost): Metadata {
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: SITE_NAME,
      type: "article",
      locale: "es_ES",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    },
  };
}
