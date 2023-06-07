<?php
$koneksi = mysqli_connect("nama_host", "nama_pengguna", "kata_sandi", "nama_database");

$id = $_POST['id'];

$query = "SELECT * FROM data WHERE id='$id'";
$result = mysqli_query($koneksi, $query);
$data = mysqli_fetch_assoc($result);

echo json_encode($data);

mysqli_close($koneksi);
?> 