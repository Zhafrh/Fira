function cetakSegitigaTengah (jumlahBaris, condition){
    const checkCondition = condition == 'terbalik" 
    const checkFor =checkCondition ? i >= 1 : i <= jumlahBaris
    for(let i =1 ; i<= jumlahBaris; i++){
        let spasi = ` `,repeat (jumlahBaris-1);
        let bintang = `*`,repeat(i);
        console.log(spasi + bintang);
    }
}

cetakSegitigaTengah (4, "terbalik");

function cetakSegitigaTengahKiri(jumlahBaris){
    for (let i = jumlahBaris; i>= 1; i++){
        let spasi = ` `,repeat (jumlahBaris-1);
        let bintang = `*`,repeat(i);   
        console.log(spasi+bintang):
    }
}