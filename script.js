let thistext = "The text";
let length = thistext.length;
document.getElementById("textinhtml").innerHTML = length;

const c = 'Const text';
document.getElementById("consttext").innerHTML = c.slice(2);

const d = "text to upper case";
const e = "TEXT TO LOWER CASE";
document.getElementById("touppercase").innerHTML = d.toUpperCase();
document.getElementById("tolowercase").innerHTML = e.toLowerCase();

arrnumber = [30, 40, 50, 60];
arrstring = ["Thirty", "Fourty", "Fifty", "Sixty"];
document.getElementById("arraynumbers").innerHTML = arrnumber[1];
document.getElementById("arraystrings").innerHTML = arrstring[1];

var f = '';
for (var i = 0; i < 9; i++) {
    f = f + i;
}
console.log(f);

function whilealert() {
    var b = 20;
    while (b != 30) {
        b++;
        alert(b);
    }
}