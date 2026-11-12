/*
    Esta función se ejecuta cuando el usuario hace clic en "Verificar respuestas".
*/
function verificarRespuestas() {
    /*
        Guardamos las respuestas correctas. Cada "pregunta" tiene asociada una letra que coincide con el "value" de las opciones que pusimos en el HTML. Por ejemplo: pregunta1: "b" significa que la opción correcta de la pregunta 1 es la opción B.
    */
    let respuestasCorrectas = {
        pregunta1: "b",
        pregunta2: "a",
        pregunta3: "b",
        pregunta4: "a",
        pregunta5: "b"
    };

    /*
        Esta variable funciona como contador de puntos. Comienza en 0 porque todavía no revisamos ninguna respuesta.
    */
    let puntos = 0;
    /*
     Este "for" recorre todas las preguntas que guardamos en "respuestasCorrectas". En cada vuelta, la variable "pregunta" representa una pregunta diferente:
        pregunta1
        pregunta2
        pregunta3
        pregunta4
        pregunta5
    */
    for (let pregunta in respuestasCorrectas) {
        /*
            Buscamos cuál fue la opción seleccionada por el usuario. "input[name=...]" busca los botones correspondientes a la pregunta actual. ":checked" significa que buscamos solamente el botón que fue seleccionado. Por ejemplo, al revisar pregunta1, buscará la opción que tenga: name="pregunta1" y que esté seleccionada.
        */
        let respuesta = document.querySelector(
            'input[name="' + pregunta + '"]:checked'
        );
        /*
            Comprobamos dos cosas:
            1. Que el usuario haya seleccionado una opción.
            2. Que el "value" de esa opción sea igual a la respuesta correcta.
            Si las dos condiciones se cumplen,
            la respuesta es correcta.
        */
        if (
            respuesta &&
            respuesta.value === respuestasCorrectas[pregunta]
        ) {
            /*
                Si la respuesta es correcta, aumentamos el contador de puntos. "puntos++" equivale a: puntos = puntos + 1
            */
            puntos++;

        }

    }
    /*
        Buscamos el elemento del HTML donde queremos mostrar el resultado. En el HTML tenemos: <h2 id="resultado"></h2>
    */
    let resultado = document.getElementById("resultado");
    /*
        Ahora comprobamos cuántas respuestas correctas tuvo el usuario.
    */

    if (puntos === 5) {

        /*
            Si acertó las 5 preguntas, mostramos un mensaje especial.
        */
        resultado.innerHTML =
            "¡Excelente! Respondiste correctamente las 5 preguntas.";

    }

    else if (puntos >= 3) {
        /*
            Si acertó 3 o 4 preguntas, mostramos un mensaje indicando la cantidad de respuestas correctas.
        */
        resultado.innerHTML =
            "Bien, respondiste correctamente " + puntos + " de 5 preguntas.";

    }

    else {

        /*
            Si acertó 0, 1 o 2 preguntas, mostramos un mensaje indicando el resultado e invitando a intentarlo nuevamente.
        */
        resultado.innerHTML =
            "Obtuviste " + puntos + " de 5. ¡Volvé a intentarlo!";
    }
}
/*
    Esta función se ejecuta cuando el usuario presiona el botón "Volver a hacer".
*/
function reiniciarCuestionario() {
    /*
        "reset()" devuelve el formulario a su estado inicial. En este caso:
     - Desmarca todas las opciones.
     - Deja el cuestionario listo para empezar otra vez.
    */
    document.getElementById("quiz").reset();
    /*
        También tenemos que borrar el mensaje del resultado anterior. Al poner "" dejamos vacío el elemento que muestra el resultado.
    */
    document.getElementById("resultado").innerHTML = "";
}