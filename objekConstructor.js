function Mahasiswa(nama, jurusan){
    this.nama = nama; 
    this.jurusan = jurusan;
    this.sapa = function(){
        console.log ("halo, saya" + this.nama + "dari jurusan" + this.jurusan )
    }
}

var mahasiswa1 = new Mahasiswa ("balo", "informatika");
var mahasiswa2 = new Mahasiswa ("Bolo", "teknik");

mahasiswa1.sapa();
mahasiswa2.sapa(); 