const articulos = [
    casacampo = {
        nombre: "Casa de campo",
        descripcion: "Un lugar ideal para descansar de la ciudad",
        src: "./assets/img/casa1.jpg",
        cuartos: 2,
        metros: 170
    },
    casaplaya = {
        nombre: "Casa de playa",
        descripcion: "Despierta tus días oyendo el oceano",
        src: "./assets/img/casa2.jpg",
        cuartos: 2,
        metros: 130
    },
    casacentro = {
        nombre: "Casa en el centro",
        descripcion: "Ten cerca de ti todo lo que necesitas",
        src: "./assets/img/casa3.jpg",
        cuartos: 1,
        metros: 80
    },
    casarodante = {
        nombre: "Casa rodante",
        descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
        src: "./assets/img/casa4.jpg",
        cuartos: 1,
        metros: 6
    },
    casadepa = {
        nombre: "Departamento",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "./assets/img/casa5.jpg",
        cuartos: 3,
        metros: 200
    },
    casamansion = {
        nombre: "Mansión",
        descripcion: "Un lugar ideal para descansar de la ciudad",
        src: "./assets/img/casa6.jpg",
        cuartos: 5,
        metros: 500
    }
] 


console.log(casacampo)

const articulosSection =
    document.querySelector(".articulos")

articulosSection.innerHTML =
    `    
    <div class="card bg-dark text-white text-center m-2" style="width: 18rem;">
                        <img class="card-img-top" src="${casacampo.src}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${casacampo.nombre}</h5>
                            <div class="row m-3">
                                <div class="col-sm">
                                    <p>Cuartos: ${casacampo.cuartos}<span></span></p>
                                </div>
                                <div class="col-sm">
                                    <p> Metros: ${casacampo.metros}</p>
                                </div>
                            </div>
                            <p class="card-text">${casacampo.descripcion}</p>
                            <a href="#" class="btn btn-info">Ver más</a>
                        </div>
                    </div>
                    <div class="card bg-dark text-white text-center m-2" style="width: 18rem;">
                        <img class="card-img-top" src="${casaplaya.src}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${casaplaya.nombre}</h5>
                            <div class="row m-3">
                                <div class="col-sm">
                                    <p>Cuartos: ${casaplaya.cuartos}<span></span></p>
                                </div>
                                <div class="col-sm">
                                    <p> Metros: ${casaplaya.metros}</p>
                                </div>
                            </div>
                            <p class="card-text">${casaplaya.descripcion}</p>
                            <a href="#" class="btn btn-info">Ver más</a>
                        </div>
                    </div>
                    <div class="card bg-dark text-white text-center m-2" style="width: 18rem;">
                        <img class="card-img-top" src="${casacampo.src}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${casacampo.nombre}</h5>
                            <div class="row m-3">
                                <div class="col-sm">
                                    <p>Cuartos: ${casacampo.cuartos}<span></span></p>
                                </div>
                                <div class="col-sm">
                                    <p> Metros: ${casacampo.metros}</p>
                                </div>
                            </div>
                            <p class="card-text">${casacampo.descripcion}</p>
                            <a href="#" class="btn btn-info">Ver más</a>
                        </div>
                    </div>
                    <div class="card bg-dark text-white text-center m-2" style="width: 18rem;">
                        <img class="card-img-top" src="${casacampo.src}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${casacampo.nombre}</h5>
                            <div class="row m-3">
                                <div class="col-sm">
                                    <p>Cuartos: ${casacampo.cuartos}<span></span></p>
                                </div>
                                <div class="col-sm">
                                    <p> Metros: ${casacampo.metros}</p>
                                </div>
                            </div>
                            <p class="card-text">${casacampo.descripcion}</p>
                            <a href="#" class="btn btn-info">Ver más</a>
                        </div>
                    </div>
                    <div class="card bg-dark text-white text-center m-2" style="width: 18rem;">
                        <img class="card-img-top" src="${casacampo.src}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${casacampo.nombre}</h5>
                            <div class="row m-3">
                                <div class="col-sm">
                                    <p>Cuartos: ${casacampo.cuartos}<span></span></p>
                                </div>
                                <div class="col-sm">
                                    <p> Metros: ${casacampo.metros}</p>
                                </div>
                            </div>
                            <p class="card-text">${casacampo.descripcion}</p>
                            <a href="#" class="btn btn-info">Ver más</a>
                        </div>
                    </div>
                    <div class="card bg-dark text-white text-center m-2" style="width: 18rem;">
                        <img class="card-img-top" src="${casacampo.src}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${casacampo.nombre}</h5>
                            <div class="row m-3">
                                <div class="col-sm">
                                    <p>Cuartos: ${casacampo.cuartos}<span></span></p>
                                </div>
                                <div class="col-sm">
                                    <p> Metros: ${casacampo.metros}</p>
                                </div>
                            </div>
                            <p class="card-text">${casacampo.descripcion}</p>
                            <a href="#" class="btn btn-info">Ver más</a>
                        </div>
                    </div>
                    <div class="card bg-dark text-white text-center m-2" style="width: 18rem;">
                        <img class="card-img-top" src="${casacampo.src}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${casacampo.nombre}</h5>
                            <div class="row m-3">
                                <div class="col-sm">
                                    <p>Cuartos: ${casacampo.cuartos}<span></span></p>
                                </div>
                                <div class="col-sm">
                                    <p> Metros: ${casacampo.metros}</p>
                                </div>
                            </div>
                            <p class="card-text">${casacampo.descripcion}</p>
                            <a href="#" class="btn btn-info">Ver más</a>
                        </div>
                    </div>
    `

//const inmuebles = {
//    nombre: "Departamento",
//    descripcion: "Desde las alturas todo se ve mejor",
  //  src: "casa5",
    //cuartos: 3,
    //metros: 200
//},