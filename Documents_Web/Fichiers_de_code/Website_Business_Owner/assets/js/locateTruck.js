var $ = require('jquery');

$(document).ready(function () {

    var Paris = {lat: 48.8534, lng: 2.3488};
    var Cergy = {lat: 49.0333, lng: 2.0667};

    // The map, centered at Paris
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: Paris});
    $api = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    $key = '&key=AIzaSyDrlSV5EIbonFEhtydrXFwQFDoizK8Y0H4&callback=initMap';

    var rad = function(x) {
        return x * Math.PI / 180;
    };

    var getDistance = function(Paris, Cergy) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(Cergy.lat - Paris.lat);
        var dLong = rad(Cergy.lng - Paris.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(Paris.lat)) * Math.cos(rad(Cergy.lat)) *
            Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
    };

    var distance = getDistance(Paris, Cergy);
    console.log(distance);



    var i = 1;
    var allId = [];

    $trucksId = $('.trucks').find("div").each(function(){
            $id = "#pos" + i;
            $fullAddress = $($id).val();
            $string1 = $fullAddress.replace(/\s/g, '+');
            $string = $string1.substring(0, $string1.length-11);
            $registration = $string1.substring($string1.length-10, $string1.length);
            allId.push($registration);
            i++;
        }
    );

    $.ajax({
        url: '/admin/truck/getId',
        method: "POST",
        data: {quantity: allId},
        success: function(result){
            console.log(result);
            allId = result;
        },
        async: false
    });

    i = 1;
    $allTrucks = $('.trucks').find('div').each(function () {
        $id = '#pos' + i;
        $fullAddress = $($id).val();
        $string1 = $fullAddress.replace(/\s/g, '+');
        $string = $string1.substring(0, $string1.length-11);
        $registration = $string1.substring($string1.length-10, $string1.length);


        var label = allId[i-1].toString();

        $.ajax({
            url: $api+$string+$key,
            dataType: 'json',
            success: function(result){
                $infos = result.results[0].geometry.location;
                $lat = $infos.lat;
                $lon = $infos.lng;
                var point = {lat:$lat, lng:$lon};
                var marker = new google.maps.Marker({position: point, map: map, label: label});
            }
        });
        i++;
    })
});
