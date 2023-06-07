<?php
$koneksi = mysqli_connect("nama_host", "nama_pengguna", "kata_sandi", "nama_database");

$id = $_POST['id'];

$query = "DELETE FROM data WHERE id='$id'";

mysqli_query($koneksi, $query);
mysqli_close($koneksi);
?>
