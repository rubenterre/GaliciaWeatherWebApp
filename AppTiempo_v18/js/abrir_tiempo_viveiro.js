// Abrir enlaces de ciudades


function abrirBotonViveiro() {

  var nom = document.querySelector(".city-name").textContent;
  localStorage.setItem("Ciudad", nom);

  let inputVal = localStorage.getItem("Ciudad");
  console.log(inputVal);


  //ajax
  const url = `https://api.openweathermap.org/data/2.5/weather?id=3104475&appid=3e867330616c39fa60d18a1af5d82f16&units=metric&lang=gl`;

  fetch(url)
    .then(function (response) {
      let data = response.json();
      return data;
    }).then(function (data) {
      lat = data.coord.lat;
      lon = data.coord.lon;

      const marcado = `
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          
            <meta name="theme-color" content="#0D47A1">
          
            <link rel="icon" href="images/favicon.png">
            <title>Tempo App</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
              rel="stylesheet">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <link rel="stylesheet" href="css/materialize.css">
            <link rel="stylesheet" href="css/line-awesome.css">
            <link rel="stylesheet" href="css/line-awesome-font-awesome.css">
            <link rel="stylesheet" href="css/style.css">          
          
          </head>
          
          <body>
          
          
            <!-- Barra baja Menú -->
          
          
            <div class="nav-wrapper  barrabaja">
              <ul class="navBaja">
                <li class="creditos"><a href="about.html"><i class=" material-icons iconos_barra ">info</i></a>
                  <p class="tit_menu">Información</p>
                </li>
                <li class="mapas"><a href="VANE/apps/leaflet-owm.html"><i
                      class=" material-icons iconos_barra">track_changes</i></a>
                  <p class="tit_menu">Radar</p>
                </li>
                <li class="inicio"><a href="index.html"><i class=" material-icons iconos_inicio">home</i></a>
                  <p class="tit_menu">Inicio</p>
                </li>
                <li class="ciudades"><a href="favoritos.html"><i class=" material-icons iconos_barra">location_city</i></a>
                  <p class="tit_menu">Cidades</p>
                </li>
                <li class="busquedas"><a href="buscador_1.html"><i class=" material-icons iconos_barra ">search</i></a>
                  <p class="tit_menu">Procurar</p>
                </li>
              </ul>
            </div>
          
            <!-- O Tempo -->

            <div class="center">
          
              <div class="white-text PanelPrincipal">
                <div class="container">
                  <div class="row">
                    <div class="notification"> </div>
                    <div class="weather-container">
                      <div class="col s12 location">
                        <p>-</p>
                      </div>
                      <div class="col s12 fechaHoy">
                        <p></p>
                      </div>
                      <div class="col s12 temperature-value center">
                        <p>- <sub>°</sub></p>
                      </div>
                      <div class="col s12 weather-icon center">
                        <img src="images/cargando2.gif" alt="">
                      </div>
                    </div>
                    <div class="weather-datos">
                      <div class="col s12 temperature-description center">
                        <p> - </p>
                      </div>
                      <div class="col s12 frases">
                        <p></p>
                      </div>
                    </div>
          
                  </div>
                </div>
              </div>
          
              <div class="caja_dias">
          
                <div class="dias_venideros">
                  <div class="mas_una_hora horasDestacadas">
                    <p></p>
                  </div>
                  <div class="weather-icon-mas_una center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_una">
                    <p></p>
                  </div>
          
                </div>
          
                <div class="dias_venideros">
                  <div class="mas_dos_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class="weather-icon-mas_dos center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_dos">
                    <p></p>
                  </div>
          
                </div>
          
                <div class="dias_venideros">
                  <div class="mas_tres_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class="weather-icon-mas_tres center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_tres">
                    <p></p>
                  </div>
          
                </div>
          
                <div class="dias_venideros">
                  <div class="mas_cuatro_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class=" weather-icon-mas_cuatro center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class=" temp-mas_cuatro">
                    <p></p>
                  </div>
          
                </div>
          
                <div class="dias_venideros">
                  <div class="mas_cinco_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class="weather-icon-mas_cinco center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_cinco">
                    <p></p>
                  </div>
          
                </div>
          
                <div class="dias_venideros">
                  <div class="mas_seis_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class=" weather-icon-mas_seis center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class=" temp-mas_seis">
                    <p></p>
                  </div>
          
                </div>
          
                <div class="dias_venideros">
                  <div class="mas_siete_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class=" weather-icon-mas_siete center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_siete">
                    <p></p>
                  </div>
          
                </div>
          
                <div class=" dias_venideros">
                  <div class="mas_ocho_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class=" weather-icon-mas_ocho center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_ocho">
                    <p></p>
                  </div>
          
                </div>
          
                <div class=" dias_venideros">
                  <div class="mas_nueve_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class=" weather-icon-mas_nueve weather-icon_hora_general center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_nueve">
                    <p></p>
                  </div>
          
                </div>
          
                <div class=" dias_venideros">
                  <div class="mas_diez_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class=" weather-icon-mas_diez weather-icon_hora_general center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_diez">
                    <p></p>
                  </div>
          
                </div>
          
                <div class=" dias_venideros">
                  <div class="mas_once_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class=" weather-icon-mas_once weather-icon_hora_general center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_once">
                    <p></p>
                  </div>
          
                </div>
          
                <div class=" dias_venideros">
                  <div class="mas_doce_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class=" weather-icon-mas_doce weather-icon_hora_general center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_doce">
                    <p></p>
                  </div>
          
                </div>
          
                <div class=" dias_venideros">
                  <div class="mas_trece_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class=" weather-icon-mas_trece  weather-icon_hora_general center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_trece">
                    <p></p>
                  </div>
          
                </div>
          
                <div class=" dias_venideros">
                  <div class="mas_catorce_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class=" weather-icon-mas_catorce weather-icon_hora_general center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_catorce">
                    <p></p>
                  </div>
          
                </div>
          
                <div class=" dias_venideros">
                  <div class="mas_quince_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class=" weather-icon-mas_quince weather-icon_hora_general center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_quince">
                    <p></p>
                  </div>
          
                </div>
          
                <div class=" dias_venideros">
                  <div class="mas_dieciseis_hora horasDestacadas">
                    <p></p>
                  </div>
          
                  <div class=" weather-icon-mas_dieciseis weather-icon_hora_general center">
                    <img src="images/cargando2.gif" alt="">
                  </div>
                  <div class="temp-mas_dieciseis">
                    <p></p>
                  </div>
          
                </div>
          
              </div>
          
          
          
              <div class="col s12 datosTecnicosCard">
          
                <div class="container">
                  <div class="pronos_horas">
                    <div class="row">
          
                      <div class="col s12 mas_una prox_horas centrarItems">
                        <div class="col s4 tit-diario">
                          <p>Mañá</p>
          
                          <div class="tit-mes">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s4 weather-icon-manana center">
                          <img src="images/cargando2.gif" alt="">
                        </div>
                        <div class="col s2 tempmax-manana temp_font">
                          <p></p>
                        </div>
                        <div class="col s2 tempmin-manana temp_font">
                          <p></p>
                        </div>
          
                      </div>
                      <div class="col s12 mas_dos prox_horas centrarItems">
                        <div class="col s4 tit-pasado">
                          <p></p>
                          <div class="tit-mes_pasado">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s4 weather-icon-pasado center">
                          <img src="images/cargando2.gif" alt="">
                        </div>
                        <div class="col s2 tempmax-pasado temp_font">
                          <p></p>
                        </div>
                        <div class="col s2 tempmin-pasado temp_font">
                          <p></p>
                        </div>
                      </div>
                      <div class="col s12 mas_tres prox_horas centrarItems">
                        <div class="col s4 tit-en_dos_dias">
                          <p></p>
                          <div class="tit-mes_en_dos_dias">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s4 weather-icon-en_dos_dias center">
                          <img src="images/cargando2.gif" alt="">
                        </div>
                        <div class="col s2 tempmax-en_dos_dias temp_font">
                          <p></p>
                        </div>
                        <div class="col s2 tempmin-en_dos_dias temp_font">
                          <p></p>
                        </div>
                      </div>
                      <div class="col s12 mas_cuatro prox_horas centrarItems">
                        <div class="col s4 tit-en_tres_dias">
                          <p></p>
                          <div class="tit-mes_en_tres_dias">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s4 weather-icon-en_tres_dias center">
                          <img src="images/cargando2.gif" alt="">
                        </div>
                        <div class="col s2 tempmax-en_tres_dias temp_font">
                          <p></p>
                        </div>
                        <div class="col s2 tempmin-en_tres_dias temp_font">
                          <p></p>
                        </div>
                      </div>
                      <div class="col s12 mas_cinco prox_horas centrarItems">
                        <div class="col s4 tit-en_cuatro_dias">
                          <p></p>
                          <div class="tit-mes_en_cuatro_dias">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s4 weather-icon-en_cuatro_dias center">
                          <img src="images/cargando2.gif" alt="">
                        </div>
                        <div class="col s2 tempmax-en_cuatro_dias temp_font">
                          <p></p>
                        </div>
                        <div class="col s2 tempmin-en_cuatro_dias temp_font">
                          <p></p>
                        </div>
                      </div>
                      <div class="col s12 mas_seis prox_horas centrarItems">
                        <div class="col s4 tit-en_cinco_dias">
                          <p></p>
                          <div class="tit-mes_en_cinco_dias">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s4 weather-icon-en_cinco_dias center">
                          <img src="images/cargando2.gif" alt="">
                        </div>
                        <div class="col s2 tempmax-en_cinco_dias temp_font">
                          <p></p>
                        </div>
                        <div class="col s2 tempmin-en_cinco_dias temp_font">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
          
          
                  <div class="PanelDatosInicio">
                    <div class="container">
                      <div class="row">
                        <div class="col s6 DatosEsencialesInicio">
                          <img src="images/temperMax.png" width="20%" alt="Temperatura máxima">
                          <p class="tit_icon">
                            Temp. Máx.
                          </p>
                          <div class="chip tempmax">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s6 DatosEsencialesInicio">
                          <img src="images/temperMin.png" width="20%" alt="Temperatura mínima">
                          <p class="tit_icon">
                            Temp. Min.
                          </p>
                          <div class="chip tempmin">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s6 DatosEsenciales">
                          <img src="images/wind.png" width="20%" alt="Velocidad del viento">
                          <p class="tit_icon">
                            Vento
                          </p>
                          <div class="chip wind">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s6 DatosEsenciales">
                          <img src="images/feel_like.png" width="20%" class="center" alt="Sensación térmica">
                          <p class="tit_icon">
                            Sensación térmica
                          </p>
                          <div class="chip feel-like">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s6 DatosEsenciales">
                          <img src="images/humidity.png" width="20%" alt="Humedad">
                          <p class="tit_icon">
                            Humedad
                          </p>
                          <div class="chip humidity">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s6 DatosEsenciales">
                          <img src="images/pressure.png" width="20%" alt="Presión atmosférica">
                          <p class="tit_icon">
                            Presión
                          </p>
                          <div class="chip pressure">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s6 DatosEsenciales">
                          <img src="images/uvi.png" width="20%" alt="Índice UVI">
                          <p class="tit_icon">
                            Índice UV
                          </p>
                          <div class="chip uvi">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s6 DatosEsenciales">
                          <img src="images/visibilidad.png" width="20%" alt="Visibilidad">
                          <p class="tit_icon">
                            Visibilidad
                          </p>
                          <div class="chip visibilidad">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s6">
                          <img src="images/sunrise.png" width="20%" alt="Amanecer">
                          <div class="chip sunrise">
                            <p></p>
                          </div>
                        </div>
                        <div class="col s6">
                          <img src="images/sunset.png" width="20%" alt="Ocaso">
                          <div class="chip sunset">
                            <p></p>
                          </div>
                        </div>
          
                        <div class="white-text">
                          <div class="container">
                            <div class="row">
                              <div class="fases_lunares col s12">
                
                                <div id="ex2"></div>
                              </div>
                            </div>
                          </div>
                        </div>
          
                      </div>
                    </div>
                  </div>
          
                </div>
              </div>
          
              <footer>
                <hr
                  style="border-top: 1px solid rgba(255, 255, 255, 0.5); border-bottom: 0px; border-left: 0px; border-right: 0px; padding-bottom:10px;">
                <a href="https://www.rubenterre.com"><img src="images/Ruben_Terre_Logo_blanco_131119.svg" class="logo_rubenterre"
                    width="20%" alt=""> </a>
          
              </footer>
          
              <script src="js/jquery.min.js"></script>
              <script src="js/materialize.js"></script>
              <script src="js/fases_lunares.js"></script>
          
          
              <script>
                // Initialize collapse button
                $(".button-collapse").sideNav();
          
              </script>
          </body>
        `


      paginaNueva.innerHTML = marcado;


      // Posicionar al usuario
      var latitude = lat;
      var longitude = lon;
      console.log(latitude);
      console.log(longitude);
      getWeather(latitude, longitude);
      getWeatherDaily(latitude, longitude);

      // App data
      const weather = {};

      weather.temperature = {
        unit: "celsius"
      }


      // Mostrar error
      function showError(error) {
        notificationElement.style.display = "block";
        notificationElement.innerHTML = `<p> ${error.message} </p>`;
      }


      // Selectores
      const iconElement = document.querySelector(".weather-icon");
      const tempElement = document.querySelector(".temperature-value p");
      const descElement = document.querySelector(".temperature-description p");
      const locationElement = document.querySelector(".location p");
      const notificationElement = document.querySelector(".notification");
      const feelsLike = document.querySelector(".feel-like p");
      const wind = document.querySelector(".wind p");
      const humidity = document.querySelector(".humidity p");
      const pressure = document.querySelector(".pressure p");
      const tempmax = document.querySelector(".tempmax p");
      const tempmin = document.querySelector(".tempmin p");

      const diaMes = document.querySelector(".tit-mes p")
      const iconElementManana = document.querySelector(".weather-icon-manana");
      const tempmaxM = document.querySelector(".tempmax-manana p");
      const tempminM = document.querySelector(".tempmin-manana p");

      const diaPasado = document.querySelector(".tit-pasado p");
      const diaMesPasado = document.querySelector(".tit-mes_pasado p")
      const iconElementPasado = document.querySelector(".weather-icon-pasado");
      const tempmaxP = document.querySelector(".tempmax-pasado p");
      const tempminP = document.querySelector(".tempmin-pasado p");

      const diaEnDosDias = document.querySelector(".tit-en_dos_dias p");
      const diaMesEnDosDias = document.querySelector(".tit-mes_en_dos_dias p")
      const iconElementEnDosDias = document.querySelector(".weather-icon-en_dos_dias");
      const tempmaxEnDosDias = document.querySelector(".tempmax-en_dos_dias p");
      const tempminEnDosDias = document.querySelector(".tempmin-en_dos_dias p");

      const diaEnTresDias = document.querySelector(".tit-en_tres_dias p");
      const diaMesEnTresDias = document.querySelector(".tit-mes_en_tres_dias p")
      const iconElementEnTresDias = document.querySelector(".weather-icon-en_tres_dias");
      const tempmaxEnTresDias = document.querySelector(".tempmax-en_tres_dias p");
      const tempminEnTresDias = document.querySelector(".tempmin-en_tres_dias p");

      const diaEnCuatroDias = document.querySelector(".tit-en_cuatro_dias p");
      const diaMesEnCuatroDias = document.querySelector(".tit-mes_en_cuatro_dias p")
      const iconElementEnCuatroDias = document.querySelector(".weather-icon-en_cuatro_dias");
      const tempmaxEnCuatroDias = document.querySelector(".tempmax-en_cuatro_dias p");
      const tempminEnCuatroDias = document.querySelector(".tempmin-en_cuatro_dias p");

      const diaEnCincoDias = document.querySelector(".tit-en_cinco_dias p");
      const diaMesEnCincoDias = document.querySelector(".tit-mes_en_cinco_dias p")
      const iconElementEnCincoDias = document.querySelector(".weather-icon-en_cinco_dias");
      const tempmaxEnCincoDias = document.querySelector(".tempmax-en_cinco_dias p");
      const tempminEnCincoDias = document.querySelector(".tempmin-en_cinco_dias p");

      const iconElementMasUna = document.querySelector(".weather-icon-mas_una");
      const tempMasUna = document.querySelector(".temp-mas_una p");
      const iconElementMasDos = document.querySelector(".weather-icon-mas_dos");
      const tempMasDos = document.querySelector(".temp-mas_dos p");
      const iconElementMasTres = document.querySelector(".weather-icon-mas_tres");
      const tempMasTres = document.querySelector(".temp-mas_tres p");
      const iconElementMasCuatro = document.querySelector(".weather-icon-mas_cuatro");
      const tempMasCuatro = document.querySelector(".temp-mas_cuatro p");
      const iconElementMasCinco = document.querySelector(".weather-icon-mas_cinco");
      const tempMasCinco = document.querySelector(".temp-mas_cinco p");
      const iconElementMasSeis = document.querySelector(".weather-icon-mas_seis");
      const tempMasSeis = document.querySelector(".temp-mas_seis p");
      const iconElementMasSiete = document.querySelector(".weather-icon-mas_siete");
      const tempMasSiete = document.querySelector(".temp-mas_siete p");
      const iconElementMasOcho = document.querySelector(".weather-icon-mas_ocho");
      const tempMasOcho = document.querySelector(".temp-mas_ocho p");
      const masUnaHora = document.querySelector(".mas_una_hora p");
      const masDosHora = document.querySelector(".mas_dos_hora p");
      const masTresHora = document.querySelector(".mas_tres_hora p");
      const masCuatroHora = document.querySelector(".mas_cuatro_hora p");
      const masCincoHora = document.querySelector(".mas_cinco_hora p");
      const masSeisHora = document.querySelector(".mas_seis_hora p");
      const masSieteHora = document.querySelector(".mas_siete_hora p");
      const masOchoHora = document.querySelector(".mas_ocho_hora p");
      const uvi = document.querySelector(".uvi p");
      const visibilidad = document.querySelector(".visibilidad p");

      const barUna = document.querySelector(".bar_hora_uno");
      const barDos = document.querySelector(".bar_hora_dos");
      const barTres = document.querySelector(".bar_hora_tres");
      const barCuatro = document.querySelector(".bar_hora_cuatro");
      const barCinco = document.querySelector(".bar_hora_cinco");
      const barSeis = document.querySelector(".bar_hora_seis");


      const sunsetValue = document.querySelector(".sunset p");
      const sunriseValue = document.querySelector(".sunrise p");



      // Proveedor del tiempo diario
      function getWeatherDaily(latitude, longitude) {
        let apidos = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric&lang=gl `;


        fetch(apidos)
          .then(function (response) {
            let dataDaily = response.json();
            return dataDaily;
          })
          .then(function (dataDaily) {
            weather.city = dataDaily.name;
            weather.country = dataDaily.sys.country;
            weather.icon = dataDaily.weather[0].icon;

            // Frases en función del tiempo

            var frase;

            switch (weather.icon) {
              case '01d':
                frase = "Non esquezas as lentes de sol";
                break;

              case '01n':
                frase = "Esta é boa noite para ver as estrelas";
                break;

              case '02d':
                frase = "Bo día para facer deporte ó aire libre";
                break;

              case '02n':
                frase = "Hoxe é boa noite para sair a tomar unhas cuncas";
                break;

              case '03d':
                frase = "Nubes a esgalla, pero polo de agora non chove";
                break;

              case '03n':
                frase = "Aproveita para saír que toca noite tranquiliña";
                break;

              case '04d':
                frase = "Ceo empedrado, solo mollado";
                break;

              case '04n':
                frase = "As únicas estrelas que verás hoxe son as da Estrela Galicia";
                break;

              case '09d':
                frase = "Se tiñas pensado tendela roupa fora, hoxe non é o día.";
                break;

              case '09n':
                frase = "Se vas saír apaña un paraugas";
                break;

              case '10d':
                frase = "Non esquezas o paraugas";
                break;

              case '10n':
                frase = "Noite de paraugas";
                break;

              case '11d':
                frase = "O paraugas hoxe de pouco vai servir";
                break;

              case '11n':
                frase = "Se podes, hoxe queda na casa";
                break;

              case '13d':
                frase = "Non esquezas as luvas, a bufanda e o gorro";
                break;

              case '13n':
                frase = "¡Fai un frío de carallo!";
                break;

              case '50d':
                frase = "Non esquezas unha rebequiña";
                break;

              case '50n':
                frase = "Non esquezas ir abrigado";
                break;

              case 'unknown':
                frase = "Agardando polo pronóstico";
                break;
            }

            document.querySelector(".frases p").innerHTML = frase;



          })
          .then(function () {
            displayWeatherDaily();
          });
      }


      // Proveedor del tiempo
      function getWeather(latitude, longitude) {
        let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${key}&units=metric&lang=gl`;


        fetch(api)
          .then(function (response) {
            let data = response.json();
            return data;
          })
          .then(function (data) {
            weather.temperature.value = Math.round(data.current.temp);
            weather.description = data.current.weather[0].description;
            weather.iconId = data.current.weather[0].icon;
            weather.feels = Math.round(data.current.feels_like);
            weather.wind = data.current.wind_speed;
            weather.humidity = data.current.humidity;
            weather.pressure = data.current.pressure;
            weather.tempmax = data.daily[0].temp.max;
            weather.tempmin = data.daily[0].temp.min;


            weather.tempmaxM = Math.round(data.daily[1].temp.max);
            weather.tempminM = Math.round(data.daily[1].temp.min);
            weather.iconElementManana = data.daily[1].weather[0].icon;

            weather.tempmaxP = Math.round(data.daily[2].temp.max);
            weather.tempminP = Math.round(data.daily[2].temp.min);
            weather.iconElementPasado = data.daily[2].weather[0].icon;

            weather.tempmaxEnDosDias = Math.round(data.daily[3].temp.max);
            weather.tempminEnDosDias = Math.round(data.daily[3].temp.min);
            weather.iconElementEnDosDias = data.daily[3].weather[0].icon;

            weather.tempmaxEnTresDias = Math.round(data.daily[4].temp.max);
            weather.tempminEnTresDias = Math.round(data.daily[4].temp.min);
            weather.iconElementEnTresDias = data.daily[4].weather[0].icon;

            weather.tempmaxEnCuatroDias = Math.round(data.daily[5].temp.max);
            weather.tempminEnCuatroDias = Math.round(data.daily[5].temp.min);
            weather.iconElementEnCuatroDias = data.daily[5].weather[0].icon;

            weather.tempmaxEnCincoDias = Math.round(data.daily[6].temp.max);
            weather.tempminEnCincoDias = Math.round(data.daily[6].temp.min);
            weather.iconElementEnCincoDias = data.daily[6].weather[0].icon;


            weather.tempMasUna = Math.round(data.hourly[1].temp);
            weather.iconElementMasUna = data.hourly[1].weather[0].icon;
            weather.tempMasDos = Math.round(data.hourly[2].temp);
            weather.iconElementMasDos = data.hourly[2].weather[0].icon;
            weather.tempMasTres = Math.round(data.hourly[3].temp);
            weather.iconElementMasTres = data.hourly[3].weather[0].icon;
            weather.tempMasCuatro = Math.round(data.hourly[4].temp);
            weather.iconElementMasCuatro = data.hourly[4].weather[0].icon;
            weather.tempMasCinco = Math.round(data.hourly[5].temp);
            weather.iconElementMasCinco = data.hourly[5].weather[0].icon;
            weather.tempMasSeis = Math.round(data.hourly[6].temp);
            weather.iconElementMasSeis = data.hourly[6].weather[0].icon;
            weather.tempMasSiete = Math.round(data.hourly[7].temp);
            weather.iconElementMasSiete = data.hourly[7].weather[0].icon;
            weather.tempMasOcho = Math.round(data.hourly[8].temp);
            weather.iconElementMasOcho = data.hourly[8].weather[0].icon;
            weather.masUnaHora = data.hourly[1].dt;
            weather.masDosHora = data.hourly[2].dt;
            weather.masTresHora = data.hourly[3].dt;
            weather.masCuatroHora = data.hourly[4].dt;
            weather.masCincoHora = data.hourly[5].dt;
            weather.masSeisHora = data.hourly[6].dt;
            weather.masSieteHora = data.hourly[7].dt;
            weather.masOchoHora = data.hourly[8].dt;
            weather.uvi = data.current.uvi;
            weather.visibilidad = data.current.visibility;
            weather.barsUna = data.daily[1].pop;
            weather.barsDos = data.daily[2].pop;
            weather.barsTres = data.daily[3].pop;
            weather.barsCuatro = data.daily[4].pop;
            weather.barsCinco = data.daily[5].pop;
            weather.barsSeis = data.daily[6].pop;


            weather.sunrise = data.current.sunrise;
            weather.sunset = data.current.sunset;

            //Convertir a km

            var visibilidadConvert = weather.visibilidad;
            var conversion = visibilidadConvert / 1000;
            visibilidad.innerHTML = `${conversion} km`;

            //Convertir en dias de la semana


            weather.diaMes = data.daily[1].dt;
            var diaMesManana = weather.diaMes;
            console.log(diaMesManana);
            var eldiaManana = new Date(diaMesManana * 1000);
            console.log(eldiaManana);
            var diatimesdiaManana = eldiaManana.getDate();
            console.log(diatimesdiaManana);
            var meses = ["Xan.", "Feb.", "Mar.", "Abr.", "Mai.", "Xuñ.", "Xul.", "Ago.", "Set.", "Out.", "Nov.", "Dec."];
            var mestimesdiaManana = meses[eldiaManana.getMonth()];
            console.log(mestimesdiaManana);
            diaMes.innerHTML = `${diatimesdiaManana} de ${mestimesdiaManana}`;

            weather.diaPasado = data.daily[2].dt;
            var diadosPasado = weather.diaPasado;
            var eldiadosPasado = new Date(diadosPasado * 1000);
            var days = ["Dom", "Lun", "Mar", "Mér", "Xov", "Ven", "Sáb"];
            var nombresemanadiadosPasado = days[eldiadosPasado.getDay()];
            diaPasado.innerHTML = `${nombresemanadiadosPasado}`;
            var diatimesdiadosPasado = eldiadosPasado.getDate();
            var mestimesdiadosPasado = meses[eldiadosPasado.getMonth()];
            diaMesPasado.innerHTML = `${diatimesdiadosPasado} de ${mestimesdiadosPasado}`;

            weather.diaEnDosDias = data.daily[3].dt;
            var diados = weather.diaEnDosDias;
            var eldiados = new Date(diados * 1000);
            var daysDos = ["Dom", "Lun", "Mar", "Mér", "Xov", "Ven", "Sáb"];
            var nombresemanadiados = daysDos[eldiados.getDay()];
            diaEnDosDias.innerHTML = `${nombresemanadiados}`;
            var diatimesdiados = eldiados.getDate();
            var mestimesdiados = meses[eldiados.getMonth()];
            diaMesEnDosDias.innerHTML = `${diatimesdiados} de ${mestimesdiados}`;


            weather.diaEnTresDias = data.daily[4].dt;
            var diatres = weather.diaEnTresDias;
            var eldiatres = new Date(diatres * 1000);
            console.log(eldiatres);
            var daysTres = ["Dom", "Lun", "Mar", "Mér", "Xov", "Ven", "Sáb"];
            console.log(daysTres);
            var nombresemanadiatres = daysTres[eldiatres.getDay()];
            console.log(nombresemanadiatres);
            diaEnTresDias.innerHTML = `${nombresemanadiatres}`;
            var diatimesdiatres = eldiatres.getDate();
            var mestimesdiatres = meses[eldiatres.getMonth()];
            diaMesEnTresDias.innerHTML = `${diatimesdiatres} de ${mestimesdiatres}`;

            weather.diaEnCuatroDias = data.daily[5].dt;
            var diacuatro = weather.diaEnCuatroDias;
            var eldiacuatro = new Date(diacuatro * 1000);
            var daysCuatro = ["Dom", "Lun", "Mar", "Mér", "Xov", "Ven", "Sáb"];
            var nombresemanadiacuatro = daysCuatro[eldiacuatro.getDay()];
            diaEnCuatroDias.innerHTML = `${nombresemanadiacuatro}`;
            var diatimesdiacuatro = eldiacuatro.getDate();
            var mestimesdiacuatro = meses[eldiacuatro.getMonth()];
            diaMesEnCuatroDias.innerHTML = `${diatimesdiacuatro} de ${mestimesdiacuatro}`;

            weather.diaEnCincoDias = data.daily[6].dt;
            var diacinco = weather.diaEnCincoDias;
            var eldiacinco = new Date(diacinco * 1000);
            var daysCinco = ["Dom", "Lun", "Mar", "Mér", "Xov", "Ven", "Sáb"];
            var nombresemanadiacinco = daysCinco[eldiacinco.getDay()];
            diaEnCincoDias.innerHTML = `${nombresemanadiacinco}`;
            var diatimesdiacinco = eldiacinco.getDate();
            var mestimesdiacinco = meses[eldiacinco.getMonth()];
            diaMesEnCincoDias.innerHTML = `${diatimesdiacinco} de ${mestimesdiacinco}`;

            //Convertir en horas
            var horauna = weather.masUnaHora;
            var lahorauna = new Date(horauna * 1000);
            var timesLahorauna = lahorauna.getHours();
            masUnaHora.innerHTML = `${timesLahorauna}h`;

            var horados = weather.masDosHora;
            var lahorados = new Date(horados * 1000);
            var timesLahorados = lahorados.getHours();
            masDosHora.innerHTML = `${timesLahorados}h`;

            var horatres = weather.masTresHora;
            var lahoratres = new Date(horatres * 1000);
            var timesLahoratres = lahoratres.getHours();
            masTresHora.innerHTML = `${timesLahoratres}h`;

            var horacuatro = weather.masCuatroHora;
            var lahoracuatro = new Date(horacuatro * 1000);
            var timesLahoracuatro = lahoracuatro.getHours();
            masCuatroHora.innerHTML = `${timesLahoracuatro}h`;

            var horacinco = weather.masCincoHora;
            var lahoracinco = new Date(horacinco * 1000);
            var timesLahoracinco = lahoracinco.getHours();
            masCincoHora.innerHTML = `${timesLahoracinco}h`;

            var horaseis = weather.masSeisHora;
            var lahoraseis = new Date(horaseis * 1000);
            var timesLahoraseis = lahoraseis.getHours();
            masSeisHora.innerHTML = `${timesLahoraseis}h`;

            var horasiete = weather.masSieteHora;
            var lahorasiete = new Date(horasiete * 1000);
            var timesLahorasiete = lahorasiete.getHours();
            masSieteHora.innerHTML = `${timesLahorasiete}h`;

            var horaocho = weather.masOchoHora;
            var lahoraocho = new Date(horaocho * 1000);
            var timesLahoraocho = lahoraocho.getHours();
            masOchoHora.innerHTML = `${timesLahoraocho}h`;


            //Convertir amanecer y ocaso

            var sunrise = weather.sunrise;
            var date = new Date(sunrise * 1000);
            console.log(date);
            var timestrSunrise = date.toLocaleTimeString();
            sunriseValue.innerHTML = timestrSunrise;


            var sunset = weather.sunset;
            var date = new Date(sunset * 1000);
            var timestrSunset = date.toLocaleTimeString();
            sunsetValue.innerHTML = timestrSunset;


            // Cambiar a noche o día el fondo de pantalla

            var fondo = document.querySelector("body");

            function cambiarColorNoche() {
              fondo.classList.add("fondo_noche");
              fondo.classList.remove("fondo_dia");
              fondo.classList.remove("fondo_sol");
              fondo.classList.remove("fondo_tormenta");
            }

            function cambiarColorDia() {
              fondo.classList.add("fondo_dia");
              fondo.classList.remove("fondo_noche");
              fondo.classList.remove("fondo_sol");
              fondo.classList.remove("fondo_tormenta");
            }

            function cambiarColorSol() {
              fondo.classList.add("fondo_sol");
              fondo.classList.remove("fondo_dia");
              fondo.classList.remove("fondo_noche");
              fondo.classList.remove("fondo_tormenta");
            }

            function cambiarColorTomenta() {
              fondo.classList.add("fondo_tormenta");
              fondo.classList.remove("fondo_sol");
              fondo.classList.remove("fondo_dia");
              fondo.classList.remove("fondo_noche");
            }

            switch (weather.icon) {
              case '01d':
                fondo = cambiarColorSol();
                break;

              case '01n':
                fondo = cambiarColorNoche();
                break;

              case '02d':
                fondo = cambiarColorSol();
                break;

              case '02n':
                fondo = cambiarColorNoche();
                break;

              case '03d':
                fondo = cambiarColorDia();
                break;

              case '03n':
                fondo = cambiarColorNoche();
                break;

              case '04d':
                fondo = cambiarColorTomenta();
                break;

              case '04n':
                fondo = cambiarColorNoche();
                break;

              case '09d':
                fondo = cambiarColorTomenta();
                break;

              case '09n':
                fondo = cambiarColorNoche();
                break;

              case '10d':
                fondo = cambiarColorTomenta();
                break;

              case '10n':
                fondo = cambiarColorNoche();
                break;

              case '11d':
                fondo = cambiarColorDia();
                break;

              case '11n':
                fondo = cambiarColorNoche();
                break;

              case '13d':
                fondo = cambiarColorTomenta();
                break;

              case '13n':
                fondo = cambiarColorTomenta();
                break;

              case '50d':
                fondo = cambiarColorDia();
                break;

              case '50n':
                fondo = cambiarColorNoche();
                break;

              case 'unknown':
                fondo = cambiarColorDia();
                break;
            }

          })
          .then(function () {
            displayWeather();
          });

      }


      // Mostrar tiempo
      function displayWeather() {
        iconElement.innerHTML = `<img src="icons/${weather.iconId}.gif"/>`;
        tempElement.innerHTML = `${weather.temperature.value}°C`;
        descElement.innerHTML = `${weather.description}`;
        feelsLike.innerHTML = `${weather.feels}°C`;
        wind.innerHTML = `${weather.wind} km/h`;
        humidity.innerHTML = `${weather.humidity} %`;
        pressure.innerHTML = `${weather.pressure} mBar`;
        tempmax.innerHTML = `${weather.tempmax}°C`;
        tempmin.innerHTML = `${weather.tempmin}°C`;
        tempmaxM.innerHTML = `${weather.tempmaxM}°C`;
        tempminM.innerHTML = `${weather.tempminM}°C`;
        iconElementManana.innerHTML = `<img src="icons/${weather.iconElementManana}.gif"/>`;
        tempmaxP.innerHTML = `${weather.tempmaxP}°C`;
        tempminP.innerHTML = `${weather.tempminP}°C`;
        iconElementPasado.innerHTML = `<img src="icons/${weather.iconElementPasado}.gif"/>`;
        tempmaxEnDosDias.innerHTML = `${weather.tempmaxEnDosDias}°C`;
        tempminEnDosDias.innerHTML = `${weather.tempminEnDosDias}°C`;
        iconElementEnDosDias.innerHTML = `<img src="icons/${weather.iconElementEnDosDias}.gif"/>`;
        tempmaxEnTresDias.innerHTML = `${weather.tempmaxEnTresDias}°C`;
        tempminEnTresDias.innerHTML = `${weather.tempminEnTresDias}°C`;
        iconElementEnTresDias.innerHTML = `<img src="icons/${weather.iconElementEnTresDias}.gif"/>`;
        tempmaxEnCuatroDias.innerHTML = `${weather.tempmaxEnCuatroDias}°C`;
        tempminEnCuatroDias.innerHTML = `${weather.tempminEnCuatroDias}°C`;
        iconElementEnCuatroDias.innerHTML = `<img src="icons/${weather.iconElementEnCuatroDias}.gif"/>`;
        tempmaxEnCincoDias.innerHTML = `${weather.tempmaxEnCincoDias}°C`;
        tempminEnCincoDias.innerHTML = `${weather.tempminEnCincoDias}°C`;
        iconElementEnCincoDias.innerHTML = `<img src="icons/${weather.iconElementEnCincoDias}.gif"/>`;
        tempMasUna.innerHTML = `${weather.tempMasUna}°C`;
        iconElementMasUna.innerHTML = `<img src="icons/${weather.iconElementMasUna}.gif"/>`;
        tempMasDos.innerHTML = `${weather.tempMasDos}°C`;
        iconElementMasDos.innerHTML = `<img src="icons/${weather.iconElementMasDos}.gif"/>`;
        tempMasTres.innerHTML = `${weather.tempMasTres}°C`;
        iconElementMasTres.innerHTML = `<img src="icons/${weather.iconElementMasTres}.gif"/>`;
        tempMasCuatro.innerHTML = `${weather.tempMasCuatro}°C`;
        iconElementMasCuatro.innerHTML = `<img src="icons/${weather.iconElementMasCuatro}.gif"/>`;
        tempMasCinco.innerHTML = `${weather.tempMasCinco}°C`;
        iconElementMasCinco.innerHTML = `<img src="icons/${weather.iconElementMasCinco}.gif"/>`;
        tempMasSeis.innerHTML = `${weather.tempMasSeis}°C`;
        iconElementMasSeis.innerHTML = `<img src="icons/${weather.iconElementMasSeis}.gif"/>`;
        tempMasSiete.innerHTML = `${weather.tempMasSiete}°C`;
        iconElementMasSiete.innerHTML = `<img src="icons/${weather.iconElementMasSiete}.gif"/>`;
        tempMasOcho.innerHTML = `${weather.tempMasOcho}°C`;
        iconElementMasOcho.innerHTML = `<img src="icons/${weather.iconElementMasOcho}.gif"/>`;
        uvi.innerHTML = `${weather.uvi}/10`;

      }


      // Mostrar localizacion
      function displayWeatherDaily() {
        locationElement.innerHTML = `${weather.city}, ${weather.country}`;
      }

      // Mostrar hora actual

      function mueveReloj() {
        momentoActual = new Date()
        hora = momentoActual.getHours()
        minuto = momentoActual.getMinutes()
        segundo = momentoActual.getSeconds()

        horaImprimible = hora + " : " + minuto + " : " + segundo

        document.form_reloj.reloj.value = horaImprimible

        setTimeout("mueveReloj()", 1000)
      }

      // Fecha hoy


      var meses = new Array("Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro");
      var f = new Date();
      var mostrarFecha = (f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
      document.querySelector(".fechaHoy p").innerHTML = mostrarFecha;



    })


}