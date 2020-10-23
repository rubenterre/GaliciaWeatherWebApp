//Buscador

const form = document.querySelector(".nav-wrapper form");
const input = document.querySelector(".nav-wrapper input");
const msg = document.querySelector(".nav-wrapper .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "3e867330616c39fa60d18a1af5d82f16";




form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;


    const listItems = list.querySelectorAll(".ajax-section .city");
    const listItemsArray = Array.from(listItems);

    if (listItemsArray.length > 0) {
        const filteredArray = listItemsArray.filter(el => {
            let content = "";

            if (inputVal.includes(",")) {
                if (inputVal.split(",")[1].length > 2) {
                    inputVal = inputVal.split(",")[0];
                    content = el
                        .querySelector(".city-name")
                        .textContent.toLowerCase();
                } else {
                    content = el.querySelector(".city-name").dataset.name.toLowerCase();
                }
            } else {
                content = el.querySelector(".city-name").textContent.toLowerCase();
            }
            return content == inputVal.toLowerCase();
        });

        if (filteredArray.length > 0) {
            msg.textContent = `Aún no conoces el tiempo para ${
                                             filteredArray[0].querySelector(".city-name").textContent
                                             } será más específico si también pones el código de país 😉`;
            form.reset();
            input.focus();
            return;
        }
    }



    //ajax
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric&lang=gl`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const {
                coord,
                main,
                name,
                sys,
                weather,
            } = data;


            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
            <a onclick="abrirBoton()" id="tarjeta_city"><div class="col s12 m7">
                                                  
                                                  <div class="card tarjeta">
                                            
                                                             <div class="card-image grey-text text-darken-2 tarjeta">
                                                             <img src="tarjetasGIF/${weather[0].icon}.gif" class="fondo_card">
                                                                    <a onclick="abrirBoton()" class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></a>
                                                                    <h2 onclick="abrirBoton()" class="card-title estado-name"><span class="city-name">${name}</span>,${sys.country}</h2>
                                                                    <br><span onclick="abrirBoton()" class="card-title city-temp white-text">${Math.round(main.temp)}°C<span class="descripcion_card">${weather[0].description}</span></span>                                             
                                                             </div>
                                                             
                                                            <script src="js/abrir_tiempo.js"></script>
                                                         </div>
                                                </div></a>
                                                         `;
            li.innerHTML = markup;
            list.appendChild(li);

        })
        .catch(() => {
            msg.textContent = "Por favor introduce una ciudad válida";
        });


    msg.textContent = "";

    form.reset();
    input.focus();
});