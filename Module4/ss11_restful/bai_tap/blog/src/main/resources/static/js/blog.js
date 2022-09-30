$(document).ready(function () {
    $('#getList').on('click', function () {
        getListBlog();
    });

    $('#saveBlog').on('click', function () {
        saveBlog();
    });

    $('#listCategory').on('click', function () {
        listCategory();
    });

})

function listCategory() {
    const url_link = "http://localhost:8080/api/categoryList"

    $.ajax({
        type: "get",
        url: url_link,
        contentType: "application/json",
        dataType: 'json',
        success: function (categoryJson) {
            let table = "  <table class=\"table table-bordered\">\n" +
                "        <thead>\n" +
                "        <tr>\n" +
                "            <th>Id</th>\n" +
                "            <th>Name</th>\n" +
                "        </tr>\n" +
                "        </thead>\n" +
                "        <tbody>";
            for (let i = 0; i < categoryJson.length; i++) {
                table += "<tr>" +
                    "<td>" + categoryJson[i].id + "</td>" +
                    "<td>" + categoryJson[i].name + "</td>" +
                    "</tr>"
            }
            table += "</tbody>\n" +
                "    </table>"
            $('#table').html(table);
            $('#message').html("get data category success");
        },
        error: function () {
            $('#message').html("get data category error");
        }
    })
}

function saveBlog() {
    const url_link = "http://localhost:8080/api/save";
    const nameNew = $('#name').val();
    const contentNew = $('#content').val();
    const titleNew = $('#title').val();
    const categoryNew = $('#category').val();

    const dataObject = {
        name: nameNew,
        content: contentNew,
        title: titleNew,
        category: categoryNew,
    }

    console.log(dataObject);

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "post",
        // dataType: JSON,
        // contentType: "application/json",
        url: url_link,
        data: JSON.stringify(dataObject),
        success: function () {
            $('#message').html('Status changed');
        },
        error: function () {
            $('#message').html("data insert error");
        }
    })
}

function getListBlog() {
    const url_link = "http://localhost:8080/api/getList";

    $.ajax({
        type: "get",
        url: url_link,
        contentType: "application/json",
        dataType: 'json',
        success: function (blogJson) {
            console.log(blogJson);
            let table = drawData(blogJson)
            // let table = "  <table class=\"table table-bordered\">\n" +
            //     "        <thead>\n" +
            //     "        <tr>\n" +
            //     "            <th>Name</th>\n" +
            //     "            <th>Content</th>\n" +
            //     "            <th>Title</th>\n" +
            //     "            <th>Category Name</th>\n" +
            //     "            <th>Action</th>\n" +
            //     "        </tr>\n" +
            //     "        </thead>\n" +
            //     "        <tbody>";
            // for (let i = 0; i < blogJson.length; i++) {
            //     table += getBlog(blogJson[i]);
            // }
            // table += "</tbody>\n" +
            //     "    </table>"
            $('#table').html(table);
            $('#message').html("get data success");
        },
        error: function () {
            $('#message').html("get data error");
        }
    })
}

function drawData(blogJson) {
    let table = "  <table class=\"table table-bordered\">\n" +
        "        <thead>\n" +
        "        <tr>\n" +
        "            <th>Name</th>\n" +
        "            <th>Content</th>\n" +
        "            <th>Title</th>\n" +
        "            <th>Category Name</th>\n" +
        "            <th>Action</th>\n" +
        "        </tr>\n" +
        "        </thead>\n" +
        "        <tbody>";

    for (let i = 0; i < blogJson.length; i++) {
        table += getBlog(blogJson[i]);
    }

    table += "</tbody>\n" +
        "    </table>"
    return table;
}

function getBlog(blog) {
    return `<tr><td >${blog.name}</td><td >${blog.content}</td><td >${blog.title}</td><td >${blog.category.name}</td>` +
        `<td><button class="details" onclick="info(${blog.id})">Details</button></td></tr>`;
}

function info(id) {
    const url_link = "http://localhost:8080/api/readInfo/" + id;
    console.log(url_link);
    $.ajax({
        type: "get",
        url: url_link,
        contentType: "application/json",
        dataType: 'json',
        success: function (blogJson) {
            console.log(blogJson);
            let table = "  <table class=\"table table-bordered\">\n" +
                "        <thead>\n" +
                "        <tr>\n" +
                "            <th>Name</th>\n" +
                "            <th>Content</th>\n" +
                "            <th>Title</th>\n" +
                "            <th>Category Name</th>\n" +
                "        </tr>\n" +
                "        </thead>\n" +
                "        <tbody>";
            table += `<tr><td >${blogJson.name}</td><td >${blogJson.content}</td><td >${blogJson.title}</td><td >${blogJson.category.name}</td></tr>`

            table += "</tbody> </table>"

            console.log(table)
            $('#table').html(table);
            $('#message').html("get Info data success");
        },
        error: function () {
            $('#message').html("get data error");
        }
    })
}
