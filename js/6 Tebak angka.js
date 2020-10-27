var num = Math.floor(Math.random() * 10) + 1;

for (var i = 0; i < 3; i++) {
  var angka = prompt("Masukkan angka tebakan (1-10) : ");

  if (num == angka) {
    alert("Tebakan anda betul");
    break;
  }

  else {
    (angka < num) ? alert("Ankga kurang besar " + num) : alert("Angka kurang kecil " + num);
  }
}
