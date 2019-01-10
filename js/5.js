var lagi = true;

while (lagi) {
  var usr = prompt("Masukkan pilihan anda : \nbatu, gunting, kertas");
  var com = Math.random();

  if (com < 0.34){
    com = "batu";
  }

  else if (com >= 0.34 && com < 0.67){
    com = "gunting";
  }

  else {
    com = "kertas";
  }

  switch (usr) {
    case "batu":
      if(com === usr){
        alert("Seri");
      }
      else if (com === "gunting") {
        alert("Menang");
      }
      else {
        alert("Kalah");
      } break;

    case "gunting":
      if(com === usr){
        alert("Seri");
      }
      else if (com === "kertas") {
        alert("Menang");
      }
      else {
        alert("Kalah");
      } break;

    case "kertas":
      if(com === usr){
        alert("Seri");
      }
      else if (com === "batu") {
        alert("Menang");
      }
      else {
        alert("Kalah");
      } break;

    default:
      alert("Pilihan invalid");
  }

  var lagi = confirm("Mau lagi?");
}
