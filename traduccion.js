// Esperamos que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    // IDs de los elementos principales
    const botonTraduccion = document.getElementById("traducir");
    const titulo = document.querySelector(".deportes_info");
    const subtitulo = document.querySelector(".subdeportes_info");
    const parrafoIntro = document.querySelector(".que_es_deporte p");
    const parrafoBeneficios = document.querySelector(".implicacion_deporte p");
    const impactoTitulo = document.querySelector(".implicacion_deporte h4");
    const impactoTexto = document.querySelectorAll(".implicacion_deporte p")[1];

    // Variable de control para alternar idioma
    let traducido = false;

    // Diccionario de traducciones
    const traducciones = {
        es: {
            titulo: "Los Deportes",
            subtitulo: "Su práctica e importancia",
            intro: "El deporte es una actividad reglamentada que combina esfuerzo físico y estrategia. Más allá del entretenimiento, enseña disciplina, trabajo en equipo, perseverancia y respeto.",
            beneficios: "Practicar deporte mejora la salud física, fortalece el corazón, reduce el estrés y eleva la autoestima. Además, fomenta la coordinación, la estrategia y la toma de decisiones rápidas.",
            impactoTitulo: "Impacto colectivo",
            impactoTexto: "Los deportes promueven valores como el juego limpio, el respeto y la cooperación. También fortalecen la identidad, la comunidad y el sentido de pertenencia."
        },
        en: {
            titulo: "Sports",
            subtitulo: "Their Practice and Importance",
            intro: "Sport is a regulated activity that combines physical effort and strategy. Beyond entertainment, it teaches discipline, teamwork, perseverance, and respect.",
            beneficios: "Playing sports improves physical health, strengthens the heart, reduces stress, and boosts self-esteem. It also promotes coordination, strategy, and quick decision-making.",
            impactoTitulo: "Collective Impact",
            impactoTexto: "Sports promote values such as fair play, respect, and cooperation. They also strengthen identity, community, and a sense of belonging."
        }
    };

    // Evento del botón para alternar idioma
    botonTraduccion.addEventListener("click", () => {
        traducido = !traducido; // Cambia el estado del idioma
        const idioma = traducido ? "en" : "es";

        // Reemplazo del contenido en el DOM
        titulo.textContent = traducciones[idioma].titulo;
        subtitulo.textContent = traducciones[idioma].subtitulo;
        parrafoIntro.textContent = traducciones[idioma].intro;
        parrafoBeneficios.textContent = traducciones[idioma].beneficios;
        impactoTitulo.textContent = traducciones[idioma].impactoTitulo;
        impactoTexto.textContent = traducciones[idioma].impactoTexto;

        // Cambia el texto del botón según el idioma activo
        botonTraduccion.textContent = traducido ? "Traducir" : "Translate";
    });
});
