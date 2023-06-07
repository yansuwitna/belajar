$(document).ready(function() {
    // Load data saat halaman pertama kali dimuat
    loadData();
  
    // Submit form
    $('#form-data').on('submit', function(event) {
      event.preventDefault();
      var id = $('#id').val();
      var nama = $('#nama').val();
      var alamat = $('#alamat').val();
      var telepon = $('#telepon').val();
  
      // Cek apakah sedang menambahkan data baru atau mengedit data
      if (id === '') {
        // Tambahkan data baru
        $.ajax({
          url: 'add_data.php',
          method: 'POST',
          data: {nama: nama, alamat: alamat, telepon: telepon},
          success: function(data) {
            $('#form-data')[0].reset();
            loadData();
          }
        });
      } else {
        // Edit data
        $.ajax({
          url: 'edit_data.php',
          method: 'POST',
          data: {id: id, nama: nama, alamat: alamat, telepon: telepon},
          success: function(data) {
            $('#form-data')[0].reset();
            loadData();
          }
        });
      }
    });
  
    // Edit data
    $(document).on('click', '.edit', function() {
      var id = $(this).data('id');
  
      $.ajax({
        url: 'get_data.php',
        method: 'POST',
        data: {id: id},
        dataType: 'json',
        success: function(data) {
          $('#id').val(data.id);
          $('#nama').val(data.nama);
          $('#alamat').val(data.alamat);
          $('#telepon').val(data.telepon);
        }
      });
    });
  
    // Hapus data
    $(document).on('click', '.delete', function
    {
        var id = $(this).data('id');
        
        if (confirm("Anda yakin ingin menghapus data ini?")) {
        $.ajax({
        url: 'delete_data.php',
        method: 'POST',
        data: {id: id},
        success: function(data) {
        loadData();
        }
        });
        }
        });
        
        // Load data dari database dan tampilkan di tabel
        function loadData() {
        $.ajax({
        url: 'get_all_data.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
        var rows = '';
        $.each(data, function(index, item) {
        rows += '<tr>';
        rows += '<td>' + item.id + '</td>';
        rows += '<td>' + item.nama + '</td>';
        rows += '<td>' + item.alamat + '</td>';
        rows += '<td>' + item.telepon + '</td>';
        rows += '<td>';
        rows += '<button class="edit" data-id="' + item.id + '">Edit</button>';
        rows += '<button class="delete" data-id="' + item.id + '">Hapus</button>';
        rows += '</td>';
        rows += '</tr>';
        });
        $('#tabel-data tbody').html(rows);
        }
        });
        }