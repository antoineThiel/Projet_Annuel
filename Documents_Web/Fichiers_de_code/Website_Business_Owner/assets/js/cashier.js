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

            add_events_on_current();
        }
    })
}

function add_events_on_current(){
    $("#customer_select").on("change" , function (){

       if( $("#customer_select").val() === "guest guest" ){
            $("#with_points").hide("fade", {}, 1000);
       }else{
           $("#with_points").show("fade", {}, 2200);
       }
    });

    $(".addToCart").on("click" , function (){

        let aORm, item_id;
        let $line = $(this).siblings("select").find("option:selected");

        if( typeof $line.attr("id_menu") !== 'undefined'){
            aORm = 0;
            item_id = $line.attr("id_menu");
        }
        else {
            aORm = 1;
            item_id = $line.attr("id_article");

        }

        if( $line.prop("disabled") === false){
            // $.ajax({
            //     url:"/franchisee/work/ajax/addToCart",
            //     method: "POST",
            //     data:{
            //         item_id: item_id,
            //         aORm: aORm,
            //     },
            //     success:function (response){
            //         $("#recap").html(response);
            //     }
            // })

            let newLine = $("<p></p>").text($line.text());
            newLine.attr({
                "item_id": item_id,
                "aORm" : aORm,
            });
            let $btn = $("<button class='btn app-color-match'><span class='ui-icon ui-icon-trash'></span></button>");

            $btn.on("click",function (){
                $(this).parent().remove();
            });

            newLine.append($btn);
            $("#recap").append(newLine);

        }
        else{
            if(  $(this).siblings(".toBeRemoved").length === 0) {
                $(this).parent().append("<small class='toBeRemoved text-muted text-danger'>Aucun item selectionné</small>");
                setTimeout(function () {
                    $(".toBeRemoved").remove();
                }, 3500);
            }
        }


    })

    $("#with_points").on("click" , function(){
        console.log("paiement en cours");
    });


    $("#without_points").on("click" , function(){
        console.log("paiement en cours");
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
