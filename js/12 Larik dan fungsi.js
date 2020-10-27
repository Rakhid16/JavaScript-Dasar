/*var nama = ["Radical", "Rakhman", "Wahid", "Kratos", "Atreus"];

nama.forEach(function(e,i) {
  console.log("Nama " + e + " berada pada indeks ke " + i);
});
*/

/*var angka = [1,2,3,4,5,6,7,8];
var angka2 = angka.map(function(e){
  return e * 2;
});

console.log(angka2.join(' '));
*/

/*var angka = [9,8,7,6,5,4,3,2,1,11,15,19,12];

angka.sort(function(a,b){
  return a-b;
});
Fungsi yang diinput di dalam argumen method sort() akan memiliki 2 inputan untuk memutuskan elemen mana yang akan ditampilkan terlebih dahulu. Jika elemen pertama seharusnya ditampilkan terlebih dahulu, maka fungsi harus menghasilkan nilai kurang dari 0, dan apabila angka kedua harus tampil terlebih dahulu, maka fungsi harus mengembalikan nilai lebih besar dari 0.

console.log(angka.join(' '));
*/

var angka = [1,2,10,5,20,3,6,8,4];
/*var angka2 = angka.filter(function(x) {
  return x > 5;
});
console.log(angka2.join(' '));
*/

var angka2 = angka.find(function(x) {
  return x > 5;
});
console.log(angka2);
