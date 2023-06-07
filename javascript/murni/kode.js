document.addEventListener("DOMContentLoaded", function () {
  loadUsers();

  // Tambah pengguna
  document
    .getElementById("addForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      addUser();
    });

  // Edit pengguna
  document
    .getElementById("editForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      updateUser();
    });
});

// Mendapatkan daftar pengguna dari server
function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "api.php", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var users = JSON.parse(xhr.responseText);
      var table = document.getElementById("userTable");
      table.innerHTML = "";
      for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var row = table.insertRow(i);
        row.insertCell(0).textContent = user.id;
        row.insertCell(1).textContent = user.name;
        row.insertCell(2).textContent = user.email;
        var actionCell = row.insertCell(3);
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
          editUser(user);
        });
        actionCell.appendChild(editButton);
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Hapus";
        deleteButton.addEventListener("click", function () {
          deleteUser(user.id);
        });
        actionCell.appendChild(deleteButton);
      }
    }
  };
  xhr.send();
}

// Menambahkan pengguna baru
function addUser() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "api.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (xhr.status === 201) {
      loadUsers();
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
    }
  };
  xhr.send("name=" + name + "&email=" + email);
}

// Mengedit pengguna
function editUser(user) {
  document.getElementById("editId").value = user.id;
  document.getElementById("editName").value = user.name;
  document.getElementById("editEmail").value = user.email;
  document.getElementById("editForm").style.display = "block";
}

// Membatalkan pengeditan pengguna
function cancelEdit() {
  document.getElementById("editForm").style.display = "none";
}

// Memperbarui pengguna
function updateUser() {
  var id = document.getElementById("editId").value;
  var name = document.getElementById("editName").value;
  var email = document.getElementById("editEmail").value;
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", "api.php?id=" + id, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (xhr.status === 200) {
      loadUsers();
      cancelEdit();
    }
  };
  xhr.send("name=" + name + "&email=" + email);
}

// Menghapus pengguna
function deleteUser(id) {
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", "api.php?id=" + id, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      loadUsers();
    }
  };
  xhr.send();
}
