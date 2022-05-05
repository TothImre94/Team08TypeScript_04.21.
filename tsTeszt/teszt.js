"use strict";
exports.__esModule = true;
function DiakInfo(nev, csoport, tipus) {
    if (tipus == true) {
        return nev + " [Team0" + csoport + "] Junior Frontend";
    }
    else {
        return nev + "[Team0" + csoport + "] Webfejlesztő";
    }
}
function SzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return ["Példás", "Példás"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 3) {
        return ["Hanyag", "Rossz"];
    }
    else if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
    else {
        return ["Hibás érték", "Hibás érték"];
    }
}
function HarommalOszthatokSzama(adatTomb) {
    var darab = 0;
    for (var i = 0; i < adatTomb.length; i++) {
        if (adatTomb[i] % 3 == 0) {
            darab++;
        }
    }
    return darab;
}
