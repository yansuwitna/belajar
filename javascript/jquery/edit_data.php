<?php
$koneksi = mysqli_connect("nama_host", "nama_pengguna", "kata_sandi", "nama_database");

$id = $_POST['id'];
$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$telepon = $_POST['telepon'];

$query = "UPDATE data SET nama='$nama', alamat='$alamat', telepon='$telepon' WHERE id='$id'";

mysqli_query($koneksi, $query);
mysqli_close($koneksi);
?>