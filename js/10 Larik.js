/*var arr = [];

for (var i = 0; i < 5; i++){   // Nambah isi array
  arr[i] = "Anpan";
}

for (var i = 0; i < arr.length; i++){    // NAMPILIN ISI ARRAY
  console.log("Indeks ke " + i + " adalah " + arr[i]);
}

arr[3] = undefined;   // UNTUK MENGHAPUS NILAI DARI INDEKS KE 3
console.log(arr);*/

   // METHOD PADA ARRAY
var arr = ["Radical", "Rakhman", "Wahid"];
   // 1. JOIN
//console.log(arr.join(' '));

   // 2. PUSH AND POP
//arr.push("Hans", "Sita");
//console.log(arr.join(' '));

//arr.pop();
//console.log(arr.join(' '));

   // 3. UNSHIFT DAN SHIFT
arr.unshift("Sule", "Bule");
console.log(arr.join(' '));

arr.shift();
console.log(arr.join(' '));
