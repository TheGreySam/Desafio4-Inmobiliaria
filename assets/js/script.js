const productos = [
    ["Patineta", "verde", 35990],
    ["Bicicleta", "Amarilla", 120990],
    ["Patines", "Morado", 60990],
    ["Scooter", "Negro", 250990]
    ];
    let html = ''
    for (let producto of productos) {
    html += `<div>
    <h1> ${producto[0]} </h1>
    <p> ${producto[1]} </p>
    <p> ${producto[2]} </p>`
    }

    console.log(html)
const articulos = [
    
    [
        "Casa de campo",
        "Un lugar ideal para descansar de la ciudad",
        "./assets/img/casa1.jpg",
        2,
        170
    ],
    [
        "Casa de playa",
        "Despierta tus días oyendo el oceano",
        "./assets/img/casa2.jpg",
        2,
        130
    ],
    [
        "Casa en el centro",
        "Ten cerca de ti todo lo que necesitas",
        "./assets/img/casa3.jpg",
        1,
        80
    ],
    [
        "Casa rodante",
        "Conviertete en un nómada del mundo sin salir de tu casa",
        "./assets/img/casa4.jpg",
        1,
        6
    ],
    [
        "Departamento",
        "Desde las alturas todo se ve mejor",
        "./assets/img/casa5.jpg",
        3,
        200
    ],
    [
        "Mansión",
        "Un lugar ideal para descansar de la ciudad",
        "./assets/img/casa6.jpg",
        5,
        500
    ]
] 

let htmlb = ''
    for (let articulo of articulos) {
    htmlb += `
    <div class="card bg-dark text-white text-center m-2" style="width: 18rem;">
                        <img class="card-img-top" src="${articulo[2]}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${articulo[0]}</h5>
                            <div class="row m-3">
                                <div class="col-sm">
                                    <p>Cuartos: ${articulo[3]}<span></span></p>
                                </div>
                                <div class="col-sm">
                                    <p> Metros: ${articulo[4]}</p>
                                </div>
                            </div>
                            <p class="card-text">${articulo[1]}</p>
                            <a href="#" class="btn btn-info">Ver más</a>
                        </div>
                    </div>
    `
    }
console.log(htmlb)

const articulosSection =
    document.querySelector(".articulos")

articulosSection.innerHTML = htmlb
    

//const inmuebles = {
//    nombre: "Departamento",
//    descripcion: "Desde las alturas todo se ve mejor",
  //  src: "casa5",
    //cuartos: 3,
    //metros: 200
//},


// casacampo = {
    //     nombre: "Casa de campo",
    //     descripcion: "Un lugar ideal para descansar de la ciudad",
    //     src: "./assets/img/casa1.jpg",
    //     cuartos: 2,
    //     metros: 170
    // },
    // casaplaya = {
    //     nombre: "Casa de playa",
    //     descripcion: "Despierta tus días oyendo el oceano",
    //     src: "./assets/img/casa2.jpg",
    //     cuartos: 2,
    //     metros: 130
    // },
    // casacentro = {
    //     nombre: "Casa en el centro",
    //     descripcion: "Ten cerca de ti todo lo que necesitas",
    //     src: "./assets/img/casa3.jpg",
    //     cuartos: 1,
    //     metros: 80
    // },
    // casarodante = {
    //     nombre: "Casa rodante",
    //     descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
    //     src: "./assets/img/casa4.jpg",
    //     cuartos: 1,
    //     metros: 6
    // },
    // casadepa = {
    //     nombre: "Departamento",
    //     descripcion: "Desde las alturas todo se ve mejor",
    //     src: "./assets/img/casa5.jpg",
    //     cuartos: 3,
    //     metros: 200
    // },
    // casamansion = {
    //     nombre: "Mansión",
    //     descripcion: "Un lugar ideal para descansar de la ciudad",
    //     src: "./assets/img/casa6.jpg",
    //     cuartos: 5,
    //     metros: 500
    // }