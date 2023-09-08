let saldo = 0;

    function tambahSaldo() {
        const tmbhSaldo = parseFloat(window.prompt("Jumlah tambahSaldo")) 
        if(!isNaN(tmbhSaldo)){
            saldo += tmbhSaldo;
            window.alert(`tambahSaldo Berhasil ${tmbhSaldo}. Jumlah Saldo sekarang: ${saldo}`);
        
        }else {
            window.alert("Input berupa angka");
        }
    }
    function kurangiSaldo(){
        const krgSaldo = parseFloat(window.prompt("Jumlah kurangiSaldo"))
        if(!isNaN(krgSaldo)){
            if(saldo >= krgSaldo){
                saldo -= krgSaldo;
                window.alert(`kurangiSaldo Berhasil ${krgSaldo}. Jumlah Saldo sekarang: ${saldo}`);
            
            }else {
                window.alert("Input berupa angka");
            }
        }
    }