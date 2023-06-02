//Codigo para cuando el select cambia de valor, se carguen las medidas actuales del nuevo huerto

let selectorNombres = document.getElementById("nombre-huerto")
selectorNombres.addEventListener("change",cambiarMedidasActual)

async function cambiarMedidasActual(){
    await cargarMedidasActual()
}

//Codigo para que cada cierto intervalo tambien se ejecute la carga de medidas actuales

setInterval(cargarMedidasActual,30000)

