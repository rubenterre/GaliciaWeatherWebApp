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

const iconElementMasNueve = document.querySelector(".weather-icon-mas_nueve");
const tempMasNueve = document.querySelector(".temp-mas_nueve p");
const iconElementMasDiez = document.querySelector(".weather-icon-mas_diez");
const tempMasDiez = document.querySelector(".temp-mas_diez p");
const iconElementMasOnce = document.querySelector(".weather-icon-mas_once");
const tempMasOnce = document.querySelector(".temp-mas_once p");
const iconElementMasDoce = document.querySelector(".weather-icon-mas_doce");
const tempMasDoce = document.querySelector(".temp-mas_doce p");
const iconElementMasTrece = document.querySelector(".weather-icon-mas_trece");
const tempMasTrece = document.querySelector(".temp-mas_trece p");
const iconElementMasCatorce = document.querySelector(".weather-icon-mas_catorce");
const tempMasCatorce = document.querySelector(".temp-mas_catorce p");
const iconElementMasQuince = document.querySelector(".weather-icon-mas_quince");
const tempMasQuince = document.querySelector(".temp-mas_quince p");
const iconElementMasDieciseis = document.querySelector(".weather-icon-mas_dieciseis");
const tempMasDieciseis = document.querySelector(".temp-mas_dieciseis p");

const tempMasOcho = document.querySelector(".temp-mas_ocho p");
const masUnaHora = document.querySelector(".mas_una_hora p");
const masDosHora = document.querySelector(".mas_dos_hora p");
const masTresHora = document.querySelector(".mas_tres_hora p");
const masCuatroHora = document.querySelector(".mas_cuatro_hora p");
const masCincoHora = document.querySelector(".mas_cinco_hora p");
const masSeisHora = document.querySelector(".mas_seis_hora p");
const masSieteHora = document.querySelector(".mas_siete_hora p");
const masOchoHora = document.querySelector(".mas_ocho_hora p");

const masNueveHora = document.querySelector(".mas_nueve_hora p");
const masDiezHora = document.querySelector(".mas_diez_hora p");
const masOnceHora = document.querySelector(".mas_once_hora p");
const masDoceHora = document.querySelector(".mas_doce_hora p");
const masTreceHora = document.querySelector(".mas_trece_hora p");
const masCatorceHora = document.querySelector(".mas_catorce_hora p");
const masQuinceHora = document.querySelector(".mas_quince_hora p");
const masDieciseisHora = document.querySelector(".mas_dieciseis_hora p");



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


// App data
const weather = {};

weather.temperature = {
    unit: "celsius"
}

// API Key
const key = "3e867330616c39fa60d18a1af5d82f16";


// Comprobar la localización en el navegador
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>El navegador no soporta la geolocalización</p>";
}

// Posicionar al usuario
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
    getWeatherDaily(latitude, longitude);

}


// Mostrar error
function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}


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
                    frase = "Dende Santa Lucía, o serán medra unha cuarta cada día";
                    break;

                case '03d':
                    frase = "Cando chove e quenta o sol, anda o demo por Ferrol.";
                    break;

                case '03n':
                    frase = "Aproveita para saír que toca noite tranquiliña";
                    break;

                case '04d':
                    frase = "Cando Deus querer con calquera vento fai chover.";
                    break;

                case '04n':
                    frase = "Gaivotas a terra, mariñeiros á merda";
                    break;

                case '09d':
                    frase = "Se tiñas pensado tendela roupa fora, hoxe non é o día.";
                    break;

                case '09n':
                    frase = "Febreiriño rabo torto, cos teus días vinteoito, se tiveras máis catro, non quedaba can nin gato nin raposo no burato.";
                    break;

                case '10d':
                    frase = "Non esquezas o paraugas";
                    break;

                case '10n':
                    frase = "En abril sae o cuco do cubil.";
                    break;

                case '11d':
                    frase = "Ata o corenta de maio non quites o saio e se eres de Lugo ata o trinta de xuño";
                    break;

                case '11n':
                    frase = "Marzo marzal, á mañá cariña de rosa, á noite cara de can.";
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
                    frase = "Abrígate por febreíro con dúas capas e un sombreiro";
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


