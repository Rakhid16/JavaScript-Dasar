// OBJECT LITERAL
/*var mhs = {
  nama : "Rakhman Wahid",
  umur : 19,
  ips : [3.9, 3.9, 4.0],
  alamat : {
    jalan : "Jalan-jalan",
    kota : "Jomang :)",
    provinsi : "Jawa Timur"
  }
};

var mhs1 = {
  nama : "Rakhman Wahid",
  umur : 18,
  ips : [3.9, 3.9, 4.0],
  alamat : {
    jalan : "Jalan-jalan",
    kota : "Jomang :)",
    provinsi : "Jawa Timur"
  }
};*/

// FUNCTION DECLARATION
function objkMHS(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs2 = objkMHS("Tetew", 1234, "tetew@ymail.com", "Teknik Bahasa Rusia");

// CONSTRUCTOR
function mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs3 = new mahasiswa("Tataq", 4321, "tataq@ymail.com", "Teknik Bahasa Mongol");
