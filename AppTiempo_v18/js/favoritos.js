const listado = document.querySelector(".cities");



//ajax Vigo
const urlVigo = `https://api.openweathermap.org/data/2.5/weather?id=3105976&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

fetch(urlVigo)
    .then(function (response) {
        let data = response.json();
        return data;
    }).then(data => {
            const {
                coord,
                main,
                name,
                sys,
                weather,
            } = data;

            const lista = document.createElement("li");
            lista.classList.add("city");
            const tarjetaCiudad = `
                <a onclick="abrirBotonVigo()" id="tarjeta_city"><div class="col s12 m7">

                                                      <div class="card tarjeta">

                                                                 <div class="card-image grey-text text-darken-2 tarjeta">
                                                                        <img src="tarjetasGIF/Vigo_fondo.png" class="fondo_card">
                                                                        <h2 onclick="abrirBotonVigo()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                        <br><span onclick="abrirBotonVigo()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                 </div>

                                                             </div>
                                                    </div></a>
                                                             `;


            lista.innerHTML = tarjetaCiudad;
            listado.appendChild(lista);

            const paginaNueva = document.querySelector("html");

        }
    );


    //ajax A Coruña
const urlCoruna = `https://api.openweathermap.org/data/2.5/weather?id=3119841&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

fetch(urlCoruna)
    .then(function (response) {
        let data = response.json();
        return data;
    }).then(data => {
            const {
                coord,
                main,
                name,
                sys,
                weather,
            } = data;

            const lista = document.createElement("li");
            lista.classList.add("city");

            const tarjetaCiudad = `
                <a onclick="abrirBotonCoruna()" id="tarjeta_city"><div class="col s12 m7">

                                                      <div class="card tarjeta">

                                                                 <div class="card-image grey-text text-darken-2 tarjeta">
                                                                 <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                        <h2 onclick="abrirBotonCoruna()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                        <br><span onclick="abrirBotonCoruna()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                 </div>

                                                             </div>
                                                    </div></a>
                                                             `;


            lista.innerHTML = tarjetaCiudad;
            listado.appendChild(lista);

            const paginaNueva = document.querySelector("html");

        }
    );

    //ajax Sanxenxo
    const urlSanxenxo = `https://api.openweathermap.org/data/2.5/weather?id=3110610&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

    fetch(urlSanxenxo)
        .then(function (response) {
            let data = response.json();
            return data;
        }).then(data => {
                const {
                    coord,
                    main,
                    name,
                    sys,
                    weather,
                } = data;

                const lista = document.createElement("li");
                lista.classList.add("city");

                const tarjetaCiudad = `
                    <a onclick="abrirBotonSanxenxo()" id="tarjeta_city"><div class="col s12 m7">

                                                          <div class="card tarjeta">

                                                                     <div class="card-image grey-text text-darken-2 tarjeta">
                                                                     <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                            <h2 onclick="abrirBotonSanxenxo()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                            <br><span onclick="abrirBotonSanxenxo()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                     </div>

                                                                 </div>
                                                        </div></a>
                                                                 `;


                lista.innerHTML = tarjetaCiudad;
                listado.appendChild(lista);

                const paginaNueva = document.querySelector("html");

            }
        );


//ajax Santiago de Compostela
const urlSantiago = `https://api.openweathermap.org/data/2.5/weather?id=3109642&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

fetch(urlSantiago)
    .then(function (response) {
        let data = response.json();
        return data;
    }).then(data => {
            const {
                coord,
                main,
                name,
                sys,
                weather,
            } = data;

            const lista = document.createElement("li");
            lista.classList.add("city");

            const tarjetaCiudad = `
                <a onclick="abrirBotonSantiago()" id="tarjeta_city"><div class="col s12 m7">

                                                      <div class="card tarjeta">

                                                                 <div class="card-image grey-text text-darken-2 tarjeta">
                                                                 <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                        <h2 onclick="abrirBotonSantiago()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                        <br><span onclick="abrirBotonSantiago()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                 </div>

                                                             </div>
                                                    </div></a>
                                                             `;


            lista.innerHTML = tarjetaCiudad;
            listado.appendChild(lista);

            const paginaNueva = document.querySelector("html");

        }
    );


