var $ = require('jquery');

$(document).ready(function(){
    $('.connexion_card').hide();

    $('#open_login').on("click",function(){
        console.log('salut');
        $('.connexion_card').show();
    })



});