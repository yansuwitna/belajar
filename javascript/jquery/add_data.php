<?php
$koneksi = mysqli_connect("nama_host", "nama_pengguna", "kata_sandi", "nama_database");

$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$telepon = $_POST['telepon'];

$query = "INSERT INTO data (nama, alamat, telepon) VALUES ('$nama', '$alamat', '$telepon')";

mysqli_query($koneksi, $query);
mysqli_close($koneksi);
?>