//ajax Vilagaricía de Arousa
const urlVilagarcia = `https://api.openweathermap.org/data/2.5/weather?id=3105575&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

fetch(urlVilagarcia)
    .then(function (response) {
        let data = response.json();
        return data;
    }).then(data => {
            const {
                coord,
                main,
                name,
                sys,
                weather,
            } = data;

            const lista = document.createElement("li");
            lista.classList.add("city");

            const tarjetaCiudad = `
                <a onclick="abrirBotonVilagarcia()" id="tarjeta_city"><div class="col s12 m7">

                                                      <div class="card tarjeta">

                                                                 <div class="card-image grey-text text-darken-2 tarjeta">
                                                                 <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                        <h2 onclick="abrirBotonVilagarcia()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                        <br><span onclick="abrirBotonVilagarcia()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                 </div>

                                                             </div>
                                                    </div></a>
                                                             `;


            lista.innerHTML = tarjetaCiudad;
            listado.appendChild(lista);

            const paginaNueva = document.querySelector("html");

        }
    );

//ajax Ourense
const urlOurense = `https://api.openweathermap.org/data/2.5/weather?id=3114965&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

fetch(urlOurense)
    .then(function (response) {
        let data = response.json();
        return data;
    }).then(data => {
            const {
                coord,
                main,
                name,
                sys,
                weather,
            } = data;

            const lista = document.createElement("li");
            lista.classList.add("city");

            const tarjetaCiudad = `
                <a onclick="abrirBotonOurense()" id="tarjeta_city"><div class="col s12 m7">

                                                      <div class="card tarjeta">

                                                                 <div class="card-image grey-text text-darken-2 tarjeta">
                                                                 <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                        <h2 onclick="abrirBotonOurense()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                        <br><span onclick="abrirBotonOurense()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                 </div>

                                                             </div>
                                                    </div></a>
                                                             `;


            lista.innerHTML = tarjetaCiudad;
            listado.appendChild(lista);

            const paginaNueva = document.querySelector("html");

        }
    );

//ajax Pontevedra
const urlPontevedra = `https://api.openweathermap.org/data/2.5/weather?id=3113209&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

fetch(urlPontevedra)
    .then(function (response) {
        let data = response.json();
        return data;
    }).then(data => {
            const {
                coord,
                main,
                name,
                sys,
                weather,
            } = data;

            const lista = document.createElement("li");
            lista.classList.add("city");

            const tarjetaCiudad = `
                <a onclick="abrirBotonPontevedra()" id="tarjeta_city"><div class="col s12 m7">

                                                      <div class="card tarjeta">

                                                                 <div class="card-image grey-text text-darken-2 tarjeta">
                                                                 <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                        <h2 onclick="abrirBotonPontevedra()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                        <br><span onclick="abrirBotonPontevedra()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                 </div>

                                                             </div>
                                                    </div></a>
                                                             `;


            lista.innerHTML = tarjetaCiudad;
            listado.appendChild(lista);

            const paginaNueva = document.querySelector("html");

        }
    );

//ajax Lugo
const urlLugo = `https://api.openweathermap.org/data/2.5/weather?id=3117814&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

fetch(urlLugo)
    .then(function (response) {
        let data = response.json();
        return data;
    }).then(data => {
            const {
                coord,
                main,
                name,
                sys,
                weather,
            } = data;

            const lista = document.createElement("li");
            lista.classList.add("city");

            const tarjetaCiudad = `
                <a onclick="abrirBotonLugo()" id="tarjeta_city"><div class="col s12 m7">

                                                      <div class="card tarjeta">

                                                                 <div class="card-image grey-text text-darken-2 tarjeta">
                                                                 <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                        <h2 onclick="abrirBotonLugo()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                        <br><span onclick="abrirBotonLugo()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                 </div>

                                                             </div>
                                                    </div></a>
                                                             `;


            lista.innerHTML = tarjetaCiudad;
            listado.appendChild(lista);

            const paginaNueva = document.querySelector("html");

        }
    );

