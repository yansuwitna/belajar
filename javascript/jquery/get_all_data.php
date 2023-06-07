<?php
$koneksi = mysqli_connect("nama_host", "nama_pengguna", "kata_sandi", "nama_database");

$query = "SELECT * FROM data";
$result = mysqli_query($koneksi, $query);
$data = array();

while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
}

echo json_encode($data);

mysqli_close($koneksi);
?>
