"use strict";
exports.__esModule = true;
//Visszatérési érték és paraméter nélküli eljárás
function iLovetypeScript() {
    document.write("Szeretem a TypeScriptet");
}
//Visszatérési érték nélküli de paraméteres eljárás
function NegyzetKeruletTeruletEljaras(a) {
    var kerulet = 4 * a;
    var terulet = a * a;
    document.write('<br>A(z) ${a} oldalú négyzet kerülete:${kerulet}');
    document.write('<br>A(z) ${a} oldalú négyzet területe:${terulet}');
}
//Visszatérési értékes és paraméter nélküli függvény
function RandomGeneralo100Fuggveny() {
    return Math.round(Math.random() * 100);
}
//Visszatérési értékes és paraméteres függvény
function NegyzetKeruletFuggveny(a) {
    return 4 * a;
}
