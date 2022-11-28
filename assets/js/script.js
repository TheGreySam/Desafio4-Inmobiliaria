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

    //console.log(html)
var articulos = [
    
    {
        nombre: "Casa de campo",
        descripcion: "Un lugar ideal para descansar de la ciudad",
        src: "./assets/img/casa1.jpg",
        cuartos: 2,
        metros: 170
    },
    {
        nombre: "Casa de playa",
        descripcion:  "Despierta tus días oyendo el oceano",
        src: "./assets/img/casa2.jpg",
        cuartos: 2,
        metros: 130
    },
    {
        nombre: "Casa en el centro",
        descripcion: "Ten cerca de ti todo lo que necesitas",
        src: "./assets/img/casa3.jpg",
        cuartos: 1,
        metros: 80
    },
    {
        nombre: "Casa rodante",
        descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
        src: "./assets/img/casa4.jpg",
        cuartos: 1,
        metros: 6
    },
    {
        nombre: "Departamento",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "./assets/img/casa5.jpg",
        cuartos: 3,
        metros: 200
    },
    {
        nombre: "Mansión",
        descripcion: "Un lugar ideal para descansar de la ciudad",
        src: "./assets/img/casa6.jpg",
        cuartos: 5,
        metros: 500
    },
    
] 

let htmlb = ''
    for (let articulo of articulos) {
    htmlb += `
    <div class="card bg-dark text-white text-center m-2" style="width: 18rem;">
                        <img class="card-img-top" src="${articulo.src}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${articulo.nombre}</h5>
                            <div class="row m-3">
                                <div class="col-sm">
                                    <p>Cuartos: ${articulo.cuartos}<span></span></p>
                                </div>
                                <div class="col-sm">
                                    <p> Metros: ${articulo.metros}</p>
                                </div>
                            </div>
                            <p class="card-text">${articulo.descripcion}</p>
                            <a href="#" class="btn btn-info">Ver más</a>
                        </div>
                    </div>
    `
   }
//console.log(htmlb)



 const articulosSection =
     document.querySelector(".articulos")

 articulosSection.innerHTML = htmlb

 function Buscar() {
    // var input, filter, cards, cardContainer, h5, title, i;
    // input = document.getElementById("buscarCuartos");
    // filter = input.value.toUpperCase();
    // cardContainer = document.getElementById("articulos");
    // cards = cardContainer.getElementsByClassName("card");
    // for (i = 0; i < cards.length; i++) {
    //     title = cards[i].querySelector(".card-body h5.card-title");
    //     if (title.innerText.toUpperCase().indexOf(filter) > -1) {
    //         cards[i].style.display = "";
    //     } else {
    //         cards[i].style.display = "none";
    //     }
    // }
    var inputCuartos, inputDesde, inputHasta;
    inputCuartos = document.getElementById("inputCuartos") 
    inputDesde = document.getElementById("inputDesde") 
    inputHasta = document.getElementById("inputHasta") 
    articulos.filter(Number )
    if (inputCuartos = "cero", inputDesde = "cero", inputHasta = "cero") {
        alert("Faltan campos por llenar")
    }

}