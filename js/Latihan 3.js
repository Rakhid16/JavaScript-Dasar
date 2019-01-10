function Angkot(sopir, trayek, penumpang, kas){
  this.sopir = sopir;
  this.trayek = trayek;
  this.kas = kas;
  this.penumpang = penumpang;

  this.penumpangNaik = function(namaPenumpang){
    if(penumpang.length === 0){
      this.penumpang.push(namaPenumpang);
      return namaPenumpang;
    }

    else{
      for (var i = 0; i < this.penumpang.length; i++){
        if (this.penumpang[i] == undefined) {
          this.penumpang[i] = namaPenumpang;
          return this.penumpang;
        }
        else if (this.penumpang[i] == namaPenumpang) {
          console.log(namaPenumpang + " sudah ada");
          return this.penumpang;
        }

        else if(i == this.penumpang.length-1){
          penumpang.push(namaPenumpang);
          return this.penumpang
        }
      }
    }
  }

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0 ){
      alert("Angkot maish kosong!");
      return false;
    }

    else{for (var i = 0; i<this.penumpang.length; i++){
      if(this.penumpang[i] == namaPenumpang){
        this.penumpang[i] = undefined;
        this.kas += bayar;
      }

      else if (i == this.penumpang.length-1) {
        console.log(namaPenumpang + " tidak ada di dalam Angkot");
      }
    }
  } return this.penumpang;
  }
}

var angkot1 = new Angkot("Rakhman Wahid", ['Benowo', 'Kedamean'], [], 0);
var angkot2 = new Angkot("Tegar Mahendra", ['Sememi', 'Perak'], [], 0);
