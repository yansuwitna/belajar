<!DOCTYPE html>
<html>
<head>
  <title>Aplikasi CRUD</title>
</head>
<body>
  <h2>Data Pengguna</h2>
  <table id="userTable" border="1">
    <tr>
      <th>ID</th>
      <th>Nama</th>
      <th>Email</th>
      <th>Aksi</th>
    </tr>
  </table>

  <h2>Tambah Pengguna</h2>
  <form id="addForm">
          <input type="text" id="name" placeholder="Nama" required>
          <input type="email" id="email" placeholder="Email" required>
          <button type="submit">Tambah</button>
  </form>
 
  <h2>Edit Pengguna</h2>
  <form id="editForm" style="display:none;">
    <input type="hidden" id="editId">
    <input type="text" id="editName" placeholder="Nama" required>
    <input type="email" id="editEmail" placeholder="Email" required>
    <button type="submit">Simpan</button>
    <button type="button" onclick="cancelEdit()">Batal</button>
  </form>
 
  <script src="script.js"></script>
</body>
</html>
