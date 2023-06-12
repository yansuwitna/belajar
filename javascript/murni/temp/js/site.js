function SetValidation(idform) {
    idform = idform || "main_form";
    SetRequired();
    $("#" + idform).validate();
    SetJqueryForm(idform);
}

function SetValidationNoReload(idform, callback) {
    idform = idform || "main_form";
    SetRequired();
    $("#" + idform).validate();
    SetJqueryFormNoReload(idform, callback);
}

function SetValidationHorizontal(idform) {
    idform = idform || "main_form";
    SetRequiredHorizontal();
    $("#" + idform).validate();
    SetJqueryForm(idform);
}

function SetRequired() {
    $(".harus").each(function () {
        var input = $(this).parent().find(":input").first();
        input.attr('required', true);

        var name = input.attr('name');
        var label = `<label id="${name}-error" class="error" for="${name}" style="display: none">This field is required.</label>`;

        input.closest('.form-group').append(label);
    });
}

function SetRequiredHorizontal() {
    $(".harus").each(function () {
        var input = $(this).parent().find(":input").first();
        input.attr('required', true);

        let atribut = $(this).html();

        var name = input.attr('name');
        var label = `<div class="col-md-3"><label id="${name}-error" class="error" for="${name}" style="display: none">${atribut} harus diisi.</label></div>`;

        $(this).parent().append(label);
    });
}

function ShowError(message) {
    Swal.fire(
        "Gagal!",
        message,
        "error"
    );
}

function ShowSuccess(message) {
    Swal.fire(
        "Berhasil!",
        message,
        "success"
    );
}

function ShowInfo(message) {
    Swal.fire(
        "Info!",
        message,
        "info"
    );
}

function ShowDevelopmentInfo() {
    ShowInfo("Maaf, fitur ini sedang dalam masa pengembangan.");
}

function ShowLoading() {
    Swal.fire({
        title: 'Mohon tunggu...!',
        //html: 'data uploading',// add html attribute if you want or remove
        allowOutsideClick: false,
        willOpen: () => {
            Swal.showLoading();
        }
    });
}

function KonfirmasiSubmit(idForm, message) {
    idForm = idForm || "main_form";
    Konfirmasi(message,
        () => {
            $("#" + idForm).submit();
        });
}

function Konfirmasi(message, callback) {
    message = message || "Anda akan mengirim form ini!";
    Swal.fire({
        title: 'Apakah Anda yakin?',
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Batal',
        confirmButtonText: 'Ya'
    }).then((result) => {
        if (result.value) {
            callback();
        }
    });
}

$(document).on('select2:open', () => {
    document.querySelector('.select2-search__field').focus();
});

function LoadPartial(url, idElement) {
    $("#" + idElement).html('<div class="w-100 text-center"><i class="fa fa-spinner fa-spin"></i></div>');
    $.get(url, function (res) {
        $("#" + idElement).html(res);
    });
}