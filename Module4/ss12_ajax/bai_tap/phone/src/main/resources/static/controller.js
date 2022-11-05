const base_url = window.location.origin;


jQuery(document).ready(function () {
    $('#getList').on('click', function () {
        getListPhone();
    });
    $('#create').on('click', function () {
        createPhone();
    });
    $('#deleteIt').on('click', function () {
        deletePhone();
    });
    $('#edit').on('click', function () {
        editPhone();
    });
    $('#search').on('click', function () {
        searchPhone();
    });
})

function searchPhone() {
    const modelSearch = $('#model_search').val();
    console.log(modelSearch);
    console.log(`${base_url}/api?searchModel=${modelSearch}`);
    $.ajax({
        type: "GET",
        url: `${base_url}/api?searchModel=${modelSearch}`,
        contentType: "application/json",
        dataType: 'json',
        success: function (event) {
            document.getElementById("bodyTable").innerHTML = drawBodyTable(event);
        },
        error: function (event) {
            if (event.status === 404) {
                alert("No phone have " + modelSearch);
            }
        }
    })
}

function editPhone() {
    const newId = $('#idEdit').val();
    const newProducer = $('#edit-producer').val();
    const newModel = $('#edit-model').val();
    const newPrice = $('#edit-price').val();
    const data = {
        id: newId,
        producer: newProducer,
        model: newModel,
        price: newPrice
    }
    $.ajax({
        type: "PUT",
        url: `${base_url}/api/`,
        contentType: "application/json",
        dataType: 'json',
        data: JSON.stringify(data),
        success: function (event) {
            document.getElementById("bodyTable").innerHTML = drawBodyTable(event);
        }
    });
}

function createPhone() {
    const producer = $('#new-producer').val();
    const model = $('#new-model').val();
    const price = $('#new-price').val();
    const data = {
        producer: producer,
        model: model,
        price: price
    }
    $.ajax({
        type: "POST",
        url: `${base_url}/api`,
        contentType: "application/json",
        dataType: 'json',
        data: JSON.stringify(data),
        success: function (event) {
            document.getElementById("bodyTable").innerHTML = drawBodyTable(event);

        },
        error: function (event) {
            $("#error-producer-create").html(event.responseJSON.producer);
            $("#error-model-create").html(event.responseJSON.model);
            $("#error-price-create").html(event.responseJSON.price);
        }
    })
}

function getListPhone() {
    $.ajax({
        type: "GET",
        url: `${base_url}/api`,
        contentType: "application/json",
        dataType: 'json',
        success: function (event) {
            document.getElementById("bodyTable").innerHTML = drawBodyTable(event);
        },
        error: function (event) {
            if (event.status === 404) {
                alert("Data empty ! Input something !!!")
            }
        }
    })
}

function drawBodyTable(event) {
    let bodyTable = ""
    for (let i = 0; i < event.length; i++) {
        bodyTable += drawRecord(i, event[i]);
    }
    return bodyTable;
}

function deletePhone() {
    const id = $("#deleteId").val();
    $.ajax({
        type: "PATCH",
        url: `${base_url}/api/${id}`,
        contentType: "application/json",
        dataType: 'json',
        success: function (event) {
            $('#delete').modal().hide();
            document.getElementById("bodyTable").innerHTML = drawBodyTable(event);
        },
        error: function (event) {
            alert(event.responseJSON.messageError);
        }

    })
}

function drawRecord(index, row) {
    return `<tr>
            <td>${index + 1}</td>
            <td>${row.producer}</td>
            <td>${row.model}</td>
            <td>${row.price}</td>
            <td> 
               <button onclick="showInfoDelete(${row.id})" type="button"
                    class="btn btn-outline-danger"
                    data-bs-toggle="modal" data-bs-target="#delete">
                    <i class="fa-solid fa-eraser"></i>
                </button>   
                <button onclick="showInfoEdit(${row.id})" type="button"
                    class="btn btn-outline-warning"
                    data-bs-toggle="modal" data-bs-target="#editModal">
                    <i class="fa-solid fa-highlighter"></i>
                </button> 
            </tr>`
}

function showInfoDelete(id) {
    document.getElementById("deleteId").value = id;
}

function showInfoEdit(id) {
    $.ajax({
        type: "GET",
        url: `${base_url}/api/${id}`,
        contentType: "application/json",
        dataType: 'json',
        success: function (event) {
            document.getElementById("idEdit").value = event.id;
            document.getElementById("edit-producer").value = event.producer;
            document.getElementById("edit-model").value = event.model;
            document.getElementById("edit-price").value = event.price;
        },
        error: function (event) {
            alert(event.responseJSON.messageError);
        }
    });

}

