/*function hitung(a,b) {
  luas = a + b;
  return luas;
}

var a = parseInt(prompt("Masukkan angka : "));
var b = parseInt(prompt("Masukkan angka : "));

alert(hitung(a*2,b*2));*/

function tambah() {
  var hasil = 0;

  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

var coba = tambah(1,2,3,4,5);
console.log(coba);