//ajax Ferrol
const urlFerrol = `https://api.openweathermap.org/data/2.5/weather?id=3123493&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

fetch(urlFerrol)
    .then(function (response) {
        let data = response.json();
        return data;
    }).then(data => {
            const {
                coord,
                main,
                name,
                sys,
                weather,
            } = data;

            const lista = document.createElement("li");
            lista.classList.add("city");

            const tarjetaCiudad = `
                <a onclick="abrirBotonFerrol()" id="tarjeta_city"><div class="col s12 m7">

                                                      <div class="card tarjeta">

                                                                 <div class="card-image grey-text text-darken-2 tarjeta">
                                                                 <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                        <h2 onclick="abrirBotonFerrol()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                        <br><span onclick="abrirBotonFerrol()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                 </div>

                                                             </div>
                                                    </div></a>
                                                             `;


            lista.innerHTML = tarjetaCiudad;
            listado.appendChild(lista);

            const paginaNueva = document.querySelector("html");

        }
    );

    //ajax Boiro
    const urlBoiro = `https://api.openweathermap.org/data/2.5/weather?id=3127889&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

    fetch(urlBoiro)
        .then(function (response) {
            let data = response.json();
            return data;
        }).then(data => {
                const {
                    coord,
                    main,
                    name,
                    sys,
                    weather,
                } = data;

                const lista = document.createElement("li");
                lista.classList.add("city");

                const tarjetaCiudad = `
                    <a onclick="abrirBotonBoiro()" id="tarjeta_city"><div class="col s12 m7">

                                                          <div class="card tarjeta">

                                                                     <div class="card-image grey-text text-darken-2 tarjeta">
                                                                     <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                            <h2 onclick="abrirBotonBoiro()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                            <br><span onclick="abrirBotonBoiro()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                     </div>

                                                                 </div>
                                                        </div></a>
                                                                 `;


                lista.innerHTML = tarjetaCiudad;
                listado.appendChild(lista);

                const paginaNueva = document.querySelector("html");

            }
        );

        //ajax Monforte
        const urlMonforte = `https://api.openweathermap.org/data/2.5/weather?id=3116478&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

        fetch(urlMonforte)
            .then(function (response) {
                let data = response.json();
                return data;
            }).then(data => {
                    const {
                        coord,
                        main,
                        name,
                        sys,
                        weather,
                    } = data;

                    const lista = document.createElement("li");
                    lista.classList.add("city");

                    const tarjetaCiudad = `
                        <a onclick="abrirBotonMonforte()" id="tarjeta_city"><div class="col s12 m7">

                                                              <div class="card tarjeta">

                                                                         <div class="card-image grey-text text-darken-2 tarjeta">
                                                                         <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                                <h2 onclick="abrirBotonMonforte()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                                <br><span onclick="abrirBotonMonforte()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                         </div>

                                                                     </div>
                                                            </div></a>
                                                                     `;


                    lista.innerHTML = tarjetaCiudad;
                    listado.appendChild(lista);

                    const paginaNueva = document.querySelector("html");

                }
            );

            //ajax A Estada
            const urlEstrada = `https://api.openweathermap.org/data/2.5/weather?id=3119746&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

            fetch(urlEstrada)
                .then(function (response) {
                    let data = response.json();
                    return data;
                }).then(data => {
                        const {
                            coord,
                            main,
                            name,
                            sys,
                            weather,
                        } = data;

                        const lista = document.createElement("li");
                        lista.classList.add("city");

                        const tarjetaCiudad = `
                            <a onclick="abrirBotonEstrada()" id="tarjeta_city"><div class="col s12 m7">

                                                                  <div class="card tarjeta">

                                                                             <div class="card-image grey-text text-darken-2 tarjeta">
                                                                             <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                                    <h2 onclick="abrirBotonEstrada()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                                    <br><span onclick="abrirBotonEstrada()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                             </div>

                                                                         </div>
                                                                </div></a>
                                                                         `;


                        lista.innerHTML = tarjetaCiudad;
                        listado.appendChild(lista);

                        const paginaNueva = document.querySelector("html");

                    }
                );

                //ajax Viveiro
                const urlViveiro = `https://api.openweathermap.org/data/2.5/weather?id=3104475&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

                fetch(urlViveiro)
                    .then(function (response) {
                        let data = response.json();
                        return data;
                    }).then(data => {
                            const {
                                coord,
                                main,
                                name,
                                sys,
                                weather,
                            } = data;

                            const lista = document.createElement("li");
                            lista.classList.add("city");

                            const tarjetaCiudad = `
                                <a onclick="abrirBotonViveiro()" id="tarjeta_city"><div class="col s12 m7">

                                                                      <div class="card tarjeta">

                                                                                 <div class="card-image grey-text text-darken-2 tarjeta">
                                                                                 <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                                        <h2 onclick="abrirBotonViveiro()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                                        <br><span onclick="abrirBotonViveiro()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                                 </div>

                                                                             </div>
                                                                    </div></a>
                                                                             `;


                            lista.innerHTML = tarjetaCiudad;
                            listado.appendChild(lista);

                            const paginaNueva = document.querySelector("html");

                        }
                    );

                    //ajax Nigrán
                    const urlNigran = `https://api.openweathermap.org/data/2.5/weather?id=6360235&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

                    fetch(urlNigran)
                        .then(function (response) {
                            let data = response.json();
                            return data;
                        }).then(data => {
                                const {
                                    coord,
                                    main,
                                    name,
                                    sys,
                                    weather,
                                } = data;

                                const lista = document.createElement("li");
                                lista.classList.add("city");

                                const tarjetaCiudad = `
                                    <a onclick="abrirBotonNigran()" id="tarjeta_city"><div class="col s12 m7">

                                                                          <div class="card tarjeta">

                                                                                     <div class="card-image grey-text text-darken-2 tarjeta">
                                                                                     <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                                            <h2 onclick="abrirBotonNigran()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                                            <br><span onclick="abrirBotonNigran()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                                     </div>

                                                                                 </div>
                                                                        </div></a>
                                                                                 `;


                                lista.innerHTML = tarjetaCiudad;
                                listado.appendChild(lista);

                                const paginaNueva = document.querySelector("html");

                            }
                        );

                        //ajax Xinzo
                        const urlXinzo = `https://api.openweathermap.org/data/2.5/weather?id=3121404&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

                        fetch(urlXinzo)
                            .then(function (response) {
                                let data = response.json();
                                return data;
                            }).then(data => {
                                    const {
                                        coord,
                                        main,
                                        name,
                                        sys,
                                        weather,
                                    } = data;

                                    const lista = document.createElement("li");
                                    lista.classList.add("city");

                                    const tarjetaCiudad = `
                                        <a onclick="abrirBotonXinzo()" id="tarjeta_city"><div class="col s12 m7">

                                                                              <div class="card tarjeta">

                                                                                         <div class="card-image grey-text text-darken-2 tarjeta">
                                                                                         <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                                                <h2 onclick="abrirBotonXinzo()" class="card-title estado-name"><span class="city-name">${name}</span></h2>
                                                                                                <br><span onclick="abrirBotonXinzo()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>
                                                                                         </div>

                                                                                     </div>
                                                                            </div></a>
                                                                                     `;


                                    lista.innerHTML = tarjetaCiudad;
                                    listado.appendChild(lista);

                                    const paginaNueva = document.querySelector("html");

                                }
                            );
