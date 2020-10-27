// 1. FUNCTION DECLARATION
//function halo() {
//  console.log(this);
//  console.log("Halo");
//}
//this.halo();
// THIS pada function declaration mengembalikan objek global


// 2. OBJECT LITERAL
//var obj = {a : 10, nama : "Wahid"};
//obj.halo = function(){
//  console.log(this);
//  console.log("Halo");
//}
//obj.halo();
// THIS pada object literal mengembalikan objek yang bersangkutan

// 3. CONSTRUCTOR
function Halo(){
  console.log(this);
  console.log("Halo");
}
var obj1 = new Halo();
var obj2 = new Halo();
// THIS pada constructor mengembalikan objek yang baru dibuat
