function fill_incoming(f_id){
    $.ajax({
        url: "/franchisee/work/ajax/fill_incoming",

        success: function (response){
            $('#incoming').html(response);

            $('.incomingOrder').on("click" , function (){
                let order_id=this.id;

                let id = order_id.match(/\d+/);
                confirm_order(id[0]);
            })
        }
    })
}


function fill_current(){
    $.ajax({
        url: "/franchisee/work/ajax/fill_current",
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

function confirm_order(id){
    $.ajax({
        url:"/franchisee/work/ajax/confirmOrder",
        method:"POST",
        data:{
            id_order:id,
        },
        success:function (response){
            $("#myDialog").html(response);
            $(".modal").modal("show");

            fill_incoming();
        }
    })
}


const f_id = $('#vars').attr('f_id');

fill_incoming();
fill_current();
fill_create();



setInterval( function (){
    fill_incoming();
} , 12000)
