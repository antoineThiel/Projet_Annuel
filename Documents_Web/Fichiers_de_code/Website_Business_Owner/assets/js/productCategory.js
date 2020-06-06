var $ = require('jquery');


$select = $('#category-select option:selected');
$category = $select.text();
$locale = window.location.href;
$locale = $locale.split('/')
$locale = $locale[3];


$(document).ready(function () {
    $('#category-select').change(function(){
        var selectedCategory = $(this).children("option:selected").val();
        var orderId = $('#orderNumber').text();
        console.log(selectedCategory);
        $.ajax({
                url: '/order/get_products',
                method: 'POST',
                data: {category: selectedCategory,
                        order: orderId},
                success: function (data) {
                    $tbody = $('#productTable').empty();
                    $i = 1;
                    data.forEach(function(object){

                        $product = ('<tr class="product">' +
                            '<td class="productName"><label id="productName'+$i+'" class="d-none">'+object.name+'</label>' +
                            '<p>'+object.name+'</p></td>' +
                            '<td class="productQuantityInfo"><label>'+object.quantity+'</label></td>'+
                            '<td class="productPrice"><label id="productPrice'+$i+'">'+object.price+'</label> €</td>' +
                            '<td class="productQuantity">'+
                            '<label id="productQuantity'+$i+'"><input type="number" min="1" max="'+object.quantity+'"></label>'+
                            '<button class="btn btn-info" id="productButton'+$i+'" onclick="sendToController('+$i+', \'product\')">');
                            if ($locale === 'en'){
                                $product += ('Add to cart');
                            }else if($locale === 'fr'){
                                $product += ('Ajouter au panier');
                            }else if($locale === 'es'){
                                $product += ('Añadir a la cesta')
                            }
                            $product += ('</button>'+
                            '</td></tr>');
                        console.log($product);
                        $tbody.append($product);
                        $i++;
                    })
                }
            }

        )
    })

})