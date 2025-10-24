document.addEventListener("DOMContentLoaded", () => {
    //definimos las constantes de los ID para relacionar el elemento al CSS
    const idBoton = "cambiar-color";
    const body = "cuerpo";  //No entendi la razon de porque nombre los ID's asi pero bueno
    const main = "principal";
    const informacion = "informacion_deportes";

    //corrección: document.getElementById
    const boton = document.getElementById(idBoton);

    //Declaramos las paletas de colores, en este caso la que queremos para modo oscuro
    const paletas = [
        {   
            name: "base", 
            body: "#9a99e1", 
            main: "#9a99e1", 
            informacion: "#dcbddf",
            texto: "#f5edf0", 
            header: "#008bd0"
        }, 
        {
            name: "alternativa", 
            body: "#465779", 
            main: "#465779", 
            informacion: "#99b3c6", 
            texto: "#d3d7e7",
            header: "#221831"
        }
    ];

    //declaramos la variable que nos permita referir al indice del array de mapas
    let indice = 0;

    //Definimos la funcion que nos permita aplicar la paleta
    function fill(paleta) {
        const root = document.documentElement;
        root.style.setProperty("--color-body", paleta.body);
        root.style.setProperty("--color-main", paleta.main);
        root.style.setProperty("--color-info", paleta.informacion);
        root.style.setProperty("--color-texto", paleta.texto);
        root.style.setProperty("--color-header", paleta.header)
        //root.style.setProperty("--color-header", paleta.header); //Por si más adelante agregas un header
    }

    //Definimos la función que nos permita cambiar la paleta actual por la siguiente
    function cambiarPaleta() {
        //actualizamos el índice: si llega al final, vuelve al inicio
        indice = (indice + 1) % paletas.length;

        //aplicamos la nueva paleta de colores
        fill(paletas[indice]);
    }

    //Añadimos el evento de clic al botón para ejecutar la función cambiarPaleta
    if (boton) {
        boton.addEventListener("click", cambiarPaleta);
    } else {
        console.warn("No se encontró el botón con id '" + idBoton + "'.");
    }

    //Aplicamos la paleta inicial cuando se carga la página
    fill(paletas[indice]);
});
