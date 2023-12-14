let array = [1, 2, 3, 4, 5]

//console.log(array[2])
console.log (array.length)  //untuk menghitung array length

let daftar = ["alo", "ola", "balo"]

console.log(daftar[1]) //untuk memanggil index ke-n || INGET KONSEP ARRAY YA, MULAI DARI 0 
console.log(daftar[daftar.length-1]) //untuk akses array paling akhir 

/*
pop - remove the last element 
push - add new element to array (at the end)
shift - remove the first array 
unshift - add new element to array (at the beginning)  */ 
 
//make string
console.log(array.toString())
console.log(typeof array[2].toString())

// pop - remove the last element 
console.log(array.pop())
console.log(array)

// push - add new element to array (at the end)
console.log(array.push(6))
console.log(array)

// shift - remove the first array 
console.log(array.shift())
console.log(array)


// unshift - add new element to array (at the beginning)
console.log(array.unshift(10)) //ini untuk memasukkan nilai baru ke elemen paling awal 
console.log(array)

//sort
let array2 = [23, 56, 12, 32, 77]
console.log(array2.sort())  // untuk mengurutkan dari nilai terkecil 
console.log(array2)
console.log(array2.reverse()) // untuk mengurutkan dari nilai terbesar

//sort 
console.log(array2.sort(function(a,b){return a - b})) //sorting paling efektif daripada membuat function
console.log(array2.sort(function(a,b){return b - a})) // logika aja ini untuk kebalikannya

let a = 1 
let b = 2 
console.log(a+=b)
console.log(a++)

//ternary 
console.log(true ? '1' : '2')