"use strict";
exports.__esModule = true;
function TeglalapKeruletTerulet(a, b) {
    var kerulet = 2 * (a + b);
    var terulet = a * b;
    document.write("<br>A ".concat(a, ",").concat(b, " oldal\u00FA t\u00E9glalap ker\u00FClet: ").concat(kerulet));
    document.write("<br>A ".concat(a, ",").concat(b, " oldal\u00FA t\u00E9glalap ter\u00FClet: ").concat(terulet));
}
//ParosE függvény
//Szám bemeneti paraméter
//logikai értékkel kell visszatérnie
function ParosE(vizsgalandoSzam) {
    if (vizsgalandoSzam % 2 == 0) {
        return true;
    }
    return false;
}
// Prímszám generátor
// Határérték bemeneti paraméter(határ1, határ2)
// Egész szám értékkel térjen vissza, ami egy prímszám!
function PrimGenerator(hatarEgy, hatarKetto) {
    var also;
    var felso;
    if (hatarEgy < hatarKetto) {
        also = hatarEgy;
        felso = hatarKetto;
    }
    else {
        also = hatarKetto;
        felso = hatarEgy;
    }
    var probalkozasokSzama = 0;
    var sikeresGeneralas = false;
    var generaltSzam;
    do {
        generaltSzam = Math.round(Math.random() * (felso - also) + also);
        probalkozasokSzama++;
        var oszto = 0;
        for (var i = 1; i <= generaltSzam; i++) {
            if (generaltSzam % i == 0) {
                oszto++;
            }
        }
        if (oszto == 2) {
            sikeresGeneralas = true;
        }
    } while (sikeresGeneralas = false && probalkozasokSzama < 100);
    return generaltSzam;
}
function TeglalapKeruletTeruletTupleFuggveny(a, b) {
    var kerulet = 2 * (a + b);
    var terulet = a * b;
    return [kerulet, terulet];
}
function UniverzalisTombGenerator(meret, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
    }
    return generaltTomb;
}
function OsszegzesTeteleTS(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i];
    }
    return osszeg;
}
