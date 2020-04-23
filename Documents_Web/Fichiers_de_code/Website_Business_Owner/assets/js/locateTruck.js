var $ = require('jquery');

$(document).ready(function () {
    var baseLat = 48.8534;
    var baseLong = 2.3488;
    var Paris = {lat: 48.8534, lng: 2.3488};
    // The map, centered at Paris
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: Paris});
    $api = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    $key = '&key=AIzaSyDrlSV5EIbonFEhtydrXFwQFDoizK8Y0H4&libraries=places&callback=initMap';

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);


    var i = 1;
    $allTrucks = $('.trucks').find('div').each(function () {
        $id = '#pos' + i;
        $fullAddress = $($id).val();
        $string = $fullAddress.replace(/\s/g, '+');
        $truckRegistration = $string.substring($string.length-10, $string.length);
        $string = $string.substring(0, $string.length-11);
        console.log($string, $truckRegistration);
        var request = {
            placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
            fields: ['name', 'formatted_address', 'place_id', 'geometry']
        };
        $.ajax({
            url: $api+$string+$key,
            dataType: 'json',
            success: function(result){
                $infos = result.results[0].geometry.location;
                $lat = $infos.lat;
                $lon = $infos.lng;
                var point = {lat:$lat, lng:$lon};

                service.getDetails(request, function(place, status) {
                    console.log(place);
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        var marker = new google.maps.Marker({position: point, map: map});
                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                                'Place IdD: ' + place.place_id + '<br>' +
                                place.formatted_address + '</div>');
                            infowindow.open(map, this);
                        });
                     }
                });
           }
       });
        i++;
    })
});
