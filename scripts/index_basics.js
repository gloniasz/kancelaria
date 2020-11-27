var addressDrewnowska = 'https://maps.google.com/maps?q=łask jarosława dąbrowskiego 2&t=&z=13&ie=UTF8&iwloc=&output=embed'
var addressLask = 'https://maps.google.com/maps?q=łódź drewnowska 13&t=&z=13&ie=UTF8&iwloc=&output=embed'

$(function() {
    $('#address-lask').click(function() {

        if ($('#gmap').attr('src') != addressDrewnowska) {
            $('#gmap').attr('src', addressDrewnowska);
        }
    });
});

$(function() {
    $('#address-drewnowska').click(function() {
        if ($('#gmap').attr('src') != addressLask) {
            $('#gmap').attr('src', addressLask);
        }
    });
});