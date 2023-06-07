<?php
// Konfigurasi database MySQL
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'latihan';

// Membuat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Menghandle request GET untuk mendapatkan daftar pengguna
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $sql = 'SELECT * FROM users';
  $result = $conn->query($sql);
  $users = array();
  if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
      $users[] = $row;
    }
  }
  echo json_encode($users);
}

// Menghandle request POST untuk menambahkan pengguna baru
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
  if ($conn->query($sql) === TRUE) {
    http_response_code(201);
  }
}

// Menghandle request PUT untuk memperbarui pengguna
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
  parse_str(file_get_contents(''));
  $id = $_GET['id'];
  $name = $_PUT['name'];
  $email = $_PUT['email'];
  $sql = "UPDATE users SET name='".$name."', email='".$email."' WHERE id='".$id."'";
  http_response_code(222);
  // if ($conn->query($sql) === TRUE) {
  //   http_response_code(200); 
  // }
}

// Menghandle request DELETE untuk menghapus pengguna
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
  $id = $_GET['id'];
  $sql = "DELETE FROM users WHERE id='$id'";
  if ($conn->query($sql) === TRUE) {
    http_response_code(200);
  }
}

// Menutup koneksi ke database
$conn->close();
?>

