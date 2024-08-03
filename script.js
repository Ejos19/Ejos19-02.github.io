function corregirExamen() {
  let respuestasCorrectas = [
    "ballenas",
    "serpientes",
    "abejas",
    "pinguinos",
    "osos",
  ];
  let respuestasUsuario = [
    document.getElementById("respuesta1").value.toLowerCase(),
    document.getElementById("respuesta2").value.toLowerCase(),
    document.getElementById("respuesta3").value.toLowerCase(),
    document.getElementById("respuesta4").value.toLowerCase(),
    document.getElementById("respuesta5").value.toLowerCase(),
  ];

  let aciertos = 0;
  let puntajeTotal = 0;

  for (let i = 0; i < respuestasCorrectas.length; i++) {
    let respuestaUsuario = respuestasUsuario[i];
    let respuestaCorrecta = respuestasCorrectas[i];
    let elementoPregunta = document.getElementById("preguntas").children[i];
    let inputRespuesta = elementoPregunta.querySelector("input");
    let feedbackElement = elementoPregunta.querySelector("span");

    if (respuestaUsuario === respuestaCorrecta) {
      aciertos++;
      puntajeTotal += parseInt(elementoPregunta.dataset.ponderacion);
      inputRespuesta.classList.add("respuesta-correcta");
      feedbackElement.textContent = "✔️";
    } else {
      inputRespuesta.classList.add("respuesta-incorrecta");
      feedbackElement.textContent = "❌";
    }

    // Ocultar la respuesta después de corregirla
    setTimeout(() => {
      inputRespuesta.value = "";
      inputRespuesta.disabled = true;
    }, 1000); // Ajustar el tiempo de espera según se desee
  }

  let resultado = `Aciertos: ${aciertos} de 5\nPuntaje Total: ${puntajeTotal} de 20`;
  document.getElementById("resultado").textContent = resultado;
}
