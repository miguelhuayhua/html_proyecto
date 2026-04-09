


let jugadores = [
    {
        nombre: "Mark Thompson",
        nacimiento: "Enero 12, 1993",
        tipo: "Delantero",
        fotografia: "https://dominio.com/jugadores/1.png"
    },
    {
        nombre: "Mike Jhonson",
        nacimiento: "Enero 12, 1993",
        tipo: "Delantero",
        fotografia: "https://dominio.com/jugadores/1.png"
    },
    {
        nombre: "Mark Thompson",
        nacimiento: "Enero 12, 1993",
        tipo: "Delantero",
        fotografia: "https://dominio.com/jugadores/1.png"
    },
    {
        nombre: "Mark Thompson",
        nacimiento: "Enero 12, 1993",
        tipo: "Delantero",
        fotografia: "https://dominio.com/jugadores/1.png"
    }

]


let partidos = [
    {
        estadium: "Bernaveu",
        fecha: "12 de Octubre",
        equipos: [
            { logo: "https://url.com/2.png", nombre: "Real Madrid" },
            { logo: "https://url.com/4.png", nombre: "Sevilla FC" }]
    },
    {
        estadium: "Bernaveu",
        fecha: "12 de Octubre",
        equipos: [
            { logo: "https://url.com/2.png", nombre: "Real Madrid" },
            { logo: "https://url.com/4.png", nombre: "Sevilla FC" }]
    }, {
        estadium: "Bernaveu",
        fecha: "12 de Octubre",
        equipos: [
            { logo: "https://url.com/2.png", nombre: "Real Madrid" },
            { logo: "https://url.com/4.png", nombre: "Sevilla FC" }]
    }
]

const contenedorDatos = document.getElementById("contenedor");

jugadores.forEach(function (jugador) {
    console.log(jugador)
    let tarjeta = document.createElement("div");
    tarjeta.textContent = jugador.nombre;
    tarjeta.className = "bg-red-400 text-white border mt-4"
    tarjeta.classList.add("p-7")
    contenedorDatos.appendChild(tarjeta)
})


fetch("https://dominio.com/jugadores")