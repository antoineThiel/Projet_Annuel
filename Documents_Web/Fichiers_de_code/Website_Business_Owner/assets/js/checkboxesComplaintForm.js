var $ = require('jquery');

$(document).ready(function () {

    $checkboxes = $('.form-check').find('input');
    $checkboxeNew = $checkboxes[0];
    $checkboxOngoing = $checkboxes[1];
    $checkboxClosed = $checkboxes[2];

    $checkboxOngoing.addEventListener("change", function () {
        $checkboxeNew.checked = false;
        $checkboxClosed.checked = false;
    });

    $checkboxeNew.addEventListener("change", function () {
        $checkboxOngoing.checked = false;
        $checkboxClosed.checked = false;
    });

    $checkboxClosed.addEventListener("change", function () {
        $checkboxOngoing.checked = false;
        $checkboxeNew.checked = false;
    });



});
