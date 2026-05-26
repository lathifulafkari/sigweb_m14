document.getElementById("formKontak").addEventListener("submit", function (event) {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;

  if (nama === "" || email === "" || pesan === "") {
    alert("Semua data harus diisi!");
    event.preventDefault();
  } else {
    alert("Pesan berhasil dikirim!");
  }
});
