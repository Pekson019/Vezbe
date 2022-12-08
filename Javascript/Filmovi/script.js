let ukupnaCenaFilma = 0;
function gledaj(film) {
    let mainElement = film.closest(".card");
    let Film = mainElement.querySelector(".card-text p");
    let imeFilma = Film.innerText;
    imeFilma = imeFilma.substring(5);

    let cena = mainElement.querySelector(".card-text p").nextElementSibling;
    let cenaFilma = cena.innerText;
    cenaFilma = cenaFilma.substring(6 , 8);
    cenaFilma = parseInt(cenaFilma);

    let gledajFilm = document.querySelector(".cena");

    ukupnaCenaFilma +=cenaFilma;
    gledajFilm.innerHTML = `Upravo gledate: ${imeFilma}<br>Vasa ukupna cena je ${ukupnaCenaFilma}$`;
    film.innerText = "upravo gledate"
    film.setAttribute("disabled" , "true");

    mainElement.classList.add("watching");
}