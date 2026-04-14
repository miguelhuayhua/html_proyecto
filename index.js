

const contenedorDatos = document.getElementById("contenedor");
const contenedorPartidos = document.getElementById("contenedor-partidos");

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
    //creación de los jugadores
    jugadores.splice(0, 4).forEach(function (jugador) {
        let tarjeta = document.createElement("div");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        //asignación de información
        img.alt = "Imagen de :" + jugador.nombre;
        img.src = jugador.fotografia;
        h3.textContent = jugador.nombre;
        p.textContent = jugador.nacimiento;

        //asignación de estilos

        tarjeta.className = "flex rounded-lg overflow-hidden flex-col bg-white"
        h3.className = "font-bold"

        //asignación de componentes al padre (tarjeta)
        tarjeta.appendChild(img);
        tarjeta.appendChild(h3);
        tarjeta.appendChild(p);
        contenedorDatos.appendChild(tarjeta)
    })



    //creación de partidos


    partidos.forEach(partido => {
        const { equipos, estadium, fecha } = partido;
        const tarjeta2 = document.createElement('div');

        const equipoOficial = document.createElement('div');

        const equipoRival = document.createElement('div');
        const acciones = document.createElement('div');


        const info_oficial = equipos.at(0);
        const info_rival = equipos.at(1);
        //LLENADO DE INFORMACIÓN
        let imagenOficial = document.createElement('img');
        let nombreOficial = document.createElement('span');
        imagenOficial.src = info_oficial.logo;
        imagenOficial.className = "size-20"
        nombreOficial.textContent = info_oficial.nombre;
        nombreOficial.className = "font-bold"
        equipoOficial.appendChild(imagenOficial);
        equipoOficial.appendChild(nombreOficial);
        equipoOficial.className = " flex items-center gap-5 col-span-2"

        tarjeta2.className = "grid grid-cols-5 rounded-xl hover:bg-gray-100 p-6 shadow bg-white";
        tarjeta2.appendChild(equipoOficial);

        contenedorPartidos.appendChild(tarjeta2)
    })

})



const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (evento) => {
    //importante
    evento.preventDefault();
    //lógica propia 
    let datos = new FormData(formulario);
    let mensaje = datos.get('mensaje')
    let nombre = datos.get('nombre');
    console.log("Mi mensaje: " , mensaje)
    console.log("Mi nombre: " , nombre)


})






const form = document.getElementById('form')
form.addEventListener('submit', function (ev) {
    ev.preventDefault()
})











