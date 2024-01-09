// datenbank.js

var automodelle = [
    { id: 1, marke: "Audi", modell: "A7", baujahr: 2020 },
    { id: 2, marke: "Audi", modell: "RS6", baujahr: 2021 },
    { id: 3, marke: "Porsche", modell: "911", baujahr: 2021 },
    { id: 4, marke: "Audi", modell: "Modell3", baujahr: 2022 },
    { id: 5, marke: "Audi", modell: "A7", baujahr: 2019 },
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