// Proveedor de datos del tiempo
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

            weather.tempMasNueve = Math.round(data.hourly[9].temp);
            weather.iconElementMasNueve = data.hourly[9].weather[0].icon;
            weather.tempMasDiez = Math.round(data.hourly[10].temp);
            weather.iconElementMasDiez = data.hourly[10].weather[0].icon;
            weather.tempMasOnce = Math.round(data.hourly[11].temp);
            weather.iconElementMasOnce = data.hourly[11].weather[0].icon;
            weather.tempMasDoce = Math.round(data.hourly[12].temp);
            weather.iconElementMasDoce = data.hourly[12].weather[0].icon;
            weather.tempMasTrece = Math.round(data.hourly[13].temp);
            weather.iconElementMasTrece = data.hourly[13].weather[0].icon;
            weather.tempMasCatorce = Math.round(data.hourly[14].temp);
            weather.iconElementMasCatorce = data.hourly[14].weather[0].icon;
            weather.tempMasQuince = Math.round(data.hourly[15].temp);
            weather.iconElementMasQuince = data.hourly[15].weather[0].icon;
            weather.tempMasDieciseis = Math.round(data.hourly[16].temp);
            weather.iconElementMasDieciseis = data.hourly[16].weather[0].icon;

            weather.masUnaHora = data.hourly[1].dt;
            weather.masDosHora = data.hourly[2].dt;
            weather.masTresHora = data.hourly[3].dt;
            weather.masCuatroHora = data.hourly[4].dt;
            weather.masCincoHora = data.hourly[5].dt;
            weather.masSeisHora = data.hourly[6].dt;
            weather.masSieteHora = data.hourly[7].dt;
            weather.masOchoHora = data.hourly[8].dt;

            weather.masNueveHora = data.hourly[9].dt;
            weather.masDiezHora = data.hourly[10].dt;
            weather.masOnceHora = data.hourly[11].dt;
            weather.masDoceHora = data.hourly[12].dt;
            weather.masTreceHora = data.hourly[13].dt;
            weather.masCatorceHora = data.hourly[14].dt;
            weather.masQuinceHora = data.hourly[15].dt;
            weather.masDieciseisHora = data.hourly[16].dt;


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

            var horanueve = weather.masNueveHora;
            var lahoranueve = new Date(horanueve * 1000);
            var timesLahoranueve = lahoranueve.getHours();
            masNueveHora.innerHTML = `${timesLahoranueve}h`;

            var horadiez = weather.masDiezHora;
            var lahoradiez = new Date(horadiez * 1000);
            var timesLahoradiez = lahoradiez.getHours();
            masDiezHora.innerHTML = `${timesLahoradiez}h`;

            var horaonce = weather.masOnceHora;
            var lahoraonce = new Date(horaonce * 1000);
            var timesLahoraonce = lahoraonce.getHours();
            masOnceHora.innerHTML = `${timesLahoraonce}h`;

            var horadoce = weather.masDoceHora;
            var lahoradoce = new Date(horadoce * 1000);
            var timesLahoradoce = lahoradoce.getHours();
            masDoceHora.innerHTML = `${timesLahoradoce}h`;

            var horatrece = weather.masTreceHora;
            var lahoratrece = new Date(horatrece * 1000);
            var timesLahoratrece = lahoratrece.getHours();
            masTreceHora.innerHTML = `${timesLahoratrece}h`;

            var horacatorce = weather.masCatorceHora;
            var lahoracatorce = new Date(horacatorce * 1000);
            var timesLahoracatorce = lahoracatorce.getHours();
            masCatorceHora.innerHTML = `${timesLahoracatorce}h`;

            var horaquince = weather.masQuinceHora;
            var lahoraquince = new Date(horaquince * 1000);
            var timesLahoraquince = lahoraquince.getHours();
            masQuinceHora.innerHTML = `${timesLahoraquince}h`;

            var horadieciseis = weather.masDieciseisHora;
            var lahoradieciseis = new Date(horadieciseis * 1000);
            var timesLahoradieciseis = lahoradieciseis.getHours();
            masDieciseisHora.innerHTML = `${timesLahoradieciseis}h`;


            // Probabilidades de precipitaciones

            const barraUna = document.querySelector("#barra1 p");
            


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
    tempMasNueve.innerHTML = `${weather.tempMasNueve}°C`;
    iconElementMasNueve.innerHTML = `<img src="icons/${weather.iconElementMasNueve}.gif"/>`;
    tempMasDiez.innerHTML = `${weather.tempMasDiez}°C`;
    iconElementMasDiez.innerHTML = `<img src="icons/${weather.iconElementMasDiez}.gif"/>`;
    tempMasOnce.innerHTML = `${weather.tempMasOnce}°C`;
    iconElementMasOnce.innerHTML = `<img src="icons/${weather.iconElementMasOnce}.gif"/>`;
    tempMasDoce.innerHTML = `${weather.tempMasDoce}°C`;
    iconElementMasDoce.innerHTML = `<img src="icons/${weather.iconElementMasDoce}.gif"/>`;
    tempMasTrece.innerHTML = `${weather.tempMasTrece}°C`;
    iconElementMasTrece.innerHTML = `<img src="icons/${weather.iconElementMasTrece}.gif"/>`;
    tempMasCatorce.innerHTML = `${weather.tempMasCatorce}°C`;
    iconElementMasCatorce.innerHTML = `<img src="icons/${weather.iconElementMasCatorce}.gif"/>`;
    tempMasQuince.innerHTML = `${weather.tempMasQuince}°C`;
    iconElementMasQuince.innerHTML = `<img src="icons/${weather.iconElementMasQuince}.gif"/>`;
    tempMasDieciseis.innerHTML = `${weather.tempMasDieciseis}°C`;
    iconElementMasDieciseis.innerHTML = `<img src="icons/${weather.iconElementMasDieciseis}.gif"/>`;

    uvi.innerHTML = `${weather.uvi}/10`;

}

// Mostrar localizacion
function displayWeatherDaily() {
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}



// Fecha hoy


var meses = new Array ("Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño","Xullo","Agosto","Setembro","Outubro","Novembro","Decembro");
var f=new Date();
var mostrarFecha = (f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
document.querySelector(".fechaHoy p").innerHTML = mostrarFecha;
