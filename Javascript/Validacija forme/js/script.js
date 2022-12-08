let config = {
    "Broj licne karte" : {
        required: true,
        lenght: 9
    },
    "JMBG" : {
        required: true,
        length: 15
    },
    "Banka" : {
        required: true
    }
}

let validator = new Validator(config);