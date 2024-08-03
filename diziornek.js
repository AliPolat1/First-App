var dizi=[];

function diziekle(){

    dizi.push(document.getElementById("adsoyad").value) //dizi.push ile dizi ye adsoyad textbox ındaki yazıyı ekliyoruz
    document.getElementById("adsoyad").value =""; // bu kısımda textbox ı temizliyoruz
}

function goster(){
    var bastansona = document.getElementById("bastansona").checked;
    var sondanbasa = document.getElementById("sondanbasa").checked;
    var dizilen = dizi.length;
    if(bastansona == true){
        alert(dizi);
    }
    if(sondanbasa== true){
        alert(dizi.reverse())
    }

}