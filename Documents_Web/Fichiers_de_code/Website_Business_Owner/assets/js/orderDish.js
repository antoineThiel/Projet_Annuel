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

function addRemoveButton(count, type){
    if (type === 'product'){
        $label = '#productQuantity' + count;
        $td = $($label).parent('td');
        var product = 'productDeleteButton' + count;
        $removeButton = ("<button class='btn btn-danger' id="+product+" onclick='removeFromController("+count+", `product`)'>Remove</button>");

        $td.append($removeButton);
    }else{
        $label = '#dishQuantity' + count;
        $td = $($label).parent('td');
        var product = 'dishDeleteButton' + count;
        $removeButton = ("<button class='btn btn-danger' id="+product+" onclick='removeFromController("+count+", `dish`)'>Remove</button>");

        $td.append($removeButton);
    }
}

function addModifyButton(count, type){
    if (type === 'product'){
        $label = '#productQuantity' + count;
        $td = $($label).parent('td');
        var product = 'productModifyButton' + count;
        $removeButton = ("<button class='btn btn-info mr-1' id="+product+" onclick='sendToController("+count+", `product`)'>Modify</button>");

        $td.append($removeButton);
    }else{
        $label = '#dishQuantity' + count;
        $td = $($label).parent('td');
        var product = 'dishModifyButton' + count;
        $removeButton = ("<button class='btn btn-info mr-1' id="+product+" onclick='sendToController("+count+", `dish`)'>Modify</button>");
        $td.append($removeButton);
    }
}

function sendToController(count, type){
    $.ajax({
        url: '/order/showquantity',
        method: 'POST',
        data: {quantity: addToCart(count, type)},
        success: function () {
            if (type === "product") {
                $productButton = '#productButton' + count;
            }else {
                $productButton = '#dishButton' + count;
            }
                $button = $($productButton);
                $button.css('background-color', 'green');
                $button.attr('disabled', true);
                if ($button.text() === 'Add to cart') {
                    addModifyButton(count, type);
                    addRemoveButton(count, type);
                    $button.text('Added');
                }else{
                    $button.text('Modified');
                }
            },
    })
}

function removeFromCart(count, type){
    var $items = [];
    $order = $('#orderNumber').text();
    $items.push($order);
    if (type === 'product'){
        $productName = '#productName' + count;
        $item = $('.product').find($productName).text();
        $items.push($item);
    }else{
        $productName = '#dishName' + count;
        $item = $('.dish').find($productName).text();
        $items.push($item);
    }
    return $items;
}

function removeFromController(count, type){
    $.ajax({
        url: '/order/removefrombasket',
        method: 'POST',
        data: {items: removeFromCart(count, type)},
        success: function() {
          if (type === "product"){
              $productModifyButton = '#productModifyButton' + count;
              $productDeleteButton = "#productDeleteButton" + count;
              $productButton = '#productButton' + count;
          }else{
              $productModifyButton = '#dishModifyButton' + count;
              $productDeleteButton = "#dishDeleteButton" + count;
              $productButton = '#dishButton' + count;
          }
          $modifyButton = $($productModifyButton);
          $deleteButton = $($productDeleteButton);
          $trueButton = $($productButton);
          $modifyButton.remove();
          $deleteButton.remove();
          $trueButton.text('Add to cart');
          $trueButton.css('background-color', '#17a2b8');
          $trueButton.attr('disabled', false);
        },
    })
}
window.addToCart = addToCart;
window.sendToController = sendToController;
window.removeFromController = removeFromController;

//stripe
$(document).ready(function () {

    var stripe = Stripe('pk_test_dcGtpg2zhsCP5KS8je7v0wbd00SXlpDQ7r');

// Create an instance of Elements.
    var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
    var style = {
        base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    };

// Create an instance of the card Element.
    var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>.
    card.mount('#card-element');

// Handle real-time validation errors from the card Element.
    card.addEventListener('change', function(event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
    });

// Handle form submission.
    var form = document.getElementById('payment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        stripe.createToken(card).then(function(result) {
            if (result.error) {
                // Inform the user if there was an error.
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
                // Send the token to your server.
                stripeTokenHandler(result.token);
            }
        });
    });

// Submit the form with the token ID.
    function stripeTokenHandler(token) {
        // Insert the token ID into the form so it gets submitted to the server
        var form = document.getElementById('payment-form');
        var hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);

        // Submit the form
        form.submit();
    }
});