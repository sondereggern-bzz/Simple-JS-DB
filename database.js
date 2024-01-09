// datenbank.js

var automodelle = [
    { id: 1, marke: "Audi", modell: "A7", baujahr: 2020, motor: "3L V6 TFSI", leistung: 340},
    { id: 2, marke: "Audi", modell: "RS6", baujahr: 2021, motor: "4L V8", leistung: 600 },
    { id: 3, marke: "Porsche", modell: "911", baujahr: 2021, motor: "3L F6", leistung: 450 },
    { id: 4, marke: "Audi", modell: "s5", baujahr: 2022, motor: "3L V6 TFSI", leistung: 350 },
    { id: 5, marke: "Volvo", modell: "S60", baujahr: 2021, motor: "2L i4 ", leistung: 250 },
    { id: 6, marke: "Maserati", modell: "Ghibli", baujahr: 2023, motor: "3.7L V8", leistung: 580 },
];
function fillDropdown() {
    var dropdown = document.getElementById('modellAuswahl');

    automodelle.forEach(function (auto) {
        var option = document.createElement('option');
        option.value = auto.modell;
        option.text = auto.modell;
        dropdown.add(option);
    });
}

function fillDropdownYear() {
    var dropdown = document.getElementById('baujahrAuswahl');


    var baujahre = [''].concat([...new Set(automodelle.map(auto => auto.baujahr))]);

    baujahre.forEach(function (jahr) {
        var option = document.createElement('option');
        option.value = jahr === '' ? '' : jahr.toString(); // Sicherstellen, dass der leere String als Wert verwendet wird
        option.text = jahr === '' ? 'Kein Jahr' : jahr;
        dropdown.add(option);
    });
}


window.onload = function () {
    fillDropdown();
    fillDropdownYear();
};