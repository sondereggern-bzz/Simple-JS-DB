
function anzeigenDaten() {
    var modellAuswahlElement = document.getElementById('modellAuswahl');
    var ausgewaehltesModell = modellAuswahlElement.value;

    var baujahrAuswahlElement = document.getElementById('baujahrAuswahl');
    var ausgewaehltesBaujahr = baujahrAuswahlElement.value;

    var ergebnisContainer = document.getElementById('ergebnisse');
    ergebnisContainer.innerHTML = '';

    var gefunden;

    if (ausgewaehltesModell === '' && ausgewaehltesBaujahr !== '') {
        // Wenn kein Modell ausgewählt wurde, filtere nach Baujahr
        gefunden = automodelle.filter(function (auto) {
            return auto.baujahr.toString() === ausgewaehltesBaujahr;
        });
    } else if (ausgewaehltesModell !== '' && ausgewaehltesBaujahr !== '') {
        // Wenn Modell und Baujahr ausgewählt wurden, filtere nach Modell und Baujahr
        gefunden = automodelle.filter(function (auto) {
            return auto.modell === ausgewaehltesModell && auto.baujahr.toString() === ausgewaehltesBaujahr;
        });
    } else {
        // Wenn ein Modell ausgewählt wurde, filtere nach Modell
        gefunden = automodelle.filter(function (auto) {
            return auto.modell === ausgewaehltesModell;
        });
    }

    if (gefunden.length > 0) {
        gefunden.forEach(function (auto) {
            var autoInfo = document.createElement('div');
            autoInfo.innerHTML = '<strong>ID:</strong> ' + auto.id + '<br>' +
                '<strong>Modell:</strong> ' + auto.modell + '<br>' +
                '<strong>Baujahr:</strong> ' + auto.baujahr + '<br><br>';
            ergebnisContainer.appendChild(autoInfo);
        });
    } else {
        ergebnisContainer.innerHTML = 'Keine Ergebnisse gefunden.';
    }
}