

const contenedorDatos = document.getElementById("contenedor");



fetch('https://ysmgcapyfdzdpagzkcgo.supabase.co/functions/v1/clase_html_api', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer sb_publishable_3WXE382vKEFyMmhAYwbTpA_lP80irOs",
    }
}).then(respuesta => {
    return respuesta.json();
}).then(datos => {

    let { jugadores, partidos } = datos;
    jugadores.forEach(function (jugador) {
        let tarjeta = document.createElement("div");
        tarjeta.textContent = jugador.nombre;
        tarjeta.className = "bg-red-400 text-white border mt-4"
        tarjeta.classList.add("p-7")
        contenedorDatos.appendChild(tarjeta)
    })


})



















