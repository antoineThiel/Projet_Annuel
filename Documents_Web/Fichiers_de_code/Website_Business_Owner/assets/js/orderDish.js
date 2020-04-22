var $ = require('jquery');

var i = 0;

$(document).ready(function () {
    var $productName = $('.productName');
    $productName.find('label').each(function(){
        i++;
        var newID='productName'+i;
        $(this).attr("id", newID);
    });
    i = 0;
    var $productPrice = $('.productPrice');
    $productPrice.find('label').each(function(){
        i++;
        var newID='productPrice'+i;
        $(this).attr("id", newID);
    });
    i = 0;

    var $productQuantity = $('.productQuantity');
    $productQuantity.find('label').each(function(){
        i++;
        var newID='productQuantity'+i;
        $(this).attr("id", newID);
    });
    i = 0;
    $productQuantity.find('button').each(function () {
        i++;
        var newID = 'productButton'+i;
        $(this).attr("id", newID);
    });


    i = 0;
    var $dishName = $('.dishName');
    $dishName.find('label').each(function(){
        i++;
        var newID='dishName'+i;
        $(this).attr("id", newID);
    });
    i = 0;
    var $dishPrice = $('.dishPrice');
    $dishPrice.find('label').each(function(){
        i++;
        var newID='dishPrice'+i;
        $(this).attr("id", newID);
    });
    i = 0;
    var $dishQuantity = $('.dishQuantity');
    $dishQuantity.find('label').each(function(){
        i++;
        var newID='dishQuantity'+i;
        $(this).attr("id", newID);
    });
    i=0;
    $dishQuantity.find('button').each(function () {
        i++;
        var newID = 'dishButton'+i;
        $(this).attr("id", newID);
    });
});

function addToCart(count, type){
    var $items = [];
    $order = $('#orderNumber').text();
    $items.push($order);
    if (type === "product") {
        $productName = '#productName' + count;
        $item = $('.product').find($productName).text();
        $items.push($item);
        $productPrice = "#productPrice" + count;
        $item = $('.product').find($productPrice).text();
        $items.push($item);
        $productQuantity = "#productQuantity" + count;
        $item = $($productQuantity).find('input').val();
        $items.push($item);
    }else{
        $productName = '#dishName' + count;
        $item = $('.dish').find($productName).text();
        $items.push($item);
        $productPrice = "#dishPrice" + count;
        $item = $('.dish').find($productPrice).text();
        $items.push($item);
        $productQuantity = "#dishQuantity" + count;
        $item = $($productQuantity).find('input').val();
        $items.push($item);
    }
    return $items;
}

function sendToController(count, type){
    $.ajax({
        url: '/order/showquantity',
        method: 'POST',
        data: {quantity: addToCart(count, type),
        success: function () {
            if (type === "product") {
                $productButton = '#productButton' + count;
            }else {
                $productButton = '#dishButton' + count;
            }
                $button = $($productButton);
                $button.text('Added');
                $button.css('background-color', 'green');
                $button.attr("disabled", true);
            }
        },
    })
}
window.addToCart = addToCart;
window.sendToController = sendToController;
