// let inHeaderProfile = 1;
// let buttonHeader = document.getElementById("buttonHeader");
// let kotakProfile = document.getElementById("kotakProfile");

// function masukKah(){;
//     console.log(inHeaderProfile)
//     if (inHeaderProfile == 1) {
//         buttonHeader.classList.add("none");
//         kotakProfile.classList.remove("none");
//     } else {
//         buttonHeader.classList.remove("none");
//         kotakProfile.classList.add("none");
//     }
// }

function redirLogin(){
    window.location.href = "masuk.html";
}

function redirDaftar(){
    window.location.href = "daftar.html";
}

function redirHome(){
    inHeaderProfile = 1;
    window.location.href = "index.html";
}

function redirCariKomoditas(){
    window.location.href = "komoditas.html";
}

function redirEnsiklo(){
    window.location.href = "ensiklo.html";
}

function redirProduct(){
    window.location.href = "product.html";
}

function redirArticle(){
    window.location.href = "article.html";
}

function redirProfile(){
    window.location.href = "profile.html";
}

// Login
function redirHome2(){
    window.location.href = "index2.html";
}

function redirCariKomoditas2(){
    window.location.href = "komoditas2.html";
}

function redirEnsiklo2(){
    window.location.href = "ensiklo2.html";
}

function redirKeranjang(){
    window.location.href = "keranjang.html";
}

function redirPembayaran(){
    window.location.href = "pembayaran.html";
}



let buck1 = document.getElementById("bck1");
let buck2 = document.getElementById("bck2");
let buck3 = document.getElementById("bck3");
let buck4 = document.getElementById("bck4");
let buck5 = document.getElementById("bck5");
let buck6 = document.getElementById("bck6");

function filterCariKomoditas(ind){
    buck1.classList.remove("hi");
    buck2.classList.remove("hi");
    buck3.classList.remove("hi");
    buck4.classList.remove("hi");
    buck5.classList.remove("hi");
    buck6.classList.remove("hi");
    buck1.classList.add("nhi");
    buck2.classList.add("nhi");
    buck3.classList.add("nhi");
    buck4.classList.add("nhi");
    buck5.classList.add("nhi");
    buck6.classList.add("nhi");
    if (ind == 1){
        buck1.classList.remove("nhi");
        buck1.classList.add("hi");
    } else if (ind == 2){
        buck2.classList.remove("nhi");
        buck2.classList.add("hi");
    }  else if (ind == 3){
        buck3.classList.remove("nhi");
        buck3.classList.add("hi");
    }  else if (ind == 4){
        buck4.classList.remove("nhi");
        buck4.classList.add("hi");
    }  else if (ind == 5){
        buck5.classList.remove("nhi");
        buck5.classList.add("hi");
    }  else if (ind == 6){
        buck6.classList.remove("nhi");
        buck6.classList.add("hi");
    }
}

let btm = document.getElementById("BTMasuk");
let ksm = document.getElementById("kataSandiMasuk");
let btd = document.getElementById("BTDaftar");
let ksd = document.getElementById("kataSandiDaftar");

function tambahMata(vall, tp) {
    var tipe;
    var btn;
    if(tp == 'masuk') {
        tipe = ksm;
        btn = btm;
    } else if (tp == 'daftar') {
        tipe = ksd;
        btn = btd;
    }
    
    if (vall == "") {
        btn.classList.remove("tutupp");
        btn.classList.remove("bukaa");
        tipe.type = "password";
    } else {
        tipe.type == "password" ? btn.classList.add("tutupp") : btn.classList.add("bukaa");
    }
}

function bukaPw(tp) {
    var tipe;
    var btn;
    if(tp == 'masuk') {
        tipe = ksm;
        btn = btm;
    } else if (tp == 'daftar') {
        tipe = ksd;
        btn = btd;
    }

    if (tipe.type == 'password'){
        btn.classList.add("bukaa");
        btn.classList.remove("tutupp");
        tipe.type = "text";
    } else {
        btn.classList.add("tutupp");
        btn.classList.remove("bukaa");
        tipe.type = "password";
    }
}

let fl = document.getElementById("form-langganan");

function kirimLangganan() {
    console.log(fl.value)
    fl.value = "";
}

let phck1 = document.getElementById("bt1");
let phck2 = document.getElementById("bt2");
let phck3 = document.getElementById("bt3");
let phck4 = document.getElementById("bt4");
let phck5 = document.getElementById("bt5");
let phckki = document.getElementById("btki");
let phckka = document.getElementById("btka");
let saatIni = 1;

function pindahHalaman(ind){
    if (ind == 0) {
        if(saatIni > 1) saatIni--;
        ind = saatIni;
    } else if (ind == 10) {
        if(saatIni < 5) saatIni++;
        ind = saatIni;
    }
    console.log(saatIni);
    phck1.classList.remove("hii");
    phck2.classList.remove("hii");
    phck3.classList.remove("hii");
    phck4.classList.remove("hii");
    phck5.classList.remove("hii");
    phck1.classList.add("nhii");
    phck2.classList.add("nhii");
    phck3.classList.add("nhii");
    phck4.classList.add("nhii");
    phck5.classList.add("nhii");
    if (ind == 1){
        phck1.classList.remove("nhii");
        phck1.classList.add("hii");
        saatIni = 1;
    } else if (ind == 2){
        phck2.classList.remove("nhii");
        phck2.classList.add("hii");
        saatIni = 2;
    }  else if (ind == 3){
        phck3.classList.remove("nhii");
        phck3.classList.add("hii");
        saatIni = 3;
    }  else if (ind == 4){
        phck4.classList.remove("nhii");
        phck4.classList.add("hii");
        saatIni = 4;
    }  else if (ind == 5){
        phck5.classList.remove("nhii");
        phck5.classList.add("hii");
        saatIni = 5;
    }
}


let kpk = document.getElementById("kpkategori");
let kpg = document.getElementById("kpgrade");
let kpl = document.getElementById("kplokasi");
let kk = document.getElementById("kk");
let kg = document.getElementById("kg");
let kl = document.getElementById("kl");
let ikpk = 0;
let ikpg = 0;
let ikpl = 0;

function resetFilterkategori() {
    ikpk = 0;
    ikpg = 0;
    ikpl = 0;
    kpk.classList.add("none");
    kpg.classList.add("none");
    kpl.classList.add("none");
    kk.innerHTML = "Kategori";
    kg.innerHTML = "Grade";
    kl.innerHTML = "Lokasi";
}

function tampilkanPilihan(vall) {
    console.log("vall");
    if (vall == 1) {
        if (ikpk == 0){
            kpk.classList.remove("none");
            ikpk = 1;
        } else {
            kpk.classList.add("none");
            ikpk = 0;
        }
    } else if (vall == 2){
        if (ikpg == 0){
            kpg.classList.remove("none");
            ikpg = 1;
        } else {
            kpg.classList.add("none");
            ikpg = 0;
        }
    } else if (vall == 3){
        if (ikpl == 0){
            kpl.classList.remove("none");
            ikpl = 1;
        } else {
            kpl.classList.add("none");
            ikpl = 0;
        }
    }
}

function kpfilter(ang, vall) {
    if (ang == 1){
        kk.innerHTML = vall;
        kpk.classList.add("none");
        ikpk = 0;
    } else if (ang == 2) {
        kg.innerHTML = vall;
        kpg.classList.add("none");
        ikpg = 0;
    } else if (ang == 3) {
        kl.innerHTML = vall;
        kpl.classList.add("none");
        ikpl = 0;
    }
}

let slideIndex = [1,1];
let slideId = ["mySlides1"]
showSlides(1, 0);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}