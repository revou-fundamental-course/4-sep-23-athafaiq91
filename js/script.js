function hitungLuas() {
    var panjangSisi = parseFloat(document.getElementById("sisi").value);
    var luas = panjangSisi * panjangSisi;
    document.getElementById("luasPertama").innerHTML = "L = S × S";
    document.getElementById("luasKedua").innerHTML =  "L = " + panjangSisi + " × " + panjangSisi;
    document.getElementById("hasilLuas").innerHTML = "L = " + luas;
}

function hitungKeliling() {
    var panjangSisi = parseFloat(document.getElementById("sisi").value);
    var keliling = 4 * panjangSisi;
    document.getElementById("kelilingPertama").innerHTML = "K = 4 × S";
    document.getElementById("kelilingKedua").innerHTML =  "K = " + 4 + " × " + panjangSisi;
    document.getElementById("hasilKeliling").innerHTML = "K = " + keliling;
}

function resetForm() {
    var inputSisi = document.getElementById("sisi");
    inputSisi.value = "";
    document.getElementById("luasPertama").textContent = "";
    document.getElementById("luasKedua").textContent = "";
    document.getElementById("hasilLuas").textContent = "";
    document.getElementById("kelilingPertama").textContent = "";
    document.getElementById("kelilingKedua").textContent = "";
    document.getElementById("hasilKeliling").textContent = ""
}
