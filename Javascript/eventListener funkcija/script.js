window.addEventListener("keydown", (event) => {
    let kodDugmeta = event.keyCode;
    let dugme = event.key;
    if(dugme === "a") {
        let noviElement = document.createElement("p");
        noviElement.innerText = "Unesi dva dvocifrena broja";
        let glavniText = document.querySelector("h1");
        glavniText.appendChild(noviElement);
    }
    
});

let suma = document.querySelector("button");
suma.addEventListener("click" , () => {
    let broj = document.querySelector("input").value;
    let prviBroj = broj.substring(0, 3);
    let drugiBroj = broj.substring(3 , 6);
    prviBroj = parseInt(prviBroj);
    drugiBroj = parseInt(drugiBroj);
    let sumaDvaBroja = prviBroj + drugiBroj;

    let noviBroj = document.createElement("p");
    noviBroj.innerText = `Suma broja ${prviBroj}  i broja ${drugiBroj} je ${sumaDvaBroja} `;
    let glavniText = document.querySelector("h1");
    glavniText.appendChild(noviBroj);
})