const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

const table = document.querySelector('.table-1');
const astro = document.querySelector('.astronout');

table.addEventListener('click', function(e) {
    // cek apakah class war1
    if( e.target.className == 'war1'){
        astro.src = e.target.src;
    }
});

const table2 = document.querySelector('.table-2');
const hat = document.querySelector('.hat');

table2.addEventListener('click', function(e) {
    // cek apakah class war2
    if( e.target.className == 'war2'){
        hat.src = e.target.src;
    }
});

// document.getElementById('namaaa').value = "Masukkan nama Anda";
document.getElementsByTagName('input')[1].value = "Masukkan nama Anda";

function nganoke() {
    const nama1 = document.getElementById('namaaa').value;
    document.getElementById('nama-to').value = nama1;
    alert("oke");
}

