function fill_incoming(f_id){
    $.ajax({
        url: "/franchisee/work/ajax/fill_incoming",
        data:{
            f_id: f_id,
        },
        success: function (response){
            $('#incoming').html(response)
        }
    })
}

function fill_current(f_id){
    $.ajax({
        url: "/franchisee/work/ajax/fill_current",
        data:{
            f_id: f_id,
        },
        success: function (response){
            $('#current').html(response)
        }
    })
}


function fill_create(){
    $.ajax({
        url: "/franchisee/work/ajax/fill_create",
        success: function (response){
            $('#create').html(response)

            $("#submit").on("click", function (){
                ajax_create();
            })
        }
    })
}

function ajax_create(){
    $.ajax({
        url: "/franchisee/work/ajax/create_customer",
        type: 'POST',
        data:{
            name:$("#name").val(),
            lname:$("#lastname").val(),
            mail:$("#mail").val(),
            pswd:$("#password").val(),
        },
        success:function (response){
            $("#myDialog").html(response);
            $(".modal").modal("show");
        }
    })
}


const f_id = $('#vars').attr('f_id');
fill_incoming(f_id);
fill_current(f_id);
fill_create();
